// tslint:disable:no-var-requires
const { en } = require("../nls");

describe("Login process", () => {
  it("Visits the app root url", () => {
    cy.visit("/");

    // check titles, labels and buttons
    cy.contains("h4", en.login.modal.title);
    cy.contains("label", en.login.modal.label.enterEmail);
    cy.contains("label", en.login.modal.label.enterPassword);
    cy.contains("button", en.login.modal.button.login);
    cy.contains("a", en.login.modal.button.forgotPassword);

    // test input validation for email
    cy.get("input[name=email]").type("name");
    cy.contains("div", en.login.modal.validation.emailInvalid);
    cy.get("input[name=email]").type("{backspace}{backspace}{backspace}{backspace}");
    cy.contains("div", en.login.modal.validation.emailRequired);
    cy.get("input[name=email]").type("test@example.com");

    // test input validation for password
    cy.get("input[name=password]").type("name");
    cy.contains("div", "4");
    cy.get("input[name=password]").type("{backspace}{backspace}{backspace}{backspace}");
    cy.contains("div", en.login.modal.validation.passwordRequired);
    cy.get("input[name=password]").type("short");
    // manually replace placeholder for password length
    cy.contains("div", en.login.modal.validation.passwordTooShort.replace("{passwordMinLength}", 8));
    cy.get("input[name=password]").type("longenough");

    // TODO test password forgotten
    cy.get("a[name=passwordForgotten]").click();

    cy.get("button[name=login]").click();
  });
});

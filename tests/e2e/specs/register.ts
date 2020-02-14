
describe("Registration process", () => {
  // tslint:disable:no-var-requires
  const { en } = require("../nls");
  it("Visits the app root url", () => {
    cy.visit("/");
    // for the most part, it's just the same as logging in - additionally choose a username
    // check titles, labels and buttons
    cy.contains(".v-toolbar__title", en.login.modal.title);
    cy.contains("a[name=registering]", en.login.register.start);
    cy.get("a[name=registering]").click();
    cy.contains(".v-toolbar__title", en.login.register.title);
    cy.contains("label", en.login.register.label.enterUsername);
    cy.contains("label", en.login.modal.label.enterEmail);
    cy.contains("label", en.login.modal.label.enterPassword);
    cy.contains("a", en.login.modal.button.forgotPassword);

    // test input validation for email
    cy.get("input[name=email]").type("name");
    cy.contains("div", en.login.modal.validation.emailInvalid);
    cy.get("input[name=email]").type("{backspace}{backspace}{backspace}{backspace}");
    cy.contains("div", en.login.modal.validation.emailRequired);
    cy.get("input[name=email]").type("test@example.com");

    // test input validation for password
    cy.get("input[name=username]").type("username");
    cy.get("input[name=password]").type("name");
    cy.contains("div", "4");
    cy.get("input[name=password]").type("{backspace}{backspace}{backspace}{backspace}");
    cy.contains("div", en.login.modal.validation.passwordRequired);
    cy.get("input[name=password]").type("short");
    // manually replace placeholder for password length
    cy.contains("div", en.login.modal.validation.passwordTooShort.replace("{passwordMinLength}", 8));
    cy.get("input[name=password]").type("longenough");

    cy.get("button[name=submit]").click();
  });
});

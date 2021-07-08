
describe("Home", () => {
  const { en } = require("../nls");

  it("Visits the app root url", () => {
    cy.visit("/");

    // check titles, labels and buttons
    cy.contains("h2", en.game.config.title);
    const startResources = en.game.config.startResources
      .replace("{metal}", 500)
      .replace("{crystal}", 500)
      .replace("{deuterium}", 500);
    cy.contains("p", startResources);
  });
});

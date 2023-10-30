describe("About Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Thl0B0CyWlBvuzPKefO28SRArsuLfXJ3",
      {
        statusCode: 200,
        ok: true,
        fixture: "home-section",
      }
    );
    cy.visit("http://localhost:3000/about");
  });

  it("Should render an about page", () => {
    cy.get('[data-test="section-about"]')
      .should("be.visible")
      .get('[data-test="about-title"]')
      .should("exist")
      .get('[data-test="heading-secondary"]')
      .should("exist")
      .get('[data-test="about-paragraph"]')
      .should("exist")
      .get('[data-test="reading-newspaper"]')
      .should("exist")
      .get('[data-test="typewriter"]')
      .should("exist")
      .get('[data-test="new york times headquarters"]')
      .should("exist");
  });
  it("Should be able to click on home tab and navigate to home page", () => {
    cy.get('[data-test="home-tab"]')
      .should("exist")
      .first()
      .click()
      .url()
      .should("eq", "http://localhost:3000/");
  });
});

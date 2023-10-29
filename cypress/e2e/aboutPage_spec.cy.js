// import cy from "cypress";

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

  it("Should render a header with app title, logo, and video", () => {
    cy.get('[data-test="header-container"]')
      .contains("NY Times News")
      .get('[data-test="logo')
      .get('[data-test="background-video"]');
  });

  it("Should render a navigation bar with categories or sections and icons", () => {
    cy.get('[data-test="nav-bar"]')
      .get('[data-test="home-tab"]')
      .get('[data-test="home-icon"]')
      .should("exist")
      .get('[data-test="us-tab"]')
      .get('[data-test="us-icon"]')
      .should("exist")
      .get('[data-test="world-tab"]')
      .get('[data-test="world-icon"]')
      .should("exist")
      .get('[data-test="technology-tab"]')
      .get('[data-test="technology-icon"]')
      .should("exist")
      .get('[data-test="arts-tab"]')
      .get('[data-test="arts-icon"]')
      .should("exist")
      .get('[data-test="food-tab"]')
      .get('[data-test="food-icon"]')
      .should("exist")
      .get('[data-test="health-tab"]')
      .get('[data-test="health-icon"]')
      .should("exist")
      .get('[data-test="about-tab"]')
      .get('[data-test="about-icon"]')
      .should("exist");
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

describe("Detail Article Page", () => {
  beforeEach(() => {
    cy.intercept(
      "https://api.nytimes.com/svc/topstories/v2/food.json?api-key=Thl0B0CyWlBvuzPKefO28SRArsuLfXJ3",
      {
        statusCode: 200,
        ok: true,
        fixture: "food-section",
      }
    );
    cy.visit("http://localhost:3000/food");
  });
  it("Should be able to click on food tab and navigate to food page", () => {
    cy.get('[data-test="food-tab"]')
      .should("exist")
      .first()
      .click()
      .url()
      .should("eq", "http://localhost:3000/food");
  });

  it("Should show all article cards and be able to click on an article image and be shown more info on article", () => {
    cy.get('[data-test="article-container"]')
      .children()
      .get(':nth-child(1) > a > [data-test="article-img"]')
      .click()
      .get('[data-test="single-article-img"]')
      .should("be.visible")
      .get('[data-test="single-article-title"]')
      .should("be.visible")
      .get('[data-test="single-article-byline"]')
      .should("be.visible")
      .get('[data-test="single-article-abstract"]')
      .should("be.visible");

    cy.contains(
      '[data-test="single-article-title"]',
      "The Real End of David Chang’s Momofuku Ko Happened Years Ago"
    );
    cy.contains('[data-test="single-article-byline"]', "By Pete Wells");
    cy.contains(
      '[data-test="single-article-abstract"]',
      "The revolutionary tasting-menu restaurant eventually came to resemble the fine-dining titans it tried to dethrone."
    );
    cy.get('[data-test="link-details"]').contains("The New York Times").click();
  });

  it("Should be able to click on the full article link", () => {
    cy.get('[data-test="article-container"]')
      .children()
      .get(':nth-child(1) > a > [data-test="article-img"]')
      .click();

    cy.get('[data-test="link-details"]').contains("The New York Times").click();
  });
});

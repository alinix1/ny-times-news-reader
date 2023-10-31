describe("Detail Article Page", () => {
  beforeEach(() => {
    cy.intercept(
      "https://api.nytimes.com/svc/topstories/v2/food.json?api-key=LU6VCnan2YWTBZv4RkzC0faIiydCEDPL",
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

  it.skip("Should show all article cards and be able to click on an article image and be shown more info on article", () => {
    cy.get('[data-test="article-container"]')
      .children()
      .get(':nth-child(1) > a > [data-test="article-img"]')
      .click();
    // .get('[data-test="single-article-img"]')
    // .should("be.visible")
    // .get('[data-test="single-article-caption"]')
    // .should("be.visible")
    // .get('[data-test="single-article-title"]')
    // .should("be.visible")
    // .get('[data-test="single-article-byline"]')
    // .should("be.visible")
    // .get('[data-test="single-article-abstract"]')
    // .should("be.visible");

    // cy.contains(
    //   '[data-test="single-article-title"]',
    //   "Mom’s Favorite Chicken Dinner Gets a Makeover"
    // );
    // cy.contains('[data-test="single-article-byline"]', "By Melissa Clark");
    // cy.contains(
    //   '[data-test="single-article-abstract"]',
    //   "Melissa Clark takes mustardy, bread crumb-laden thighs to new heights."
    // );
    // cy.get('[data-test="link-details"]').contains("The New York Times").click();
  });

  it.skip("Should be able to click on the full article link", () => {
    cy.get('[data-test="article-container"]')
      .children()
      .get(':nth-child(1) > a > [data-test="article-img"]')
      .click();

    cy.get('[data-test="link-details"]').contains("The New York Times").click();
  });
});

// TODO
// fixture needs to be stubbed and used for testing

describe("Detail Article Page", () => {
  beforeEach(() => {
    cy.intercept(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LU6VCnan2YWTBZv4RkzC0faIiydCEDPL",
      {
        statusCode: 200,
        ok: true,
        fixture: "home-section",
      }
    );
    cy.visit("http://localhost:3000");
  });
  it("Should show all article cards and be able to click on an article image and be shown more info on article", () => {
    cy.get('[data-test="article-list"]')
      .should("be.visible")
      .children()
      .get(':nth-child(1) > a > [data-test="article-img"]')
      .click()
      .get('[data-test="single-article-img"]')
      .should("be.visible")
      .get('[data-test="single-article-caption"]')
      .should("be.visible")
      .get('[data-test="single-article-title"]')
      .should("be.visible")
      .get('[data-test="single-article-byline"]')
      .should("be.visible")
      .get('[data-test="single-article-abstract"]')
      .should("be.visible");
    cy.contains(
      '[data-test="single-article-caption"]',
      "Before the attack by Hamas on Oct. 7, Prime Minister Benjamin Netanyahu and top Israeli security officials believed the greatest threats to Israel were Iran and Hezbollah."
    );
    cy.contains(
      '[data-test="single-article-title"]',
      "How Years of Israeli Failures on Hamas Led to a Devastating Attack"
    );
    cy.contains(
      '[data-test="single-article-byline"]',
      "By Ronen Bergman, Mark Mazzetti and Maria Abi-Habib"
    );
    cy.contains(
      '[data-test="single-article-abstract"]',
      "Israeli officials completely underestimated the magnitude of the Oct. 7 attacks by Hamas, shattering the country’s once invincible sense of security."
    );
  });
  it("Should be able to click on the full article link", () => {
    cy.get('[data-test="article-container"]')
      .should("be.visible")
      .children()
      .get(':nth-child(1) > a > [data-test="article-img"]')
      .click();

    cy.get('[data-test="link-details"]').contains("The New York Times").click();
  });
});

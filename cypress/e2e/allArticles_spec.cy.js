describe("Main Article Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=Thl0B0CyWlBvuzPKefO28SRArsuLfXJ3",
      {
        statusCode: 200,
        ok: true,
        fixture: "arts-section",
      }
    );
    cy.visit("http://localhost:3000/arts");
  });

  it("Should be able to click on arts tab and navigate to arts page", () => {
    cy.get('[data-test="arts-tab"]')
      .should("exist")
      .first()
      .click()
      .url()
      .should("eq", "http://localhost:3000/arts");
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

  it("Should show all article cards including an image, title, and byline", () => {
    cy.get('[data-test="article-container"]').should("be.visible");
    cy.get('[data-test="article-img"]').should("be.visible");
    cy.get('[data-test="article-title"]').should("be.visible");
    cy.get('[data-test="article-byline"]').should("be.visible");
    cy.get(':nth-child(2) > a > [data-test="article-img"]').should("exist");
    cy.contains(
      '[data-test="article-title"]',
      "Ann Philbin, Who Remade L.A.’s Hammer Museum, to Step Down"
    );
    cy.contains('[data-test="article-byline"]', "By Robin Pogrebin");
    cy.contains(':nth-child(1) > a > [data-test="article-img"]').should(
      "not.exist"
    );
    cy.contains('[data-test="article-title"]', "Hello").should("not.exist");
    cy.contains('[data-test="article-title"]', "By Danny Myers").should(
      "not.exist"
    );
  });
  it("Should show all article cards and be able to click on an article image and be shown more info on article", () => {
    cy.get('[data-test="article-container"]')
      .should("be.visible")
      .children()
      .get(':nth-child(1) > a > [data-test="article-img"]')
      .click();
  });
});

describe("Error Page", () => {
  it("Should show the error messages", () => {
    cy.visit("http://localhost:3000/sdfdsf");
    cy.get('[data-test="error-response"]').contains(
      "Something has gone wrong: "
    );
    cy.visit("http://localhost:3000/food/jkflds");
    cy.get('[data-test="page-not-found"]').contains(
      "This is also an error page"
    );
  });
});

// it.skip("Should show the loading page", () => {
//   let sendResponse;
//   const triggerResponse = new Promise((resolve) => {
//     sendResponse = resolve;
//   });
//   cy.intercept(
//     "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LU6VCnan2YWTBZv4RkzC0faIiydCEDPL",
//     (request) => {
//       return triggerResponse.then(() => {
//         request.reply();
//       });
//     }
//   );
//   cy.visit("http://localhost:3000");
//   cy.get('[data-test="loading"]')
//     .should("be.visible")
//     .then(() => {
//       sendResponse();
//       cy.get('[data-test="loading"]').should("not.exist");
//       cy.get('[data-test="article-container"]').should("be.visible");
//     });
// });

// it.skip("Should be able to see a search bar and search by article title", () => {
//   cy.get('[data-cy="search"]').should("be.visible");
//   cy.get('input[type="text"]').type("Restaurant");
//   cy.contains(
//     '[data-cy="article-title"]',
//     "Restaurant Review: At Okiboru, Soupless Ramen in a Stressless Setting"
//   );
// });

// it.skip("Should be able to click the home button and clear the input field", () => {
//   cy.get('[data-cy="search"]').should("be.visible");
//   cy.get('input[type="text"]').type("Finds");
//   cy.get('[data-cy="home-button"]').click();
// });

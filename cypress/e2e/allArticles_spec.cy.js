// describe("Main Article Page", () => {
//   beforeEach(() => {
//     cy.intercept(
//       "GET",
//       "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=LU6VCnan2YWTBZv4RkzC0faIiydCEDPL",
//       {
//         statusCode: 200,
//         ok: true,
//         fixture: "articles",
//       }
//     );
//     cy.visit("http://localhost:3000");
//   });

//   it("Should be able to visit the home page and render the correct elements", () => {
//     cy.get('[data-cy="title"]').contains("NY Times Reader");
//     cy.get('[data-cy="nyt-logo"]').should("be.visible");
//   });

//   it("Should show all article cards including a title, and image", () => {
//     cy.get('[data-cy="card-container"]').should("be.visible");
//     cy.get('[data-cy="article-img"]').should("be.visible");
//     cy.get('[data-cy="article-title"]').should("be.visible");
//     cy.contains(
//       '[data-cy="article-title"]',
//       "Inside the ‘Top Chef’ Industrial Complex"
//     ).should("exist");
//     cy.contains('[data-cy="article-title"]', "Hello").should("not.exist");
//   });

//   it("Should be able to see a search bar and search by article title", () => {
//     cy.get('[data-cy="search"]').should("be.visible");
//     cy.get('input[type="text"]').type("Restaurant");
//     cy.contains(
//       '[data-cy="article-title"]',
//       "Restaurant Review: At Okiboru, Soupless Ramen in a Stressless Setting"
//     );
//   });

//   it("Should be able to click the home button and clear the input field", () => {
//     cy.get('[data-cy="search"]').should("be.visible");
//     cy.get('input[type="text"]').type("Finds");
//     cy.get('[data-cy="home-button"]').click();
//   });

//   it("Should show all article cards and be able to click on an article and be shown more info on article", () => {
//     cy.get('[data-cy="cards"]')
//       .children()
//       .contains("Inside the ‘Top Chef’ Industrial Complex")
//       .click();
//     cy.get('[data-cy="single-article-img"]').should("be.visible");
//     cy.get('[data-cy="single-article-title"]').should("be.visible");
//     cy.get('[data-cy="single-article-byline"]').should("be.visible");
//     cy.get('[data-cy="single-article-abstract"]').should("be.visible");
//     cy.get('[data-cy="button"]').should("be.visible");

//     cy.contains(
//       '[data-cy="single-article-title"]',
//       "Inside the ‘Top Chef’ Industrial Complex"
//     );
//     cy.contains('[data-cy="single-article-byline"]', "By Brett Anderson");
//     cy.contains(
//       '[data-cy="single-article-abstract"]',
//       "Entering its 20th season, the sprawling Bravo franchise has changed the way Americans eat and become a mirror of the restaurant industry."
//     );
//   });

//   it("Should be able to click on the full article link", () => {
//     cy.get('[data-cy="cards"]')
//       .children()
//       .contains("Inside the ‘Top Chef’ Industrial Complex")
//       .click();
//     cy.get('[data-cy="button"]').contains("Full Article").click();
//   });

//   it("Should show an error if API fails a response", () => {
//     cy.intercept(
//       "GET",
//       "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=LU6VCnan2YWTBZv4RkzC0faIiydCEDPL",
//       {
//         statusCode: 400,
//         ok: false,
//         fixture: "error",
//       }
//     );
//     cy.visit("http://localhost:3000");
//   });
// });

// describe("Loading and Error Page", () => {
//   it("Should show the loading page", () => {
//     let sendResponse;
//     const triggerResponse = new Promise((resolve) => {
//       sendResponse = resolve;
//     });
//     cy.intercept(
//       "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=LU6VCnan2YWTBZv4RkzC0faIiydCEDPL",
//       (request) => {
//         return triggerResponse.then(() => {
//           request.reply();
//         });
//       }
//     );
//     cy.visit("http://localhost:3000");
//     cy.get(".loading-img")
//       .should("be.visible")
//       .then(() => {
//         sendResponse();
//         cy.get(".loading-img").should("not.exist");
//         cy.get('[data-cy="card-container"]').should("be.visible");
//       });
//   });
//   it("Should show the error messages", () => {
//     cy.visit("http://localhost:3000/sdfdsf");
//     cy.get("h3").contains("404: Page does not exist");
//     cy.visit("http://localhost:3000/sdfdsf/jkflds");
//     cy.get("h3").contains("This is also an error page");
//   });
// });

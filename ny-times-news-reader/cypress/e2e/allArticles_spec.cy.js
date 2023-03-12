describe("Main Article Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.nytimes.com/svc/topstories/v2/food.json?api-key=LU6VCnan2YWTBZv4RkzC0faIiydCEDPL",
    {
      statusCode: 200,
      ok: true,
      fixture: "articles",
    }
    )
    cy.visit("http://localhost:3000")
  })

  it('Should be able to visit the home page and render all the elements', () => {
    cy.get('h1').contains('NY Times Reader')
  })
  it('should show article cards', () => {
    cy.get('[href="/2023-01-20T13:33:05-05:00"] > .card-container > .card')
  })
})
describe("Main Article Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://ny-times-news-reader-z2cu.vercel.app/?",
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
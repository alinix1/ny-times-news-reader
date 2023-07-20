import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Articles from "./Articles";
import { MemoryRouter } from "react-router-dom";
import { articles, searchArticles } from "../../articleMockData";

describe("Cards", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        {" "}
        <Articles articles={articles} searchArticles={searchArticles} />
      </MemoryRouter>
    );
  });

  it("asserts all article titles exist", () => {
    articles.forEach(({ title }) => {
      const foundTitle = screen.getByText(title);
      expect(foundTitle).toBeInTheDocument();
    });
    const articleTitles = screen.getAllByRole("heading");
    expect(articleTitles).toHaveLength(1);
    const article1 = screen.getByText(
      `Inside the ‘Top Chef’ Industrial Complex`
    );
    expect(article1).toBeInTheDocument();
  });

  it("asserts all images exists", () => {
    const image1 = screen.getByRole("img");

    expect(image1).toBeInTheDocument();
  });
});

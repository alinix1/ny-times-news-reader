import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Articles from "./Components/Articles/Articles";
import { MemoryRouter } from "react-router-dom";
import { articles, searchArticles } from "./articleMockData";

describe("Cards", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        {" "}
        <Articles articles={articles} searchArticles={searchArticles} />,
        <Articles />
      </MemoryRouter>
    );
  });

  it("assert all article titles exist", () => {
    const mockArticleTitles = articles.map((article) => article.title);
    const article1 = screen.getByText(
      `Inside the ‘Top Chef’ Industrial Complex`
    );
    const article2 = screen.getByText(
      `Restaurant Review: Tatiana by Kwame Onwuachi Is Talking to You, America`
    );

    expect(article1).toBeInTheDocument();
    expect(article2).toBeInTheDocument();
    expect(mockArticleTitles).toEqual(
      `Inside the ‘Top Chef’ Industrial Complex`,
      `Restaurant Review: Tatiana by Kwame Onwuachi Is Talking to You, America`
    );
  });
  
  it("assert all images exists", () => {
    const mockArticleImages = articles.map((article) => article.multimedia[0]);

    const image1 = screen.getByRole("img", {
      name: "https://static01.nyt.com/images/2023/03/15/dining/15Top-Chef-Cover/15Top-Chef-Cover-superJumbo.jpg",
    });
    const image2 = screen.getByRole("img", {
      name: "https://static01.nyt.com/images/2023/03/15/multimedia/15rest-tatiana-01-lkjc/14rest-tatiana-01-lkjc-superJumbo.jpg",
    });

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
    expect(mockArticleImages).toEqual([
      {
        url: "https://static01.nyt.com/images/2023/03/15/dining/15Top-Chef-Cover/15Top-Chef-Cover-superJumbo.jpg",
      },
      {
        url: "https://static01.nyt.com/images/2023/03/15/multimedia/15rest-tatiana-01-lkjc/14rest-tatiana-01-lkjc-superJumbo.jpg",
      },
    ]);
  });
});

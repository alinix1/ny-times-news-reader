import { screen, render } from "@testing-library/react";
import React from "react";
import SearchBar from "./SearchBar";
import "@testing-library/jest-dom";

describe("Search bar", () => {
  let mockSearchArticles;

  beforeEach(() => {
    mockSearchArticles = jest.fn();
    render(
      <SearchBar searchArticles={""} setSearchArticles={mockSearchArticles} />
    );
  });

  it("should have a search home button", () => {
    expect(screen.getByRole("button", { name: "home" })).toBeInTheDocument();
  });

  it("should have input field", () => {
    expect(screen.getByRole("search")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search for Articles")
    ).toBeInTheDocument();
  });
});

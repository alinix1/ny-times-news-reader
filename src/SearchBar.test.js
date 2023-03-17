import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import "@testing-library/jest-dom";

describe("Search bar", () => {
  let mockSearchArticles;

  beforeEach(() => {
    mockSearchArticles = jest.fn();
    render(<SearchBar searchArticles={mockSearchArticles} />);
  });

  it("should have a search home button", () => {
    expect(screen.getByRole("button", {name: "home"})).toBeInTheDocument();
  });

  it("should have input field", () => {
    expect(screen.getByRole("search")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search for Articles")
    ).toBeInTheDocument();
  });

  it("should run the search when the onChange is called", () => {

  });
  
  it.skip("should clear input field when the home button is clicked", () => {
    const homeBtn = screen.getByRole('button', {name: 'home'})
    fireEvent.click(homeBtn)

    expect(homeBtn).toBeCalledTimes(1)
  });
});

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { fetchArticlesData } from "../../apiCalls";
import App from "./App";

describe("App", () => {
  let contentType;
  beforeEach(() => {
    contentType = { "Content-Type": "application/json" };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ mockReturn: "The Payload" }),
      })
    );
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  afterEach(() => jest.restoreAllMocks());

  it("renders header title on load", () => {
    const headerTitle = screen.getByText(/Ny Times Reader/i);
    expect(headerTitle).toBeInTheDocument();
  });

  it("renders header logo on load", () => {
    const headerLogo = screen.getByAltText(/new-york-times logo/i);
    expect(headerLogo).toBeInTheDocument();
  });

  it("renders a search bar input on load", () => {
    const searchBar = screen.getByPlaceholderText(/Search for Articles/i);
    expect(searchBar).toBeInTheDocument();
  });

  it("renders a home button next to search bar on load", () => {
    const homeBtn = screen.getByRole("button", { name: "home" });
    expect(homeBtn).toBeInTheDocument();
  });

  it("fetches the correct data end point", async () => {
    const url = await waitFor(
      () =>
        `https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${process.env.REACT_APP_API_KEY}`
    );

    fetchArticlesData("food");

    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it("fetches a different data end point", async () => {
    const url = await waitFor(
      () =>
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`
    );

    fetchArticlesData("home");

    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it.skip("renders an error message if rejected promise in fetching articles", async () => {
    // const error = await waitFor(() => "Sorry, we couldn\'t get the data. Please start over.")
  });

  it("should change the value when a user types in the search bar", () => {
    const searchInput = screen.getByRole("search");
    expect(searchInput.value).toBe("");

    fireEvent.change(searchInput, { target: { value: "23" } });
    expect(searchInput.value).toBe("23");
  });

  it("should clear input field when the home button is clicked", () => {
    const homeBtn = screen.getByRole("button", { name: "home" });

    const searchInput = screen.getByRole("search");
    expect(searchInput.value).toBe("");

    fireEvent.change(searchInput, { target: { value: "23" } });
    expect(searchInput.value).toBe("23");

    fireEvent.click(homeBtn);
    expect(searchInput.value).toBe("");
  });
});

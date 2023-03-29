import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByAltText,
  getAllByText,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it("should render the search bar", () => {
    expect(
      screen.getByPlaceholderText("Search for Articles")
    ).toBeInTheDocument();
  });

  it("should render a header logo", () => {
    const headerLogo = screen.getByAltText(/new-york-times logo/i);
    expect(headerLogo).toBeInTheDocument();
  });

  it("should render a home button", () => {
    expect(screen.getAllByRole("button")).toHaveLength(1);
    expect(screen.getByRole("button", { name: "home" })).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("TEST ROUTER", () => {
  test("Router test", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });
  test("Error page", () => {
    render(
      <MemoryRouter initialEntries={["/sdasdsad"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
  });
});

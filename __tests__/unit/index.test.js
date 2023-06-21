import { render, screen } from "@testing-library/react";
import Home from "../../src/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders", () => {
    const component = render(<Home />);

    expect(component).toBeTruthy();
  });

  it("shows main heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Sabrina Samuel");
  });

  it("shows second heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(
      "Navigating my way through web development"
    );
  });
});

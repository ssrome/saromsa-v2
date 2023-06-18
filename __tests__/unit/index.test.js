import { render, screen } from "@testing-library/react";
import Home from "../../src/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders main heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Sabrina Samuel");
  });

  it("renders second heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(
      "Navigating my way through web development"
    );
  });
});

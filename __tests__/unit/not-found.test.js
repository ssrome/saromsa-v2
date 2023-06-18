import { render, screen } from "@testing-library/react";
import NotFound from "../../src/app/not-found";
import "@testing-library/jest-dom";

describe("Not found", () => {
  it("renders", () => {
    const component = render(<NotFound />);

    expect(component).toBeTruthy();
  });

  it("shows not found text", () => {
    render(<NotFound />);

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });

  it("shows link for home", () => {
    render(<NotFound />);

    const homeLink = screen.getByRole("link", {
      name: /home/i,
    });

    expect(homeLink).toBeInTheDocument();
  });
});

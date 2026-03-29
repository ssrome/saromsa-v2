import { render, screen } from "@testing-library/react";
import About from "../../src/app/about/page";
import "@testing-library/jest-dom";

describe("About page", () => {
  it("renders", () => {
    const component = render(<About />);

    expect(component).toBeTruthy();
  });

  it("shows the header", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", {
        name: /about/i,
      })
    ).toBeTruthy();
  });
});

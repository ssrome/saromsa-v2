import { render, screen } from "@testing-library/react";
import { Navigation } from "../../../src/app/components/navigation/navigation";
import "@testing-library/jest-dom";

describe("Navigation", () => {
  it("renders", async () => {
    const component = render(<Navigation />);

    expect(component).toBeTruthy();
  });

  it("shows navigation items as links", async () => {
    render(<Navigation />);

    expect(
      screen.getByRole("link", {
        name: /home/i,
      })
    ).toBeTruthy();
    expect(
      screen.getByRole("link", {
        name: /about/i,
      })
    ).toBeTruthy();
    expect(
      screen.getByRole("link", {
        name: /projects/i,
      })
    ).toBeTruthy();
    expect(
      screen.getByRole("link", {
        name: /contact/i,
      })
    ).toBeTruthy();
  });
});

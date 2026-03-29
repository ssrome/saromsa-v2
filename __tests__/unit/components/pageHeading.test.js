import { render, screen } from "@testing-library/react";
import { PageHeading } from "../../../src/app/components/pageHeading/pageHeading";
import "@testing-library/jest-dom";

describe("PageHeading", () => {
  it("renders", () => {
    const component = render(<PageHeading heading="test" />);

    expect(component).toBeTruthy();
  });

  it("renders the correct title", () => {
    render(<PageHeading heading="About" />);

    expect(
      screen.getByRole("heading", {
        name: /about/i,
      })
    ).toBeTruthy();
  });

  // it("doesn't render a title", () => {
  //   const component = render(<PageHeading />);
  //   console.log(component);

  //   expect(
  //     screen.getByRole("heading", {
  //       name: /f/i,
  //     })
  //   ).toBeFalsy();
  // });
});

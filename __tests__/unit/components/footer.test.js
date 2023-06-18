import { render, screen } from "@testing-library/react";
import {
  Footer,
  dateNow,
  currentYear,
} from "../../../src/app/components/footer/footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("renders copyright text", () => {
    render(<Footer />);

    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
    expect(screen.getByText(/©/i)).toBeInTheDocument();
    expect(screen.getByText(/all Rights Reserved/i)).toBeInTheDocument();
  });

  it("renders start year", () => {
    render(<Footer />);

    expect(screen.getByText(/2020/i)).toBeInTheDocument();
  });

  it("shows the current year in correct way", () => {
    const expected = new Date(Date.now()).getFullYear();
    const actual = currentYear(dateNow);
    expect(actual).toEqual(expected);
  });

  it("correct length of year", () => {
    const expected = 4;
    const actual = currentYear(dateNow).toString().length;
    expect(actual).toEqual(expected);
  });

  it("shows the year in correct way", () => {
    const testDate = new Date("2019-05-25T20:48:55.743Z");
    const expected = 2019;
    const actual = currentYear(testDate);
    expect(actual).toEqual(expected);
  });
});

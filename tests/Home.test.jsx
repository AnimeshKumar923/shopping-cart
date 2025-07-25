import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "../src/components/Home";

describe("functionalities", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(
      screen.getByText(/This is the main content of the home page/i)
    ).toBeInTheDocument();
  });
});

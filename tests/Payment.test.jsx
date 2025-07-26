import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Payment from "../src/components/Payment";

describe("functionality test", () => {
  it("renders navbar correctly", () => {
    render(<Payment />);
    expect(screen.getByText(/payment page/i)).toBeInTheDocument();
  });
});

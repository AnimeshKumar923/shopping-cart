import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "../src/components/Navbar";

describe("functionality test", () => {
  it("renders navbar correctly", () => {
    render(<Navbar />);
    expect(screen.getByText(/shopnow/i)).toBeInTheDocument();
  });

  it("renders cart count properly", () => {
    render(<Navbar cartCount={8} />);
    expect(screen.getByText("8")).toBeInTheDocument();
  });
});

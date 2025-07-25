import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Layout from "../src/components/Layout";

describe("functionalities", () => {
  it("renders without crashing", () => {
    render(<Layout />);
    expect(screen.getByText(/products/i)).toBeInTheDocument();
  });
});

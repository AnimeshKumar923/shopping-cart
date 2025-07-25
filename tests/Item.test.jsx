import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Item from "../src/components/Item";

describe("Item component", () => {
  const mockItem = {
    id: 42,
    title: "Test Product",
    price: 99.99,
    image: "https://example.com/image.jpg",
  };

  it("renders product details and link", () => {
    render(
      <MemoryRouter>
        <Item item={mockItem} />
      </MemoryRouter>
    );

    // Check image
    expect(screen.getByAltText(/product image/i)).toHaveAttribute(
      "src",
      mockItem.image
    );

    // Check title
    expect(screen.getByText("Test Product")).toBeInTheDocument();

    // Check price
    expect(screen.getByText(/\$99.99/)).toBeInTheDocument();

    // Check link
    expect(screen.getByRole("link")).toHaveAttribute("href", "/products/42");
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import Cart from "../src/components/Cart";
import userEvent from "@testing-library/user-event";

let cartItems = [
  { id: 1, name: "Test", price: 10, amount: 2 },
  { id: 2, name: "Test2", price: 5, amount: 1 },
];

const mockSetCartItems = vi.fn();
const mockSetCartCount = vi.fn();

beforeEach(() => {
  // Mock useOutletContext to provide cartItems
  vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    useOutletContext: () => ({
      cartItems,
      setCartItems: mockSetCartItems,
      setCartCount: mockSetCartCount,
    }),
    Link: () => {},
  }));
});

describe("cart calculations", () => {
  it("calculates cart subtotal", () => {
    render(<Cart />);
    expect(screen.getByText(/Subtotal: \$25/)).toBeInTheDocument();
  });

  it("calculate tax", () => {
    render(<Cart />);
    expect(screen.getByTestId("tax")).toHaveTextContent("Tax: $1");
  });

  it("calculate total", () => {
    render(<Cart />);
    expect(screen.getByTestId("total")).toHaveTextContent("Total: $26");
  });
});

describe("functionalities", () => {
  it("renders without crashing", () => {
    render(<Cart />);
    expect(screen.getByText(/Order summary/i)).toBeInTheDocument();
  });

  it("calls deleteAllItems when button is clicked", async () => {
    const user = userEvent.setup();
    render(<Cart />);
    const button = screen.getByRole("button", { name: "Clear all item" });

    expect(button).toBeInTheDocument();
    expect(screen.getByTestId("total")).toHaveTextContent("Total: $26");

    await user.click(button);

    expect(mockSetCartItems).toHaveBeenCalledWith([]);
    expect(mockSetCartCount).toHaveBeenCalledWith(0);
  });
});

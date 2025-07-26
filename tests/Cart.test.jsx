import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Cart from "../src/components/Cart";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

let cartItems = [
  { id: 1, name: "Test", price: 10, amount: 2 },
  { id: 2, name: "Test2", price: 5, amount: 1 },
];
function setCartItems(props) {
  // if(props) return 0;
  cartItems = props;
}

beforeEach(() => {
  // Mock useOutletContext to provide cartItems
  vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    useOutletContext: () => ({
      cartItems,
      setCartItems,
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

  it("clear all data", async () => {
    const user = userEvent.setup();

    // Capture rerender function
    const { rerender } = render(<Cart />);
    
    const button = screen.getByRole("button", { name: "Clear all item" });

    await user.click(button);
    
    // Re-render with updated context
    rerender(<Cart />);

    expect(screen.getByTestId("total")).toHaveTextContent("Total: $0");
  });
});

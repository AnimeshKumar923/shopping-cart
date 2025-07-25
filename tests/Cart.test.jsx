import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Cart from "../src/components/Cart";
import { vi } from "vitest";

describe("cart calculations", () => {
  // Mock useOutletContext to provide cartItems
  vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    useOutletContext: () => ({
      cartItems: [
        { id: 1, name: "Test", price: 10, amount: 2 },
        { id: 2, name: "Test2", price: 5, amount: 1 },
      ],
    }),
    Link: () => {},
  }));

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

  // commented out due to lack of clarity on how to test this functionality
  // it("clear all data", async () => {
  //   const user = userEvent.setup();
  //   const mockClearCart = vi.fn();

  //   render(<Cart />);

  //   const button = screen.getByTestId("clear-all", { name: "Clear all item" });

  //   await user.click(button);

  //   expect(mockClearCart).toHaveBeenCalled();
  //   // expect(screen.getByTestId("total")).toHaveTextContent("Total: $0");
  // });
});

import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ProductDetail from "../src/components/ProductDetail";

describe("functionality test", () => {
  const mockResponse = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  beforeEach(() => {
    vi.mock("react-router-dom", () => ({
      ...vi.importActual("react-router-dom"),
      useOutletContext: () => ({
        cartItems: [
          { id: 1, name: "Test", price: 10, amount: 2 },
          { id: 2, name: "Test2", price: 5, amount: 1 },
        ],
      }),
      useParams: () => ({ id: "1" }),
    }));

    window.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
  });

  it("renders loading status", () => {
    render(<ProductDetail />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders product", async () => {
    render(<ProductDetail />);
    expect(await screen.findByText(mockResponse.title)).toBeInTheDocument();
  });
});

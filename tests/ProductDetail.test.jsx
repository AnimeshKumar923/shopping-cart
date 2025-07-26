import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ProductDetail from "../src/components/ProductDetail";
import userEvent from "@testing-library/user-event";

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

afterEach(() => {
  window.fetch.mockRestore();
});

describe("functionality test", () => {
  it("renders loading status", () => {
    render(<ProductDetail />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders product", async () => {
    render(<ProductDetail />);
    expect(await screen.findByText(mockResponse.title)).toBeInTheDocument();
  });

  it("render 'add to cart' button", async () => {
    render(<ProductDetail />);
    const button = await screen.findByRole("button", { name: "Add to Cart" });
    expect(button).toBeInTheDocument();
  });

  it("render increment button", async () => {
    render(<ProductDetail />);
    const button = await screen.findByRole("button", { name: "+" });
    expect(button).toBeInTheDocument();
  });

  it("render decrement button", async () => {
    render(<ProductDetail />);
    const button = await screen.findByRole("button", { name: "-" });
    expect(button).toBeInTheDocument();
  });

  it("increase item count when increment button is clicked", async () => {
    render(<ProductDetail />);
    const button = await screen.findByRole("button", { name: "+" });
    const input = screen.getByRole("spinbutton");

    expect(button).toBeInTheDocument();

    expect(input.value).toBe("1");

    await userEvent.click(button);

    expect(input.value).toBe("2");
  });

  it("decrease item count when decrement button is clicked", async () => {
    render(<ProductDetail />);
    const button = await screen.findByRole("button", { name: "-" });
    const input = screen.getByRole("spinbutton");

    expect(button).toBeInTheDocument();

    expect(input.value).toBe("1");

    await userEvent.click(button);

    expect(input.value).toBe("0");

    await userEvent.click(button);

    expect(input.value).toBe("0");

    await userEvent.click(button);

    expect(input.value).not.toBe("-1");
  });
});

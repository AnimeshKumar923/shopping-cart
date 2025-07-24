import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [cartCount, setCartCount] = useState(() => {
    const count = localStorage.getItem("cartCount");
    // console.log(count);

    return count ? parseInt(count, 10) : 0;
  });

  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  function updateCart(product, itemAmount) {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, amount: item.amount + itemAmount }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.title,
            price: product.price,
            amount: itemAmount,
            image: product.image,
          },
        ];
      }
    });
    setCartCount((prev) => prev + itemAmount);
  }

  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Outlet context={{ cartCount, updateCart, setCartItems, cartItems }} />
    </>
  );
}

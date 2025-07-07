import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [cartCount, setCartCount] = useState(() => {
    const count = localStorage.getItem("cartCount");
    return count ? parseInt(count, 10) : 0;
  });

  function updateCart() {
    setCartCount((prev) => prev + 1);
  }

  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Outlet context={{ cartCount, updateCart }} />
    </>
  );
}

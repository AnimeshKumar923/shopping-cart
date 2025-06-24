import { useState } from "react";
import "./Navbar.css";
import cartIcon from "../../public/assets/cart-large-minimalistic-svgrepo-com.svg"

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0)
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          ShopNow
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/cart" className="cart-icon">
        <img src={cartIcon} alt="cart icon" className="cart-svg"/>
          <span className="cart-count">{cartCount}</span>
        </a>
      </div>
    </nav>
  );
}

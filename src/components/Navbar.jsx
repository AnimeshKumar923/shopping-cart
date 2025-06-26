import { useState } from "react";
import styles from "./Navbar.module.scss";
import cartIcon from "../../public/assets/cart-large-minimalistic-svgrepo-com.svg"

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0)
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <a href="/" className="logo">
          ShopNow
        </a>
      </div>
      <div className={styles.navbarCenter}>
        <ul className={styles.navLinks}>
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
      <div className={styles.navbarRight}>
        <a href="/cart" className={styles.cartIcon}>
        <img src={cartIcon} alt="cart icon" className={styles.cartSvg}/>
          <span className={styles.cartCount}>{cartCount}</span>
        </a>
      </div>
    </nav>
  );
}


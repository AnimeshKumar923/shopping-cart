import styles from "./Navbar.module.scss";
import cartIcon from "../../public/assets/cart-large-minimalistic-svgrepo-com.svg"

export default function Navbar({cartCount}) {
  
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


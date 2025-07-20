import styles from "./Cart.module.scss";
import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const cartCount = localStorage.getItem("cartCount");
  const { cartItems } = useOutletContext();
  // For objects/arrays:
  // const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  function deleteAllItems() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className={styles.checkout}>
      {cartItems.map((item, index) => {
        return (
          <>
            <img
              src={cartItems[index].image}
              alt={`${cartItems[index].name}Image`}
              className={styles.img}
            />
            <div className="productName">{cartItems[index].name}</div>
            <div className="itemPrice">
              Item Price: <span className="priceDigit">${cartItems[index].price}</span>
            </div>
            <div className="itemAmount">Item count: {cartItems[index].amount}</div>
          </>
        );
      })}
      <br />
      <div>Cart count: {cartCount}</div>
      <div>Cart items: {JSON.stringify(cartItems)}</div>
      <button onClick={deleteAllItems}>Clear all item</button>
    </div>
  );
}

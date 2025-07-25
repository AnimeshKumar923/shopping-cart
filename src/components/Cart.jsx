import styles from "./Cart.module.scss";
import { Link, useOutletContext } from "react-router-dom";

export default function Cart() {
  // const cartCount = localStorage.getItem("cartCount");
  const { cartItems } = useOutletContext();
  let subtotal = 0;
  let tax = 0;

  cartItems.map((item, index) => {
    subtotal += cartItems[index].price * cartItems[index].amount;
  });

  tax += Math.round(0.04 * subtotal * 100) / 100;
  let total = Math.round((subtotal + tax) * 100) / 100;
  // For objects/arrays:
  // const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  function deleteAllItems() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className={styles.checkout}>
      <div className={styles.orderDetails}>
        {cartItems.map((item, index) => {
          return (
            <>
              <Link to={`/products/${cartItems[index].id}`}>
                <div className={styles.itemDetails}>
                  <img
                    src={cartItems[index].image}
                    alt={`${cartItems[index].name}Image`}
                    className={styles.img}
                  />
                  <div className="productName">{cartItems[index].name}</div>
                  <div className="itemPrice">
                    Item Price:{" "}
                    <span className="priceDigit">
                      ${cartItems[index].price}
                    </span>
                  </div>
                  <div className="itemAmount">
                    Item count: {cartItems[index].amount}
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
      <div className={styles.orderSummary}>
        <h1>Order summary</h1>
        <h3>Subtotal: ${Math.round(subtotal * 100) / 100}</h3>
        <h3 data-testid="tax">Tax: ${tax}</h3>
        <h2 data-testid="total">Total: ${total}</h2>
        {/* <div>Cart count: {cartCount}</div> */}
        {/* <div>Cart items: {JSON.stringify(cartItems)}</div> */}
        <button className={styles.paymentBtn} onClick={deleteAllItems} data-testid='clear-all'>
          Clear all item
        </button>
        <br />
        <Link to="/payment">
          <button className={styles.paymentBtn}>Proceed to payment</button>
        </Link>
      </div>
      <br />
    </div>
  );
}

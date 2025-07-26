import { useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/ProductDetail.module.scss";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { updateCart, cartItems } = useOutletContext();
  const [itemAmount, setItemAmount] = useState(1);

  function increaseItemCount() {
    setItemAmount((prev) => prev + 1);
  }
  function decreaseItemCount() {
    if (itemAmount < 1) {
      // alert("Item cannot be negative!");
      return;
    }
    setItemAmount((prev) => prev - 1);
  }
  // console.log(`cart items: ${cartItems}`);
  // console.log(cartItems);
  // console.log(`product`);
  console.log(product);
  // console.log(`currentItemCount: ${currentItemCount}`);

  function getCurrentItemCount() {
    if (!product) return 0;
    const found = cartItems.find((item) => item.name === product.title);
    return found ? found.amount : 0;
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.content}>
      <img src={product.image} alt={product.title} className={styles.img} />
      <h2>{product.title}</h2>
      <p className={styles.para}>{product.description}</p>
      <div>
        <strong>Price: </strong>${product.price}
      </div>
      <div className={styles.itemAmount}>
        <span className={styles.itemCountText}>Item Count</span>
        <br />
        <div className={styles.counter}>
          <button className={styles.decBtn} onClick={decreaseItemCount}>
            -
          </button>
          <input
            type="number"
            value={itemAmount}
            className={styles.countNum}
            onChange={(e) => {
              setItemAmount(Number(e.target.value));
            }}
          />
          <button
            className={styles.incBtn}
            onClick={() => {
              increaseItemCount();
            }}
          >
            +
          </button>
        </div>
        <span className={styles.countNum}>
          Unit in cart: {getCurrentItemCount()}
        </span>
      </div>
      <button
        className={styles.btn}
        type="button"
        onClick={() => updateCart(product, itemAmount)}
      >
        Add to Cart
      </button>
    </div>
  );
}

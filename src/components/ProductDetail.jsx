import { Link, useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ProductDetail.module.scss";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { updateCart } = useOutletContext();
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
          <span className={styles.decBtn} onClick={decreaseItemCount}>
            -
          </span>
          <input
            type="number"
            value={itemAmount}
            className={styles.countNum}
            onChange={(e) => {
              setItemAmount(e.target.value);
            }}
          />
          {/* <span className={styles.countNum}>{itemAmount}</span> */}
          <span className={styles.incBtn} onClick={increaseItemCount}>
            +
          </span>
        </div>
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

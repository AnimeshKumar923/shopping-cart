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
        <span className={styles.counterText}>Item Count</span>
        <br />
        <div className={styles.counter}>
          <span className="decrement">-</span>
          <span>{itemAmount}</span>
          <span className="increment" onClick={increaseItemCount}>
            +
          </span>
        </div>
      </div>
      <button
        className={styles.btn}
        type="button"
        onClick={() => updateCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

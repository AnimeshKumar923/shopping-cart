import { Link } from "react-router-dom";
import styles from "./Item.module.scss";

// const image = `https://fastly.picsum.photos/id/454/500/500.jpg?hmac=jeGzMQ6lOuO8jN6YOL5KejAD7EF2nrFJ6qk-WnYUyK4`;
export default function Item({ item }) {
  console.log(item);

  return (
    <div>
      <Link to={`/products/${item.id}`}>
        <img className={styles.img} src={item.image} alt="product image" />
        <div className={styles.itemName}>{item.title}</div>
      </Link>
      <div className={styles.price}>
        <strong>Price</strong>:${item.price}
      </div>
    </div>
  );
}

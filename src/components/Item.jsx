import styles from "./Item.module.scss";

const image = `https://fastly.picsum.photos/id/454/500/500.jpg?hmac=jeGzMQ6lOuO8jN6YOL5KejAD7EF2nrFJ6qk-WnYUyK4`;
export default function Item({ item }) {
  return (
    <>
      <span className={styles.itemName}>{item.name}</span>
      <span className={styles.image}>
        <img src={image} alt="product image" />
      </span>
      <span className={styles.price}>{item.price}</span>
    </>
  );
}

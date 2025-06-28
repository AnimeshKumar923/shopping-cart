import styles from "./Item.module.scss";

// const image = `https://fastly.picsum.photos/id/454/500/500.jpg?hmac=jeGzMQ6lOuO8jN6YOL5KejAD7EF2nrFJ6qk-WnYUyK4`;
export default function Item({ item }) {
  console.log(item);
  
  return (
    <>
      <div className={styles.image}>
        <img src={item.image} alt="product image" />
      </div>
      <div className={styles.itemName}>{item.title}</div>
      <div className={styles.price}>{item.price}</div>
    </>
  );
}

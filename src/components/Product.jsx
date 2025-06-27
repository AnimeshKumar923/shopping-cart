import styles from './Product.module.scss'

const image = `https://fastly.picsum.photos/id/454/500/500.jpg?hmac=jeGzMQ6lOuO8jN6YOL5KejAD7EF2nrFJ6qk-WnYUyK4`;

export default function Products({item}) {
  return (
      <div className={styles.content}>
        <span className={styles.itemName}>{item.name}</span>
        <span className={styles.image}>
          <img src={image} alt="product image" />
        </span>
        <span className={styles.price}>{item.price}</span>
      </div>
  );
}

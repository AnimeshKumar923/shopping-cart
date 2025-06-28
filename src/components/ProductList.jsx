import { useEffect, useState } from "react";
import styles from "./ProductList.module.scss";
import Item from "./Item";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  console.log(products);

  return (
    <div className={styles.content}>
      {products.map((product) => {
        return <Item key={product.id} item={product} />;
      })}
      <h1>Hello</h1>
    </div>

    // <div className="content">
    //   <Item item={{ title: "clothes", price: 100 }} />
    // </div>
  );
}

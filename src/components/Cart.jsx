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
    <>
      <div>Cart count: {cartCount}</div>
      <div>Cart items: {JSON.stringify(cartItems)}</div>
      <button onClick={deleteAllItems}>Clear all item</button>
    </>
  );
}

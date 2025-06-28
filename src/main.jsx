import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/ProductList";
import Cart from "./components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout for all routes
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

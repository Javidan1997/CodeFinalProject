import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
export { default as Navbar } from "./Components/Navbar";
export { default as Footer } from "./Components/Footer";
export { default as Home } from "./Pages/Home";
export { default as Shop } from "./Pages/Shop";
export { default as ShopCart } from "./Pages/ShopCart";
export { default as Blog } from "./Pages/Blog";
export { default as BlogDetail } from "./Pages/BlogDetail";
export { default as Checkout } from "./Pages/Checkout";
export { default as Contact } from "./Pages/Contact";
export { default as ProductDetails } from "./Pages/ProductDetails";

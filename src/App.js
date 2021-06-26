import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Shop from "./Pages/Shop";
import ShopCart from "./Pages/ShopCart";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/shop" exact component={() => <Shop />} />
          <Route path="/shopcart" exact component={() => <ShopCart />} />
          <Route path="/blog" exact component={() => <Blog />} />
          <Route path="/blogdetail" exact component={() => <BlogDetail />} />
          <Route
            path="/productdetails"
            exact
            component={() => <ProductDetails />}
          />
          <Route path="/checkout" exact component={() => <Checkout />} />
          <Route path="/Contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

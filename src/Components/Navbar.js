import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                <a href="index.html">
                  <img src="img/xlogo.png.pagespeed.ic.dMEbYJQQLP.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
                <Link class="navbar-brand" to="/"></Link>
                <ul>
                  <li
                    class={`nav-item  ${
                      props.location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    <Link class="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <a href="#">Women’s</a>
                  </li>
                  <li>
                    <a href="#">Men’s</a>
                  </li>
                  <li
                    class={`nav-item  ${
                      props.location.pathname === "/shop" ? "active" : ""
                    }`}
                  >
                    <Link class="nav-link" to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li
                        class={`nav-item  ${
                          props.location.pathname === "/productdetails"
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link class="nav-link" to="/productdetails">
                          ProductDetails
                        </Link>
                      </li>
                      <li
                        class={`nav-item  ${
                          props.location.pathname === "/shopcart"
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link class="nav-link" to="/shopcart">
                          ShopCart
                        </Link>
                      </li>
                      <li
                        class={`nav-item  ${
                          props.location.pathname === "/checkout"
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link class="nav-link" to="/checkout">
                          Checkout
                        </Link>
                      </li>
                      <li
                        class={`nav-item  ${
                          props.location.pathname === "/blogdetail"
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link class="nav-link" to="/blogdetail">
                          BlogDetail
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    class={`nav-item  ${
                      props.location.pathname === "/blog" ? "active" : ""
                    }`}
                  >
                    <Link class="nav-link" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li
                    class={`nav-item  ${
                      props.location.pathname === "/contact" ? "active" : ""
                    }`}
                  >
                    <Link class="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__right">
                <div className="header__right__auth">
                  <a href="#">Login</a>
                  <a href="#">Register</a>
                </div>
                <ul className="header__right__widget">
                  <li>
                    <span className="icon_search search-switch" />
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt" />
                      <div className="tip">2</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt" />
                      <div className="tip">2</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default withRouter(Navbar);

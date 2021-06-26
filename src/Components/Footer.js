import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="footer__about">
                <div className="footer__logo">
                  <a href="index-2.html">
                    <img
                      src="img/xlogo.png.pagespeed.ic.dMEbYJQQLP.png"
                      alt=""
                    />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt cilisis.
                </p>
                <div className="footer__payment">
                  <a href="#">
                    <img
                      src="img/payment/xpayment-1.png.pagespeed.ic.i27H914Fvu.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="img/payment/xpayment-2.png.pagespeed.ic.vsRq3-iyeB.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="img/payment/xpayment-3.png.pagespeed.ic.XIsMmJrav6.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="img/payment/xpayment-4.png.pagespeed.ic.0osXNwgIrJ.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="img/payment/xpayment-5.png.pagespeed.ic.L93IpQaNVe.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-5">
              <div className="footer__widget">
                <h6>Quick links</h6>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footer__widget">
                <h6>Account</h6>
                <ul>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Orders Tracking</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-8">
              <div className="footer__newslatter">
                <h6>NEWSLETTER</h6>
                <form action="#">
                  <input type="text" placeholder="Email" />
                  <button type="submit" className="site-btn">
                    Subscribe
                  </button>
                </form>
                <div className="footer__social">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play" />
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
        </div>
      </footer>
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;

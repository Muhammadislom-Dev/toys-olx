import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Bscard from "../img/BsCard";
import { Context } from "../context/AddCard";
import { useContext } from "react";
function Navbar() {
  let location = useLocation();
  const homeClass = location.pathname === "/" ? "active" : "";
  const productClass = location.pathname === "/product" ? "active" : "";
  const { orderFoods, setOrderFoods } = useContext(Context);

  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="/img/nav/logo.svg" alt="" />
          </Link>
        </div>
        <ul>
          <li className={homeClass}></li>
          <li>
            <Link to="/" style={{ width: "2.6vw" }}>
              <FormattedMessage id="nav.home" />
            </Link>
          </li>
          <li className={productClass}>
            <Link to="/product">
              <FormattedMessage id="nav.products" />
            </Link>
          </li>

          <li>
            <a href="tel: +998712483494">
              <button style={{ borderRadius: ".6vw" }}>
                <img src="/img/nav/call.svg" alt="" style={{ width: "1vw" }} />
                99 111 17 33
              </button>
            </a>
          </li>
          <li>
            <button className="header--open">
              <Bscard />
              {orderFoods.length > 0 && (
                <p className="basket__box">
                  <span className="counts">{orderFoods.length}</span>
                </p>
              )}
            </button>
          </li>
        </ul>
        <div className="hamb">
          <span>
            <img src="/img/home/hamb.svg" alt="toys" />
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

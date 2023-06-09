import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import LikeModal from "../Modal/LikeModal";
import BuyModal from "../Modal/BuyModal";
import { Context } from "./Wrapper";
import { useContext } from "react";

function Navbar() {
  const context = useContext(Context);
  let location = useLocation();
  const homeClass = location.pathname === "/" ? "active" : "";
  const productClass = location.pathname === "/product" ? "active" : "";

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
            <select value={context.locale} onChange={context.selectLanguage}>
              <option value="uz">O'z</option>
              <option value="ru">Ру</option>
              <option value="en">En</option>
            </select>
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
            <BuyModal />
          </li>
          <li>
            <LikeModal />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

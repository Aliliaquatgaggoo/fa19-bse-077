import React from "react";
import "../style/nStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowRightToBracket,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="n-container">
      <div className="n-row">
        <div className="n-col">
          <span className="n-mail">aliliaquatgaggoo187@gmmail.com</span>
          <span>
            <FontAwesomeIcon icon={faUser} />
            Guest
          </span>
        </div>
        <div className="n-col">
          <div className="social">
           <a href="/">
             <img src="/images/social/facebook.png" alt="" />
            </a>
            <a href="/">
              <img src="/images/social/instagram.png" alt="" />
            </a>
            <a href="/">
              <img src="/images/social/twitter.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="n-row">
        <div className="n-col"></div>
        <div className="n-col">
          <div className="icon">
            <a href="/Login">
              <span>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
                LOGIN
              </span>
            </a>
            <a href="/Wish">
              <span>
                <FontAwesomeIcon icon={faHeart} />
                <span className="item"></span>0
              </span>
            </a>
            <a href="/Shopping">
              <span>
                <FontAwesomeIcon icon={faShoppingBag} />
                <span className="item"></span>0
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="n-row">
        <div className="nav">
          <ul className="item">
           <li className="list">
             <NavLink to="/" activeClassName="active" >Home</NavLink>
            </li>
            <li className="list">
            <NavLink to="/shopping" activeClassName="active">Shopping</NavLink>
            </li>
            <li className="list">
            <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li className="list">
            <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

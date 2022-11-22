import { useRef } from "react";

import { FaTimes, FaBars, FaUser, FaShopify } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../csss/Navbar.css";
import Logo from "../../IMAGE/assets/logo.png";

const Navbar = ({ cartItems }) => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="navbar">
      <img src={Logo} className="logo" alt="logo" />
      <nav ref={navRef} className="navNavLinks">
        <ul>
          <NavLink activeClassName="active" exact to="/">
            HOME
          </NavLink>
          <NavLink activeClassName="active" exact to="/About">
            ABOUT US
          </NavLink>
          <NavLink activeClassName="active" exact to="/Products">
            PRODUTS
          </NavLink>
          <NavLink activeClassName="active" exact to="/Sale">
            SALE
          </NavLink>
        </ul>
      </nav>
      <div className="btn-icons">
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <NavLink to="/signup" className="btn-user">
          <FaUser />
        </NavLink>
        <NavLink to="/cart" className="btn-buy">
          <FaShopify />
          <span className="cart-length">
            {cartItems.length === 0 ? "" : cartItems.length}
          </span>
        </NavLink>
        <button onClick={showNavbar} className="nav-btn">
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

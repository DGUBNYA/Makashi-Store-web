import React from "react";
import "../../csss/Footer.css";

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-bord">
      <h2 className="foote-title">keep in touch</h2>
      <div className="footer-icons">
        <button>
          <FaLinkedin />
        </button>
        <button>
          <FaFacebook />
        </button>
        <button>
          <FaInstagram />
        </button>
        <button>
          <FaTwitter />
        </button>
        <button>
          <FaTiktok />
        </button>
      </div>
      <section className="footer-container">
        <div className="footer-nav">
          <h3>pages</h3>
          <ul>
            <li>home</li>
            <li>about us</li>
            <li>products</li>
            <li>sale</li>
          </ul>
        </div>
        <div className="footer-nav">
          <h3>contact</h3>
          <ul>
            <li>gmail</li>
            <li>fax</li>
            <li>Service</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-nav">
          <h3>sing-up</h3>
          <ul>
            <li>sing-up</li>
            <li>log-out</li>
            <li>password reset</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;

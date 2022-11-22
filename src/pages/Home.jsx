import React, { Fragment } from "react";
import "../csss/Home.css";

import cover from "../IMAGE/assets/OPEN.3.2.png";
import VibeOnly from "../IMAGE/assets/Group 10.png";
import HomeProduct from "../components/products/HomeProduct";
import Collections from "../components/collection/collections";
import { Link } from "react-router-dom";

const Home = ({ homeProductItems }) => {
  return (
    <Fragment>
      <div className="coverBord">
        <div className="coverText">
          <h1>makashi </h1>
          <p>stayle, comfort and cool!</p>
          <div>
            <button className="Btn">
              <Link to="/Sale">Sale</Link>
            </button>
            <button className="Btn">
              <Link to="/Products">Products</Link>
            </button>
          </div>
        </div>
        <img
          src={cover}
          className="coverImg"
          alt="A girl is standing on a skateboard"
        />
      </div>

      {/* ABOUT */}

      <div className="aboutBord">
        <h2>about us</h2>
        <p>
          We believe in a world where you have total freedom to be you, without
          judgement, To experiment. To express yourself. To be brave and grab
          life as the extraordinary adventure it is.....
        </p>
        <button className="Btn">
          <Link to="/About">read More..</Link>
        </button>
      </div>

      {/* SALE */}

      <div className="salaArea">
        <div className="saleText">
          <h2>winter sale</h2>
          <p>50% off</p>
        </div>
        <img
          src={VibeOnly}
          className="saleImg"
          alt="Vans shoes with good vibes only lettering on the side"
        />
      </div>

      {/* Cards */}

      <HomeProduct homeProductItems={homeProductItems} />

      <Collections className="collection-marg" />
    </Fragment>
  );
};

export default Home;

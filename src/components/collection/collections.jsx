import React from "react";
import "../../csss/collections.css";
import Icon from "./IMAGE/Group 5.png";
import Shirt from "./IMAGE/Shirt.png";
import AllStar from "./IMAGE/ShoesHome.png";

const Collections = () => {
  return (
    <div className="colection_bord">
      <div className="colection_continer">
        <img
          src={Shirt}
          className="collection"
          alt="Green sweater with a drawing of a sunset and an inscription Sunshine"
        />
        <div className="paragraph">
          <img src={Icon} alt="" />
          <p>
            A Unisex collection of new sweaters <br />
            with a variety of colors and sizes <br />
            that will warm you from the cold this winter
          </p>
        </div>
      </div>
      <div className="colection_continer">
        <img
          className="collection"
          src={AllStar}
          alt="he new sneakers model X-MAKASHI 4 in green and white color"
        />
        <div className="paragraph">
          <img src={Icon} alt="" />
          <p>
            We have always stated that what we do is
            <br /> about more than sneakers the A<span> X-MAKASHI 4</span>
            <br />
            releases on Thursday, November 17th.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collections;

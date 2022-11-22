import React from "react";
import "../../csss/HomeProduct.css";

const HomeProduct = ({ homeProductItems, handleAddProduct }) => {
  return (
    <div className="products_Home">
      {homeProductItems.map((productItem) => (
        <div className="card_Home">
          <div>
            <img
              className="product_image"
              src={productItem.image}
              alt={productItem.alt}
            />
          </div>
          <div>
            <h2 className="product_name">{productItem.name}</h2>
          </div>
          <div>
            <p className="product_description">{productItem.description}</p>
          </div>
          <div className="home_product_price">${productItem.price}</div>
        </div>
      ))}
    </div>
  );
};

export default HomeProduct;

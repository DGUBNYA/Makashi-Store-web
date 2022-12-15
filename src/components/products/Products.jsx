import React from "react";
import { useState } from "react";
import Categories from "../back/Data/Data";
import "../../csss/Products.css";

const Products = ({ productItems, handleAddProduct }) => {
  const [data, setProduct] = useState(Categories);
  const FilterResult = (data) => {
    Categories.filter((productItem) => {
      return productItem.productItems === data;
    });
    setProduct(Categories);
  };

  return (
    <React.Fragment>
      <div className="Category_btns">
        <button>All </button>
        <button onClick={() => FilterResult("Shirt")}>Shirt</button>
        <button onClick={() => FilterResult("Sweater")}>Sweater</button>
        <button onClick={() => FilterResult("Hoodie")}>Hoodie</button>
        <button onClick={() => FilterResult("Shoes")}>Shoes</button>
      </div>
      <div className="products">
        {productItems.map((productItem) => (
          <div className="card">
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
            <div className="product_price">${productItem.price}</div>
            <div>
              <button
                className="product_add_btn"
                onClick={() => handleAddProduct(productItem)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Products;

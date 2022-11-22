import React from "react";
import "../../csss/Products.css";

const Products = ({ productItems, handleAddProduct }) => {
  return (
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
  );
};

export default Products;

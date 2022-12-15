import React from "react";

// import Categories from "../back/Data/Data";
import "../../csss/Products.css";
import { useState } from "react";

// const filterProduct = (category) => {}

const Products = ({ productItems, handleAddProduct }) => {
  const [products, setProducts] = useState(productItems);

  const handleFilter = (category) => {
    if (category === "all") {
      setProducts(productItems);
    } else {
      const output = productItems.filter((item) => item.category === category);
      setProducts(output);
    }
  };

  return (
    <React.Fragment>
      <div className="Category_btns">
        <button onClick={() => handleFilter("all")}>All </button>
        <button onClick={() => handleFilter("Shirt")}>Shirt</button>
        <button onClick={() => handleFilter("Sweater")}>Sweater</button>
        <button onClick={() => handleFilter("Hoodie")}>Hoodie</button>
        <button onClick={() => handleFilter("Shoes")}>Shoes</button>
      </div>
      <div className="products">
        {products.map((productItem) => (
          <div key={productItem.id} className="card">
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

import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./components/front/Routes/Routes";
import data from "./components/back/Data/Data";
import dataHome from "./components/back/Data/DataHome";
import Footer from "./components/footer/Footer";

const App = () => {
  const { productItems } = data;
  const { homeProductItems } = dataHome;
  const [cartItems, setCartItems] = useState([]);

  // const filterProductItems = productItems.filter((value) => {
  //   if (value.id <= 4) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar cartItems={cartItems} />
        <Routes
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          homeProductItems={homeProductItems}
        />
      </Router>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../../pages/Home";
import About from "../../../pages/About";

import Sale from "../../../pages/Sale";
import Products from "../../products/Products";
import Signup from "../../../pages/Signup";
import Carts from "../../../pages/Carts";

const Routes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  homeProductItems,
}) => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home
            homeProductItems={homeProductItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/products">
          <Products
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path="/sale">
          <Sale />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/cart">
          <Carts
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;

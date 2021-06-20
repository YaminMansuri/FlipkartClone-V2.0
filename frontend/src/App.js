import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Home/pages/HomePage";
import NavBarComponent from "./Navigation/NavBarComponent";
import ProductDetailsPage from "./ProductDetails/ProductDetailsPage";

const App = () => {
  return (
    <div>
      <NavBarComponent />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/product/:id">
          <ProductDetailsPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

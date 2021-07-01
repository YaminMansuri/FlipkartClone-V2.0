import React, { useCallback, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./Home/pages/HomePage";
import NavBarComponent from "./Navigation/NavBarComponent";
import ProductDetailsPage from "./ProductDetails/ProductDetailsPage";
import CartPage from "./Cart/CartPage";
import { AuthContext } from "./shared/context/AuthContext";

const App = () => {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);
  const [name, setName] = useState("");

  const login = useCallback((uid, name, token) => {
    setToken(token);
    setUserId(uid);
    setName(name);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setName(null);
  }, []);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/product/:productId" exact>
          <ProductDetailsPage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/product/:productId" exact>
          <ProductDetailsPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        name: name,
        login: login,
        logout: logout,
      }}
    >
      <NavBarComponent />
      <main>{routes}</main>
    </AuthContext.Provider>
  );
};

export default App;

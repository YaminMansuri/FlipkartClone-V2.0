import React, { useCallback, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./Home/pages/HomePage";
import NavBarComponent from "./Navigation/NavBarComponent";
import ProductDetailsPage from "./ProductDetails/ProductDetailsPage";

import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/product/:id" exact>
          <ProductDetailsPage />
        </Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
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

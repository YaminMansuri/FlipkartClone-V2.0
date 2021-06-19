import React from "react";

import HomePage from "./Home/pages/HomePage";
import NavBarComponent from "./Navigation/NavBarComponent";

const App = () => {
  return (
    <div>
      <NavBarComponent />
      <HomePage />
    </div>
  );
};

export default App;

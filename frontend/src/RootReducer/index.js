import { combineReducers } from "redux";

import { getProductsReducer } from "../Home/store/productReducers";

export default combineReducers({
  productsReducer: getProductsReducer,
});

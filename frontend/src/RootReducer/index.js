import { combineReducers } from "redux";

import {
  getCategoriesReducer,
  getProductsReducer,
  getProductDetailsReducer,
} from "../store/Reducers/productReducers";
import { cartReducer } from "../store/Reducers/shopReducers";

export default combineReducers({
  categoriesReducer: getCategoriesReducer,
  productsReducer: getProductsReducer,
  productDetailsReducer: getProductDetailsReducer,
  cartReducer,
});

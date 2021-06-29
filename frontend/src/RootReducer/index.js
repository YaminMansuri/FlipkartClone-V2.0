import { combineReducers } from "redux";

import {
  getCategoriesReducer,
  getProductsReducer,
  getProductDetailsReducer,
} from "../store/Reducers/productReducers";

export default combineReducers({
  categoriesReducer: getCategoriesReducer,
  productsReducer: getProductsReducer,
  productDetailsReducer: getProductDetailsReducer,
});

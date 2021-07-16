import { combineReducers } from "redux";

import {
  categoriesReducer,
  productsReducer,
  productDetailsReducer,
} from "../store/Reducers/productReducers";
import { cartReducer, orderReducer } from "../store/Reducers/shopReducers";

export default combineReducers({
  categoriesReducer,
  productsReducer,
  productDetailsReducer,
  cartReducer,
  orderReducer,
});

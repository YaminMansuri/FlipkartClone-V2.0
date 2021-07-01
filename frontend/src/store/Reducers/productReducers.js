import {
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_SUCESS,
} from "../../store/Constants/actionTypes";
import { updateState } from "../util/utilityFunctions";

const categoriesState = {
  categories: [],
  error: "",
};

const productsState = {
  products: [],
  error: "",
};

const productState = {
  product: {},
  error: "",
};

export const getCategoriesReducer = (state = categoriesState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return updateState(state, { categories: action.payload, error: "" });
    case GET_CATEGORIES_FAILURE:
      return updateState(state, { error: action.payload });
    default:
      return state;
  }
};

export const getProductsReducer = (state = productsState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return updateState(state, { products: action.payload, error: "" });
    case GET_PRODUCTS_FAILURE:
      return updateState(state, { error: action.payload });
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_SUCESS:
      return updateState(state, { product: action.payload, error: "" });
    case GET_PRODUCT_DETAILS_FAILURE:
      return updateState(state, { error: action.paylod });
    default:
      return state;
  }
};

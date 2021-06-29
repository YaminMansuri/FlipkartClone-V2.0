import {
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS_SUCESS,
} from "../../store/Constants/actionTypes";
import { updateState } from "../../util/utilityFunctions";

const categoriesState = {
  categories: [],
};

const productsState = {
  products: [],
};

const productState = {
  product: {},
};

export const getCategoriesReducer = (state = categoriesState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return updateState(state, { categories: action.payload });
    case GET_CATEGORIES_FAILURE:
      return updateState(state, { error: action.payload });
    default:
      return state;
  }
};

export const getProductsReducer = (state = productsState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return updateState(state, { products: action.payload });
    case GET_PRODUCTS_FAILURE:
      return updateState(state, { error: action.payload });
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_SUCESS:
      return updateState(state, { product: action.payload });
    default:
      return state;
  }
};

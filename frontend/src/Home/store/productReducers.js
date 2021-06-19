import { GET_CATEGORIES, GET_PRODUCTS } from "../../Constants/actionTypes";
import { updateState } from "./utilityFunctions";

const initialState = {
  products: [],
  categories: [],
};

export const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return updateState(state, { products: action.payload });
    case GET_CATEGORIES:
      return updateState(state, { categories: action.payload });
    default:
      return state;
  }
};

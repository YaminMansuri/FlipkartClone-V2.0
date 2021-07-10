import { updateState } from "../util/utilityFunctions";
import {
  DELETE_CART_ITEM_FAILURE,
  DELETE_CART_ITEM_SUCCESS,
  GET_CART_DATA_FAILURE,
  GET_CART_DATA_SUCCESS,
  POST_ADD_TO_CART_FAILURE,
  POST_ADD_TO_CART_SUCCESS,
} from "../Constants/actionTypes";

const initialState = {
  cartItems: {},
  error: "",
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ADD_TO_CART_SUCCESS:
      return updateState(state, { cartItems: action.payload, error: "" });
    case POST_ADD_TO_CART_FAILURE:
      return updateState(state, { error: action.payload });

    case GET_CART_DATA_SUCCESS:
      return updateState(state, { cartItems: action.payload, error: "" });
    case GET_CART_DATA_FAILURE:
      return updateState(state, { error: action.payload });

    case DELETE_CART_ITEM_SUCCESS:
      return updateState(state, { cartItems: action.payload, error: "" });
    case DELETE_CART_ITEM_FAILURE:
      return updateState(state, { error: action.payload });

    default:
      return state;
  }
};

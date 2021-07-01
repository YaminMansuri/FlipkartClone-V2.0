import { updateState } from "../util/utilityFunctions";
import {
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
      console.log(action.payload);
      return updateState(state, { cartItems: action.payload, error: "" });
    case POST_ADD_TO_CART_FAILURE:
      return updateState(state, { error: action.payload });
    default:
      return state;
  }
};

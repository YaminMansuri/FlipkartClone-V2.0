import { updateState } from "../util/utilityFunctions";
import {
  DELETE_CART_ITEM_FAILURE,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_ORDER_ITEM_FAILURE,
  DELETE_ORDER_ITEM_SUCCESS,
  GET_CART_DATA_FAILURE,
  GET_CART_DATA_SUCCESS,
  GET_ORDER_FAILURE,
  GET_ORDER_SUCCESS,
  PLACE_CART_ORDER_FAILURE,
  PLACE_CART_ORDER_SUCCESS,
  PLACE_ORDER_FAILURE,
  PLACE_ORDER_SUCCESS,
  POST_ADD_TO_CART_FAILURE,
  POST_ADD_TO_CART_SUCCESS,
} from "../Constants/actionTypes";

const cartState = {
  cartItems: {
    items: [],
  },
  error: "",
};

const orderState = {
  orders: {
    items: [],
  },
  error: "",
};

// Cart Reducer
export const cartReducer = (state = cartState, action) => {
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

// Order Reducer
export const orderReducer = (state = orderState, action) => {
  switch (action.type) {
    case PLACE_ORDER_SUCCESS:
      return updateState(state, { orders: action.payload, error: "" });
    case PLACE_ORDER_FAILURE:
      return updateState(state, { error: action.payload });

    case GET_ORDER_SUCCESS:
      return updateState(state, { orders: action.payload, error: "" });
    case GET_ORDER_FAILURE:
      return updateState(state, { error: action.payload });

    case DELETE_ORDER_ITEM_SUCCESS:
      return updateState(state, { orders: action.payload, error: "" });
    case DELETE_ORDER_ITEM_FAILURE:
      return updateState(state, { error: action.payload });

    default:
      return state;
  }
};

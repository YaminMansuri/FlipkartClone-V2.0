import * as Api from "../Api/shopApi";
import {
  DELETE_CART_ITEM_FAILURE,
  DELETE_CART_ITEM_SUCCESS,
  GET_CART_DATA_FAILURE,
  GET_CART_DATA_SUCCESS,
  POST_ADD_TO_CART_FAILURE,
  POST_ADD_TO_CART_SUCCESS,
} from "../Constants/actionTypes";
import { dispatchAction } from "../util/utilityFunctions";

export const addToCartAction =
  (userId, productId, value) => async (dispatch) => {
    try {
      const { data } = await Api.addToCart(userId, productId, value);
      console.log("action", data.cartItems);
      dispatch(dispatchAction(POST_ADD_TO_CART_SUCCESS, data.cartItems));
    } catch (error) {
      console.log(error);
      dispatch(dispatchAction(POST_ADD_TO_CART_FAILURE, error));
    }
  };

export const getCartDataAction = (userId) => async (dispatch) => {
  try {
    const { data } = await Api.getCart(userId);
    dispatch(dispatchAction(GET_CART_DATA_SUCCESS, data.cartItems));
  } catch (error) {
    console.log(error);
    dispatch(dispatchAction(GET_CART_DATA_FAILURE, error));
  }
};

export const deleteCartItemAction = (userId, productId) => async (dispatch) => {
  try {
    const { data } = await Api.deleteCartItem(userId, productId);
    dispatch(dispatchAction(DELETE_CART_ITEM_SUCCESS, data.cartItems));
  } catch (error) {
    console.log(error);
    dispatch(dispatchAction(DELETE_CART_ITEM_FAILURE, error));
  }
};

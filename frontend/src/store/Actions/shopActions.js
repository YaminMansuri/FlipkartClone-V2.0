import * as Api from "../Api/shopApi";
import {
  POST_ADD_TO_CART_FAILURE,
  POST_ADD_TO_CART_SUCCESS,
} from "../Constants/actionTypes";
import { dispatchAction } from "../util/utilityFunctions";

export const addToCartAction = (userId, productId) => async (dispatch) => {
  try {
    const { data } = await Api.addToCart(userId, productId);
    console.log("action", data.cartItems);
    dispatch(dispatchAction(POST_ADD_TO_CART_SUCCESS, data.cartItems));
  } catch (error) {
    console.log(error);
    dispatch(dispatchAction(POST_ADD_TO_CART_FAILURE, error));
  }
};

import {
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_SUCESS,
} from "../../store/Constants/actionTypes";

import * as Api from "../../store/Api/productApi";

const dispatchAction = (actionType, payloadData) => {
  return {
    type: actionType,
    payload: payloadData,
  };
};

const errorAction = (actionType, error) => {
  return {
    type: actionType,
    payload: error.response,
  };
};

export const getCategoriesAction = () => async (dispatch) => {
  try {
    const { data } = await Api.getCategories();
    dispatch(dispatchAction(GET_CATEGORIES_SUCCESS, data.categories));
  } catch (error) {
    console.log(error);
    dispatch(errorAction(GET_CATEGORIES_FAILURE, error));
  }
};

export const getProductsAction = () => async (dispatch) => {
  try {
    const { data } = await Api.getProducts();
    dispatch(dispatchAction(GET_PRODUCTS_SUCCESS, data.products));
  } catch (error) {
    console.log(error);
    dispatch(errorAction(GET_PRODUCTS_FAILURE, error));
  }
};

export const getProductDetailsAction = (productId) => async (dispatch) => {
  try {
    const { data } = await Api.getProductDetails(productId);
    dispatch(dispatchAction(GET_PRODUCT_DETAILS_SUCESS, data.product));
  } catch (error) {
    dispatch(errorAction(GET_PRODUCT_DETAILS_FAILURE, error));
  }
};

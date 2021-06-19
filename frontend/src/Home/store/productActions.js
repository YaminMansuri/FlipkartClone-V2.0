import * as Api from "../../Api/productApi";
import { GET_CATEGORIES, GET_PRODUCTS } from "../../Constants/actionTypes";

const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    payload: products,
  };
};

export const getProductsAction = () => async (dispatch) => {
  try {
    const { data } = await Api.getProducts();
    dispatch(getProducts(data.products));
  } catch (error) {
    console.log(error);
  }
};

const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: categories,
  };
};

export const getCategoriesAction = () => async (dispatch) => {
  try {
    const { data } = await Api.getCategories();
    dispatch(getCategories(data.categories));
  } catch (error) {
    console.log(error);
  }
};

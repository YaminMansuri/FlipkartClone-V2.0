import axios from "axios";

export const getCategories = () =>
  axios.get(`${process.env.REACT_APP_DATABASE_URL}/categories`);

export const getProducts = () =>
  axios.get(`${process.env.REACT_APP_DATABASE_URL}/products`);

export const getProductDetails = (productId) =>
  axios.get(`${process.env.REACT_APP_DATABASE_URL}/product/${productId}`);

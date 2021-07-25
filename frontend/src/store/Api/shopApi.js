import axios from "axios";

export const addToCart = (userId, productId, value) =>
  axios.post(`${process.env.REACT_APP_DATABASE_URL}/shop/cart`, {
    userId,
    productId,
    value,
  });

export const getCart = (userId) =>
  axios.get(`${process.env.REACT_APP_DATABASE_URL}/shop/user/${userId}/cart`);

export const deleteCartItem = (userId, productId) =>
  axios.delete(
    `${process.env.REACT_APP_DATABASE_URL}/shop/user/${userId}/cart/${productId}`
  );

// Order Api
export const placeOrder = async (userId, productId, value, orderType) =>
  axios.post(`${process.env.REACT_APP_DATABASE_URL}/shop/order`, {
    userId,
    productId,
    value,
    orderType,
  });

export const getOrder = async (userId) =>
  axios.get(`${process.env.REACT_APP_DATABASE_URL}/shop/user/${userId}/order`);

export const deleteOrderItem = (userId, productId) =>
  axios.delete(
    `${process.env.REACT_APP_DATABASE_URL}/shop/user/${userId}/order/${productId}`
  );

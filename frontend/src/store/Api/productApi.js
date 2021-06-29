import axios from "axios";

export const getCategories = () => axios.get("/categories");

export const getProducts = () => axios.get("/products");

export const getProductDetails = (productId) => axios.get(`/product/${productId}`);

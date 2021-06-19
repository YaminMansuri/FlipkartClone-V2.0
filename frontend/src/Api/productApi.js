import axios from "axios";

export const getProducts = () => axios.get("/products");

export const getCategories = () => axios.get("/categories");

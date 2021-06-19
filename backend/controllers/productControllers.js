import ProductModel from "../models/ProductModel.js";
import CategoryModel from "../models/CategoryModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json({ products });
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json({ categories });
  } catch (error) {
    console.log(error);
  }
};

import ProductModel from "../models/ProductModel.js";
import CategoryModel from "../models/CategoryModel.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});
    res.json({ categories });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.json({ products });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await ProductModel.findById(productId);
    res.json({ product });
  } catch (error) {
    res.status(400).json({ message: error });
    console.log("An error occurred");
  }
};

import mongoose from "mongoose";

const ProductModel = new mongoose.Schema({
  productCategory: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  productDetailImage: {
    type: String,
    required: true,
  },
  productRatings: {
    type: Number,
    required: true,
  },
  productNumOfRatings: {
    type: Number,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productDiscount: {
    type: Number,
    required: true,
  },
  productDetails: {
    type: String,
    required: true,
  },
  productHighlights: {
    type: Array,
    required: true,
  },
});

export default mongoose.model("Products", ProductModel);

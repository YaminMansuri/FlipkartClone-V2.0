import mongoose from "mongoose";

const ProductModel = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  smallImage: {
    type: String,
    required: true,
  },
  largeImage: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  numOfRatings: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  highlights: {
    type: Array,
    required: true,
  },
});

export default mongoose.model("products", ProductModel);

import mongoose from "mongoose";

const CategoryModel = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  categoryTitle: {
    type: String,
    required: true,
  },
  categorySubTitle: {
    type: String,
    required: true,
  },
});

export default mongoose.model("categories", CategoryModel);

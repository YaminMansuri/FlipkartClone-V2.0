import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryItemComponent from "./CategoryItemComponent";
import { getCategoriesAction } from "../../store/Actions/productActions";

const CategoryListComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  const categories = useSelector((state) => state.categoriesReducer.categories);

  return (
    <>
      {categories.map((category) => (
        <CategoryItemComponent
          key={category._id}
          category={category.category}
          categoryTitle={category.categoryTitle}
          categorySubTitle={category.categorySubTitle}
        />
      ))}
    </>
  );
};

export default CategoryListComponent;

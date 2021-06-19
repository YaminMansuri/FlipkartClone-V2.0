import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCategoriesAction } from "../store/productActions";
import CategoryItemComponent from "./CategoryItemComponent";

const CategoryListComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  const categories = useSelector((state) => state.productsReducer.categories);

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

      {/* <CategoryItemComponent
        category="phone"
        categoryTitle="Best Battery Phones"
        categorySubTitle="More than 4000 mAh"
      />
      <CategoryItemComponent
        category="phone"
        categoryTitle="Best Battery Phones"
        categorySubTitle="More than 4000 mAh"
      /> */}
    </>
  );
};

export default CategoryListComponent;

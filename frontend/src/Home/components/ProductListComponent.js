import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@material-ui/core";

import ProductItemComponent from "./ProductItemComponent";
import { getProductsAction } from "../store/productActions";

const ProductListComponent = (props) => {
  const { category } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const products = useSelector((state) => state.productsReducer.products);

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <Grid container spacing={3}>
      {filteredProducts.map((product) => {
        return (
          <Grid item xs={6} sm={4} md={3} lg={2} key={product._id}>
            <ProductItemComponent product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductListComponent;

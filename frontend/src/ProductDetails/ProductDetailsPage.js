import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { makeStyles, Paper } from "@material-ui/core";

import { getProductsAction } from "../Home/store/productActions";
import PriceComponent from "../Product/PriceComponent";
import RatingsComponent from "../Product/RatingsComponent";
import ProductTitleComponent from "../Product/ProductTitleComponent";
import utilityClasses from "../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    height: "50vh",
    padding: "20px",
  },
  image: {
    margin: "auto",
    maxHeight: "100%",
    maxWidth: "100%",
  },
}));

const ProductDetailsPage = () => {
  const productDetailsStyle = useStyles();
  const utilClasses = utilityClasses();

  const dispatch = useDispatch();
  const productId = useParams();

  const products = useSelector((state) => state.productsReducer.products);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const product = products.find((product) => product._id === productId.id);

  return (
    <>
      {product && (
        <Paper>
          <div
            className={`${productDetailsStyle.imageContainer} ${utilClasses.displayFlex}`}
          >
            <img
              src={product.largeImage}
              alt={product.name}
              className={productDetailsStyle.image}
            />
          </div>

          <ProductTitleComponent title={product.name} />
          <PriceComponent price={product.price} discount={product.discount} />
          <RatingsComponent
            ratings={product.ratings}
            numOfRatings={product.numOfRatings}
          />
        </Paper>
      )}
    </>
  );
};

export default ProductDetailsPage;

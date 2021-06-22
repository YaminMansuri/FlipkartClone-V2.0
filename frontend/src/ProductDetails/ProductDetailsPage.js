import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { makeStyles, Paper } from "@material-ui/core";

import { getProductsAction } from "../Home/store/productActions";
import utilityClasses from "../util/utilityClasses";
import ImageComponent from "./ImageComponent";
import ProductDetailsComponent from "./ProductDetailsComponent";
import ButtonsComponent from "./ButtonsComponent";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  paperStyle: {
    [theme.breakpoints.up("md")]: {
      width: "85%",
      margin: "0 auto",
    },
  },
  mobileView: {
    position: "sticky",
    bottom: 0,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  desktopView: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  btnMargin: {
    margin: theme.spacing(0, 0.5),
  },
  sticky: {
    height: "70%",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      position: "sticky",
      top: theme.spacing(8),
    },
  },
}));

const ProductDetailsPage = () => {
  const productDetailsStyle = useStyles();
  const utilClasses = utilityClasses();

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductsAction());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const products = useSelector((state) => state.productsReducer.products);

  const product = products.find((product) => product._id === id);

  return (
    <>
      {product && (
        <>
          <Paper
            className={`
              ${productDetailsStyle.paperStyle}
              ${productDetailsStyle.container}
            `}
          >
            <div className={utilClasses.flex}>
              <div
                className={`${productDetailsStyle.sticky} ${utilClasses.displayFlex}`}
              >
                <ImageComponent
                  largeImage={product.largeImage}
                  name={product.name}
                />
                <ButtonsComponent
                  className={`
                    ${productDetailsStyle.desktopView}
                    ${utilClasses.justifyBetween}
                  `}
                  btnMargin={productDetailsStyle.btnMargin}
                />
              </div>
            </div>
            <ProductDetailsComponent
              product={product}
              className={utilClasses.flexTwo}
            />
          </Paper>

          <ButtonsComponent
            className={`
              ${productDetailsStyle.mobileView}
              ${utilClasses.displayFlex}
            `}
          />
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;

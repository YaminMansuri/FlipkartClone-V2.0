import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { makeStyles, Paper } from "@material-ui/core";

import utilityClasses from "../util/utilityClasses";
import ImageComponent from "./ImageComponent";
import ProductDetailsComponent from "./ProductDetailsComponent";
import ButtonsComponent from "./ButtonsComponent";
import { getProductDetailsAction } from "../store/Actions/productActions";

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
  btnMargin: {
    margin: theme.spacing(0, 0.5),
  },
  sticky: {
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      height: "75vh",
      position: "sticky",
      top: theme.spacing(3),
    },
  },
  flexGrow: {
    flex: 1.3,
  },
}));

const ProductDetailsPage = () => {
  const productDetailsStyle = useStyles();
  const utilClasses = utilityClasses();

  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(getProductDetailsAction(productId));
    window.scrollTo(0, 0);
  }, [dispatch, productId]);

  const product = useSelector((state) => state.productDetailsReducer.product);

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
            <div className={productDetailsStyle.flexGrow}>
              <div
                className={`${productDetailsStyle.sticky} ${utilClasses.displayFlex}`}
              >
                <ImageComponent
                  largeImage={product.largeImage}
                  name={product.name}
                />
                <ButtonsComponent
                  className={`
                    ${utilClasses.desktopView}
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

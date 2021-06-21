import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { makeStyles, Paper } from "@material-ui/core";
import { ShoppingCart, FlashOn } from "@material-ui/icons";

import { getProductsAction } from "../Home/store/productActions";
import utilityClasses from "../util/utilityClasses";
import ImageComponent from "./ImageComponent";
import ProductDetailsComponent from "./ProductDetailsComponent";
import ButtonComponent from "../Button/ButtonComponent";

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
      margin: "auto",
    },
  },
  yellow: {
    backgroundColor: theme.palette.yellow.main,
    "&:hover": {
      backgroundColor: "#ffb339",
    },
  },
  orange: {
    backgroundColor: theme.palette.orange.main,
    "&:hover": {
      backgroundColor: "#ff7936",
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
    margin: theme.spacing(0, 1),
  },
}));

const ProductDetailsPage = () => {
  const productDetailsStyle = useStyles();
  const utilClasses = utilityClasses();

  const dispatch = useDispatch();
  const productId = useParams();

  useEffect(() => {
    dispatch(getProductsAction());
    window.scrollTo(0,0)
  }, [dispatch]);

  const products = useSelector((state) => state.productsReducer.products);

  const product = products.find((product) => product._id === productId.id);

  return (
    <>
      {product && (
        <Paper className={`${productDetailsStyle.paperStyle}`}>
          <div className={productDetailsStyle.container}>
            <div className={utilClasses.flexOne}>
              <ImageComponent
                largeImage={product.largeImage}
                name={product.name}
              />
              <div
                className={`${productDetailsStyle.desktopView} 
                  ${utilClasses.justifyBetween}`}
              >
                <ButtonComponent
                  color={productDetailsStyle.yellow}
                  margin={productDetailsStyle.btnMargin}
                  icon={<ShoppingCart />}
                >
                  Add to Cart
                </ButtonComponent>
                <ButtonComponent
                  color={productDetailsStyle.orange}
                  icon={<FlashOn />}
                >
                  Add to Cart
                </ButtonComponent>
              </div>
            </div>
            <ProductDetailsComponent
              product={product}
              className={utilClasses.flexTwo}
            />
          </div>
          <div
            className={`${productDetailsStyle.mobileView} ${utilClasses.displayFlex}`}
          >
            <ButtonComponent
              color={productDetailsStyle.yellow}
              icon={<ShoppingCart />}
            >
              Add to Cart
            </ButtonComponent>
            <ButtonComponent
              color={productDetailsStyle.orange}
              icon={<FlashOn />}
            >
              Buy Now
            </ButtonComponent>
          </div>
        </Paper>
      )}
    </>
  );
};

export default ProductDetailsPage;

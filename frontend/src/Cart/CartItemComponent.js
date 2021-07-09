import React from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  Divider,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";

import ProductTitleComonent from "../Product/ProductTitleComponent";
import PriceComponent from "../Product/PriceComponent";
import CounterComponent from "./CounterComponent";
import utilityClasses from "../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
  },
  rightSpacing: {
    marginRight: theme.spacing(2.5),
  },
  imageContainerStyle: {
    marginTop: theme.spacing(1),
  },
  imageStyle: {
    marginBottom: theme.spacing(2.5),
    maxHeight: "95%",
    maxWidth: "95%",
    [theme.breakpoints.up("md")]: {
      maxHeight: "100%",
      maxWidth: "100%",
    },
  },
  sellerStyle: {
    margin: theme.spacing(1.5, 0),
  },
  priceComponentStyle: {
    margin: theme.spacing(2, 0),
  },
  counterComponentStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  fullHeight: {
    height: "100%",
  },
  btnStyle: {
    textTransform: "none",
    fontSize: "0.95rem",
    [theme.breakpoints.up("md")]: {
      textTransform: "upperCase",
    },
  },
}));

const CartItemComponent = (props) => {
  const { product, quantity } = props;
  const classes = useStyles();
  const utilClasses = utilityClasses();
  return (
    <>
      <Grid container spacing={1} className={classes.root}>
        <Grid item xs={5} md={2}>
          <Grid container className={classes.fullHeight}>
            <Grid item xs={12}>
              <div className={classes.imageContainerStyle}>
                <img
                  src={product.smallImage}
                  alt={product.name}
                  className={`
                    ${classes.imageStyle}
                    ${utilClasses.displayFlex}
                    ${utilClasses.marginAuto}
                  `}
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              className={`
                ${utilClasses.displayFlex} 
                ${utilClasses.flexColumn} 
                ${utilClasses.justifyEnd}
              `}
            >
              <CounterComponent
                quantity={quantity}
                productId={product._id}
                className={`
                  ${utilClasses.displayFlex}
                  ${classes.counterComponentStyle}
                `}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7} md={6}>
          <Grid container className={classes.fullHeight}>
            <Grid item xs={12}>
              <Link
                to={`/product/${product._id}`}
                className={utilClasses.linkStyle}
              >
                <ProductTitleComonent title={product.name} wrap="true" />
              </Link>
              <Typography color="textSecondary">{product.subTitle}</Typography>
              <Typography
                color="textSecondary"
                className={`${classes.sellerStyle}`}
                noWrap="false"
              >
                Seller:{product.seller}
              </Typography>
              <PriceComponent
                price={product.price}
                discount={product.discount}
                margin={classes.priceComponentStyle}
                variant="h6"
              />
            </Grid>
            <Grid
              item
              xs={12}
              className={`
                ${utilClasses.displayFlex} 
                ${utilClasses.flexColumn} 
                ${utilClasses.justifyEnd}
              `}
            >
              <div>
                <Button className={classes.btnStyle}>Save for later</Button>
                <Button className={classes.btnStyle}>Delete</Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          md={4}
          className={`
            ${utilClasses.desktopView} 
            ${utilClasses.displayFlex} 
            ${utilClasses.justifyEnd}
          `}
        >
          <div>
            <Typography component="span">Delivery in 2 days, Thu |</Typography>
            <Typography component="span" color="secondary">
              {" "}
              Free
            </Typography>
            <Typography
              component="span"
              className={utilClasses.strikeThroughText}
            >
              {" "}
              ₹40
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Divider />
    </>
  );
};

export default CartItemComponent;

import React from "react";
import { Link } from "react-router-dom";

import { Divider, Button, makeStyles, Typography } from "@material-ui/core";

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
    marginTop: theme.spacing(2.5),
  },
  imageStyle: {
    marginBottom: theme.spacing(2.5),
    maxWidth: "100%",
    maxHeight: "100%",
  },
  sellerStyle: {
    margin: theme.spacing(1.5, 0),
  },
  priceComponentStyle: {
    margin: theme.spacing(2, 0),
  },
}));

const CartItemComponent = (props) => {
  const { product, quantity } = props;
  const classes = useStyles();
  const utilClasses = utilityClasses();
  return (
    <>
      <div className={`${classes.root} ${utilClasses.displayFlex}`}>
        <div
          className={`
            ${classes.rightSpacing} 
            ${utilClasses.displayFlex}
            ${utilClasses.flexColumn}
          `}
        >
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
          <div
            className={`
              ${utilClasses.displayFlex}
              ${utilClasses.flexColumn}
              ${utilClasses.justifyEnd}
              ${utilClasses.marginAuto}
              ${utilClasses.flexOne}
            `}
          >
            <CounterComponent quantity={quantity} />
          </div>
        </div>
        <div className={`${utilClasses.displayFlex} ${utilClasses.flexColumn}`}>
          <div className={utilClasses.flexOne}>
            <Link
              to={`/product/${product._id}`}
              className={utilClasses.linkStyle}
            >
              <ProductTitleComonent title={product.name} />
            </Link>
            <Typography color="textSecondary">{product.subTitle}</Typography>
            <Typography color="textSecondary" className={classes.sellerStyle}>
              Seller:{product.seller}
            </Typography>
            <PriceComponent
              price={product.price}
              discount={product.discount}
              margin={classes.priceComponentStyle}
              variant="h6"
            />
          </div>
          <div>
            <Button>Save for Later</Button>
            <Button>Remove</Button>
          </div>
        </div>
        <div
          className={`
            ${utilClasses.displayFlex} 
            ${utilClasses.flexOne} 
            ${utilClasses.justifyEnd}
          `}
        >
          <Typography>
            Delivery in 2 days, Thu |
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
          </Typography>
        </div>
      </div>

      <Divider />
    </>
  );
};

export default CartItemComponent;

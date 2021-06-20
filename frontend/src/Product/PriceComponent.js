import React from "react";

import { Typography, makeStyles } from "@material-ui/core";

import utilityClasses from "../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  semiBold: {
    fontWeight: "500",
  },
  productPrice: {
    margin: 5,
    textDecoration: "line-through",
  },
}));

const PriceComponent = (props) => {
  const { price, discount } = props;
  const priceStyles = useStyles();
  const utilClasses = utilityClasses();

  const getPrice = () => {
    return price - (price * discount) / 100;
  };

  return (
    <Typography className={utilClasses.lineHeight} noWrap>
      <Typography
        component="span"
        color="textPrimary"
        className={`${priceStyles.semiBold}`}
      >
        ₹{getPrice()}
      </Typography>
      <Typography
        component="span"
        color="textSecondary"
        className={priceStyles.productPrice}
      >
        ₹{price}
      </Typography>
      <Typography component="span" color="secondary">
        {discount}% off
      </Typography>
    </Typography>
  );
};

export default PriceComponent;

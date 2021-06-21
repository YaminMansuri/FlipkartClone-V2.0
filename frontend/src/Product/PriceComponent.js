import React from "react";

import { Typography, makeStyles } from "@material-ui/core";

import utilityClasses from "../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  productPrice: {
    margin: 5,
    textDecoration: "line-through",
  },
}));

const PriceComponent = (props) => {
  const { price, discount, variant } = props;
  const priceStyles = useStyles();
  const utilClasses = utilityClasses();

  const getPrice = () => {
    return price - (price * discount) / 100;
  };

  return (
    <Typography className={utilClasses.spacing} noWrap>
      <Typography
        component="span"
        color="textPrimary"
        variant={variant}
        className={`${utilClasses.bold}`}
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
      <Typography
        component="span"
        color="secondary"
        className={utilClasses.semiBold}
      >
        {discount}% off
      </Typography>
    </Typography>
  );
};

export default PriceComponent;

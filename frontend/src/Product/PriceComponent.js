import React from "react";

import { Typography, makeStyles } from "@material-ui/core";

import utilityClasses from "../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  productPrice: {
    margin: 5,
  },
}));

const PriceComponent = (props) => {
  const { price, discount, variant, margin } = props;
  const priceStyles = useStyles();
  const utilClasses = utilityClasses();

  const calculatePrice = () => {
    return price - (price * discount) / 100;
  };

  return (
    <Typography className={`${utilClasses.spacing} ${margin}`} noWrap>
      <Typography
        component="span"
        color="textPrimary"
        variant={variant}
        className={utilClasses.bold}
      >
        ₹{calculatePrice()}
      </Typography>
      <Typography
        component="span"
        color="textSecondary"
        className={`${priceStyles.productPrice} ${utilClasses.strikeThroughText}`}
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

import React from "react";
import { useSelector } from "react-redux";

import {
  Grid,
  Typography,
  Divider,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
} from "@material-ui/core";

import utilityClasses from "../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    boxShadow: theme.shadows[1],
  },
  headerStyle: {
    color: theme.palette.text.secondary,
  },
}));

const PriceDetailsComponent = () => {
  const classes = useStyles();
  const utilClasses = utilityClasses();

  const cart = useSelector((state) => state.cartReducer.cartItems);
  console.log("Price", cart.items);

  let totalPrice = 0;
  let totalDiscount = 0;

  cart.items &&
    cart.items.forEach((cartItem) => {
      const { product, quantity } = cartItem;
      const { price, discount } = product;
      totalPrice += price * quantity;
      totalDiscount += (price * discount * quantity) / 100;
    });

  return (
    <>
      {cart.items && (
        <Card className={classes.cardStyle}>
          <CardHeader className={classes.headerStyle} title="Price Details" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography>Price ({cart.items.length} items)</Typography>
              </Grid>
              <Grid
                item
                xs={6}
                className={`${utilClasses.displayFlex} ${utilClasses.justifyEnd}`}
              >
                <Typography>₹{totalPrice}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Discount</Typography>
              </Grid>
              <Grid
                item
                xs={6}
                className={`${utilClasses.displayFlex} ${utilClasses.justifyEnd}`}
              >
                <Typography color="secondary">-₹{totalDiscount}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Delivery Charges</Typography>
              </Grid>
              <Grid
                item
                xs={6}
                className={`${utilClasses.displayFlex} ${utilClasses.justifyEnd}`}
              >
                <Typography color="secondary">FREE</Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Divider variant="middle" />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography>Total Amount</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  className={`
                  ${utilClasses.bold} 
                  ${utilClasses.displayFlex} 
                  ${utilClasses.justifyEnd}
                `}
                >
                  ₹{totalPrice - totalDiscount}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Divider variant="middle" />
          <CardContent>
            <Typography color="secondary">
              You will save ₹{totalDiscount} on this order
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default PriceDetailsComponent;

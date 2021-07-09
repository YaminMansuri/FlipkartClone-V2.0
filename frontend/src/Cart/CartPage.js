import React from "react";

import { Grid, makeStyles } from "@material-ui/core";

import CartListComponent from "./CartListComponent";
import PriceDetailsComponent from "./PriceDetailsComponent";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2, "auto"),
    [theme.breakpoints.up("md")]: {
      width: "85%",
    },
    overflow: "hidden",
  },
  cardStyle: {
    boxShadow: theme.shadows[1],
  },
}));

const CartPage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <CartListComponent />
        </Grid>
        <Grid item xs={12} md={4}>
          <div>
            <PriceDetailsComponent />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartPage;

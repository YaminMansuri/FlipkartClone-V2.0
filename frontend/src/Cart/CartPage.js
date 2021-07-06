import React from "react";

import { makeStyles } from "@material-ui/core";

import CartListComponent from "./CartListComponent";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    marginTop: theme.spacing(2),
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
}));

const CartPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <CartListComponent />
      </div>
    </div>
  );
};

export default CartPage;

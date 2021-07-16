import React, { useContext, useEffect } from "react";

import { Grid, makeStyles } from "@material-ui/core";

import CartListComponent from "./CartListComponent";
import PriceDetailsComponent from "./PriceDetailsComponent";
import { useDispatch, useSelector } from "react-redux";
import { getCartDataAction } from "../store/Actions/shopActions";
import { AuthContext } from "../shared/context/AuthContext";

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

  const { userId } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartDataAction(userId));
  }, [dispatch, userId]);

  const { items } = useSelector((state) => state.cartReducer.cartItems);

  return (
    <Grid container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <CartListComponent items={items} />
        </Grid>
        <Grid item xs={12} md={4}>
          <div>
            <PriceDetailsComponent productArray={items} />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartPage;

import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, makeStyles } from "@material-ui/core";

import {
  addToCartAction,
  deleteCartItemAction,
  getCartDataAction,
  placeOrderAction,
} from "../store/Actions/shopActions";
import { AuthContext } from "../shared/context/AuthContext";
import PriceDetailsComponent from "../Shop/PriceDetailsComponent";
import CardListComponent from "../Shop/CardListComponent";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  useEffect(() => {
    dispatch(getCartDataAction(userId));
  }, [dispatch, userId]);

  const { items } = useSelector((state) => state.cartReducer.cartItems);

  const deleteCartItemHandler = (id) => {
    dispatch(deleteCartItemAction(userId, id));
  };

  const incrementQuantityHandler = (quantity, productId) => {
    quantity >= 5
      ? console.log("We're sorry! Only 5 units allowed in each order")
      : dispatch(addToCartAction(userId, productId, 1));
  };

  const decrementQuantityHandler = (quantity, productId) => {
    quantity > 1
      ? dispatch(addToCartAction(userId, productId, -1))
      : dispatch(deleteCartItemAction(userId, productId));
  };

  const placeOrderHandler = () => {
    dispatch(placeOrderAction(userId, null, null, "checkout-cart"));
    history.push("/order");
  };

  return (
    <Grid container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <CardListComponent
            items={items}
            title={`My Cart (${items.length})`}
            deleteHandler={deleteCartItemHandler}
            incrementQuantityHandler={incrementQuantityHandler}
            decrementQuantityHandler={decrementQuantityHandler}
            btnTitle="Place Order"
            onClickHandler={placeOrderHandler}
          />
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

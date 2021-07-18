import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, makeStyles } from "@material-ui/core";

import {
  deleteOrderItemAction,
  placeOrderAction,
} from "../store/Actions/shopActions";
import { AuthContext } from "../shared/context/AuthContext";
import PriceDetailsComponent from "../Shop/PriceDetailsComponent";
import CardListComponent from "../Shop/CardListComponent";

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
  headerStyle: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    height: 50,
  },
}));

const OrderPage = () => {
  const { userId } = useContext(AuthContext);
  const classes = useStyles();

  const dispatch = useDispatch();

  const product = useSelector((state) => state.orderReducer.orders);

  const deleteOrderItemHandler = (id) => {
    dispatch(deleteOrderItemAction(userId, id));
  };

  const incrementQuantityHandler = (quantity, productId, orderType) => {
    quantity >= 5
      ? console.log("We're sorry! Only 5 units allowed in each order")
      : dispatch(placeOrderAction(userId, productId, 1, "checkout-product"));
  };

  const decrementQuantityHandler = (quantity, productId, orderType) => {
    quantity > 1
      ? dispatch(placeOrderAction(userId, productId, -1, "checkout-product"))
      : dispatch(deleteOrderItemAction(userId, productId));
  };

  return (
    <>
      <Grid container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <CardListComponent
              items={product.items}
              title={`My Orders (${product.items.length})`}
              headerStyle={classes.headerStyle}
              deleteHandler={deleteOrderItemHandler}
              incrementQuantityHandler={incrementQuantityHandler}
              decrementQuantityHandler={decrementQuantityHandler}
              btnTitle="Continue"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <div>
              <PriceDetailsComponent productArray={product.items} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderPage;

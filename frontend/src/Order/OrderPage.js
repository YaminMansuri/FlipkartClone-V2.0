import React, { useContext, useEffect } from "react";

import { Grid, makeStyles } from "@material-ui/core";

import PriceDetailsComponent from "../Cart/PriceDetailsComponent";
import { useDispatch, useSelector } from "react-redux";
import OrderListComponent from "./OrderListComponent";
import { getOrderAction } from "../store/Actions/shopActions";
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
  useEffect(() => {
    dispatch(getOrderAction(userId));
  }, [dispatch, userId]);

  const cart = useSelector((state) => state.cartReducer.cartItems);
  const product = useSelector((state) => state.orderReducer.orders);

  return (
    <>
      <Grid container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <OrderListComponent
              items={product.items}
              title="My Orders"
              headerStyle={classes.headerStyle}
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

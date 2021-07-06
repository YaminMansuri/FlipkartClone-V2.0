import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Divider,
  Button,
  makeStyles,
} from "@material-ui/core";

import { AuthContext } from "../shared/context/AuthContext";
import { getCartDataAction } from "../store/Actions/shopActions";
import CartItemComponent from "./CartItemComponent";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    boxShadow: theme.shadows[1],
  },
  btnStyle: {
    backgroundColor: theme.palette.orange.main,
    color: "white",
    marginLeft: "auto",
    borderRadius: "0",
    padding: theme.spacing(1.8, 10),
  },
}));

const CartListComponent = () => {
  const { userId } = useContext(AuthContext);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getCartDataAction(userId));
  }, [dispatch, userId]);

  const cart = useSelector((state) => state.cartReducer.cartItems);
  console.log(cart);

  return (
    <Card className={classes.cardStyle}>
      {cart.items && (
        <>
          <CardHeader title={`My Cart (${cart.items.length})`} />

          <Divider />

          <CardContent>
            {cart.items.map((cartItem) => (
              <CartItemComponent
                product={cartItem.product}
                quantity={cartItem.quantity}
              />
            ))}
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.btnStyle}>
              Place Order
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
};

export default CartListComponent;

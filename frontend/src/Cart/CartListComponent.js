import React from "react";

import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Divider,
  Button,
  makeStyles,
} from "@material-ui/core";

import CartItemComponent from "./CartItemComponent";
import utilityClasses from "../util/utilityClasses";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    boxShadow: theme.shadows[1],
  },
  btnStyle: {
    backgroundColor: theme.palette.orange.main,
    color: "white",
    marginLeft: "auto",
    borderRadius: "0",
    padding: theme.spacing(1, 4.5),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1.8, 10),
    },
  },
}));

const CartListComponent = (props) => {
  const { items } = props;
  const classes = useStyles();
  const utilClasses = utilityClasses();

  const history = useHistory();

  const buyNowHandler = () => {
    history.push("/order");
  };

  return (
    <Card className={classes.cardStyle}>
      {items && (
        <>
          <CardHeader title={`My Cart (${items.length})`} />

          <Divider />

          <CardContent>
            {items.map((cartItem) => (
              <CartItemComponent
                product={cartItem.product}
                quantity={cartItem.quantity}
              />
            ))}
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              className={`${classes.btnStyle} ${utilClasses.orange}`}
              onClick={buyNowHandler}
            >
              Place Order
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
};

export default CartListComponent;

import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
} from "@material-ui/core";

import utilityClasses from "../util/utilityClasses";
import OrderItemComponent from "./OrderItemComponent";

const useStyles = makeStyles((theme) => ({
  headerStyle: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    height: 50,
  },
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

const OrderListComponent = (props) => {
  const { items, title, headerStyle } = props;
  const utilClasses = utilityClasses();
  const classes = useStyles();

  const buyNowHandler = () => {};

  return (
    <Card>
      <Card className={classes.cardStyle}>
        <>
          <CardHeader title={title} className={headerStyle} />

          <Divider />

          <CardContent>
            {items.map((orderItem) => (
              <OrderItemComponent
                product={orderItem.product}
                quantity={orderItem.quantity}
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
      </Card>
    </Card>
  );
};

export default OrderListComponent;

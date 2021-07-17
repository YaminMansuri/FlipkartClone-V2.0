import React from "react";
import { useHistory } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Divider,
  Button,
  makeStyles,
} from "@material-ui/core";

import utilityClasses from "../util/utilityClasses";
import CardItemComponent from "./CardItemComponent";

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

const CardListComponent = (props) => {
  const {
    items,
    title,
    deleteHandler,
    headerStyle,
    incrementQuantityHandler,
    decrementQuantityHandler,
  } = props;
  const classes = useStyles();
  const utilClasses = utilityClasses();

  const history = useHistory();

  const buyNowHandler = () => {
    history.push("/order");
  };

  return (
    <Card className={classes.cardStyle}>
      <CardHeader title={title} className={headerStyle} />

      <Divider />

      <CardContent>
        {items.map((item) => (
          <CardItemComponent
            key={item.product._id}
            product={item.product}
            quantity={item.quantity}
            deleteHandler={deleteHandler}
            incrementQuantityHandler={incrementQuantityHandler}
            decrementQuantityHandler={decrementQuantityHandler}
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
    </Card>
  );
};

export default CardListComponent;

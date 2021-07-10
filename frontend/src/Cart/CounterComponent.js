import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import { IconButton, TextField, makeStyles } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

import { AuthContext } from "../shared/context/AuthContext";
import {
  addToCartAction,
  deleteCartItemAction,
} from "../store/Actions/shopActions";

const useStyles = makeStyles((theme) => ({
  iconBtn: {
    borderColor: theme.palette.grey[400],
    border: "1px solid",
  },
  borderStyle: {
    border: "1px solid red",
  },
  input1: {
    height: 5,
    width: 20,
    textAlign: "center",
  },
  textFieldStyle: {
    margin: theme.spacing(0, 1),
  },
}));

const CounterComponent = (props) => {
  const { quantity, productId, className } = props;
  const classes = useStyles();
  const { userId } = useContext(AuthContext);
  const dispatch = useDispatch();

  const incrementQuantityHandler = () => {
    quantity >= 5
      ? console.log("We're sorry! Only 5 units allowed in each order")
      : dispatch(addToCartAction(userId, productId, 1));
  };

  const decrementQuantityHandler = () => {
    quantity > 1
      ? dispatch(addToCartAction(userId, productId, -1))
      : dispatch(deleteCartItemAction(userId, productId));
  };

  return (
    <div className={className}>
      <IconButton
        className={classes.iconBtn}
        size="small"
        onClick={decrementQuantityHandler}
      >
        <Remove fontSize="small" />
      </IconButton>
      <TextField
        variant="outlined"
        InputProps={{ classes: { input: classes.input1 } }}
        size="small"
        value={quantity}
        className={classes.textFieldStyle}
      />
      <IconButton
        className={classes.iconBtn}
        size="small"
        onClick={incrementQuantityHandler}
      >
        <Add fontSize="small" />
      </IconButton>
    </div>
  );
};

export default CounterComponent;

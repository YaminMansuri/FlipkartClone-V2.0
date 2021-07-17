import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import { IconButton, TextField, makeStyles } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

import { AuthContext } from "../shared/context/AuthContext";

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
  const {
    quantity,
    productId,
    className,
    incrementQuantityHandler,
    decrementQuantityHandler,
  } = props;
  const classes = useStyles();

  return (
    <div className={className}>
      <IconButton
        className={classes.iconBtn}
        size="small"
        onClick={() => decrementQuantityHandler(quantity, productId)}
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
        onClick={() => incrementQuantityHandler(quantity, productId)}
      >
        <Add fontSize="small" />
      </IconButton>
    </div>
  );
};

export default CounterComponent;

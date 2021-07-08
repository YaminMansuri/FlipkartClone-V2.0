import React, { useContext } from "react";

import { IconButton, TextField, makeStyles } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

import { AuthContext } from "../shared/context/AuthContext";
import {
  addToCartAction,
} from "../store/Actions/shopActions";
import { useDispatch } from "react-redux";

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

  const addToCartHandler = () => {
    dispatch(addToCartAction(userId, productId));
  };

  return (
    <div className={className}>
      <IconButton className={classes.iconBtn} size="small">
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
        onClick={addToCartHandler}
      >
        <Add fontSize="small" />
      </IconButton>
    </div>
  );
};

export default CounterComponent;

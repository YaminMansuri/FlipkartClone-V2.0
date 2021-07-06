import React from "react";

import { IconButton, TextField, makeStyles } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

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
  const { quantity } = props;
  const classes = useStyles();
  return (
    <div>
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
      <IconButton className={classes.iconBtn} size="small">
        <Add fontSize="small" />
      </IconButton>
    </div>
  );
};

export default CounterComponent;

import React from "react";

import { Button, makeStyles } from "@material-ui/core";
import utilityClasses from "../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "white",
    borderRadius: "0",
    padding: theme.spacing(1.8),
  },
}));

const ButtonComponent = (props) => {
  const { color, margin, icon } = props;
  const buttonStyles = useStyles();
  const utilClasses = utilityClasses();

  return (
    <Button
      variant="contained"
      className={`${buttonStyles.btn} ${utilClasses.flexOne} ${color} ${margin}`}
      startIcon={icon}
    >
      {props.children}
    </Button>
  );
};

export default ButtonComponent;

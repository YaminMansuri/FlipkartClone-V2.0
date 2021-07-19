import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import utilityClasses from "../util/utilityClasses";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    boxShadow: theme.shadows[1],
  },
  btnStyle: {
    backgroundColor: theme.palette.orange.main,
    color: "white",
    borderRadius: "0",
    padding: theme.spacing(1, 4.5),
    margin: theme.spacing(0, 2, 2, "auto"),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1.8, 10),
    },
  },
  container: {
    margin: theme.spacing(2, "auto"),
    [theme.breakpoints.up("md")]: {
      width: "85%",
    },
    overflow: "hidden",
  },
}));

const ConfirmOrderPage = () => {
  const classes = useStyles();
  const utilClasses = utilityClasses();

  const history = useHistory();

  const continueShoppingHandler = () => {
    history.push("/");
  };

  return (
    <Grid container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card className={classes.cardStyle}>
            <CardHeader title="Order Status" />
            <Divider />
            <CardContent>
              <Typography color="secondary" variant="h6">
                Your order has been successfully placed
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={continueShoppingHandler}
                className={`${classes.btnStyle} ${utilClasses.orange}`}
              >
                Continue Shopping
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ConfirmOrderPage;

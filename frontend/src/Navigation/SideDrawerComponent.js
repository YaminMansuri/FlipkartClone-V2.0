import React from "react";

import { makeStyles, SwipeableDrawer, Typography } from "@material-ui/core";
import { Person } from "@material-ui/icons";

import ListComponent from "./ListComponent";
import utilityClasses from "../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    width: "100%",
    backgroundColor: "#2874f0",
    height: theme.spacing(7),
  },
  center: {
    alignItems: "center",
    padding: theme.spacing(0, 2),
    color: theme.palette.primary.contrastText,
  },
  personIcon: {
    padding: theme.spacing(0, 1, 0, 0),
  },
}));

const SideDrawerComponent = (props) => {
  const { open, toggleDrawer } = props;
  const sideDrawerStyles = useStyles();
  const utilClasses = utilityClasses();

  return (
    <div>
      <SwipeableDrawer
        open={open}
        onOpen={() => toggleDrawer(true)}
        onClose={() => toggleDrawer(false)}
      >
        <div
          className={`${sideDrawerStyles.drawerHeader}
            ${sideDrawerStyles.center}
            ${utilClasses.displayFlex}`}
        >
          <Person className={sideDrawerStyles.personIcon} />
          <Typography>Yamin Mansuri</Typography>
        </div>

        <ListComponent />
      </SwipeableDrawer>
    </div>
  );
};

export default SideDrawerComponent;

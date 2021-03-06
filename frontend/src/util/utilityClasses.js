import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  displayFlex: {
    display: "flex",
  },
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  flexColumn: {
    flexDirection: "column",
  },
  spacing: {
    margin: theme.spacing(0.7, 0),
  },
  bold: {
    fontWeight: "bold",
  },
  semiBold: {
    fontWeight: 500,
  },
  marginAuto: {
    margin: "auto",
  },
  marginTwo: {
    margin: theme.spacing(2, 0),
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  desktopView: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  mobileView: {
    display: "flex",

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  linkStyle: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  strikeThroughText: {
    textDecoration: "line-through",
  },
  yellow: {
    backgroundColor: theme.palette.yellow.main,
    "&:hover": {
      backgroundColor: "#ffb339",
    },
  },
  orange: {
    backgroundColor: theme.palette.orange.main,
    "&:hover": {
      backgroundColor: "#ff7936",
    },
  },
}));

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
}));

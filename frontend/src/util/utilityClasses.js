import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  displayFlex: {
    display: "flex",
  },
  flex: {
    flex: 1.3,
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
}));

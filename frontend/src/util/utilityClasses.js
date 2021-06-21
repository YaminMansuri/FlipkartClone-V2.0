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
  justifyBetween: {
    justifyContent: "space-between",
  },
}));

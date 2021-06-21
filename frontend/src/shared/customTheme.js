import { createMuiTheme } from "@material-ui/core";

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#2874f0",
    },
    secondary: {
      main: "#388e3c",
      light: "#14be47",
    },
    yellow: {
      main: "#ff9f00",
    },
    orange: {
      main: "#fb641b",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },

  typography: {
    fontFamily: "Roboto",
  },

  overrides: {
    MuiButton: {
      textPrimary: {
        color: "white",
      },
    },
    MuiIcon: {
      colorPrimary: "white",
      color: "white",
    },
    MuiTypography: {
      colorTextPrimary: "white",
      colorPrimary: "white",
    },
    MuiCard: {
      root: {
        boxShadow:
          "1px 1px 10px rgb(212, 212, 212), -1px -1px 10px rgb(212, 212, 212)",
      },
    },
  },
});

export default customTheme;

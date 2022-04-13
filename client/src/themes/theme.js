import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
    },
    subtitle1: {
      fontSize: 14,
      color: "#B0B0B0",
      lineHeight: "19px",
      fontWeight: 400,
    },
    h1: {
      fontSize: 26,
      color: "#000",
      lineHeight: "40px",
      fontWeight: 600,
    },
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
        paddingBottom: 6,
        fontSize: 14,
        lineHeight: 19,
      },
    },
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" },
  },
});

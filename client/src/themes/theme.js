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
        fontWeight: "600",
        paddingBottom: 6,
        fontSize: 14,
        lineHeight: 19,
        paddingLeft: 5,
      },
      formControl: {
        "label + &": {
          marginTop: 21,
        },
      },
      underline: {
        "&:before": {
          borderBottom: "1px solid #D5DFEE",
        },

        "&:focus": {
          borderBottom: "2px solid #3A8DFF",
        },
      },
    },
    MuiFormLabel: {
      root: {
        marginLeft: 6,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "19px",
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: 0,
        marginBottom: 12,
      },
    },
    MuiInputBase: {
      input: {
        padding: "45px 0 7px",
      },
    },
    MuiInputAdornment: {
      marginLeft: 8,
      marginTop: 32,
    },
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" },
  },
});

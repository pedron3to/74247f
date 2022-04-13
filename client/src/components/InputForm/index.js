import React from "react";

import {
  FormControl,
  InputAdornment,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textField: {
    width: 380,
    paddingBottom: 0,
  },
  link: {
    textDecoration: "none",
    fontSize: 12,
    lineHeight: "16px",
    fontWeight: 600,
    display: "flex",
  },
}));

const InputForm = ({ label, name, type, error, hasForgot, inputProps }) => {
  const classes = useStyles();
  return (
    <FormControl margin='normal' required error={!!error}>
      <TextField
        inputProps={{ minLength: inputProps && inputProps }}
        InputProps={{
          endAdornment: type === "password" && hasForgot === true && (
            <InputAdornment position='end'>
              <Link href='/register' to='/register'>
                <p className={classes.link}>forgot?</p>
              </Link>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          shrink: false,
        }}
        className={classes.textField}
        aria-label={label}
        label={label}
        name={name}
        type={type}
        required
      />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default InputForm;

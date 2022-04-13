import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  primary: {
    width: 160,
    height: 56,
    borderRadius: 3,
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 700,
    background: "#3A8DFF",
    color: "#fff",
  },

  secondaryLogin: {
    width: 170,
    height: 54,
    borderRadius: 5,
    fontSize: 14,
    lineHeight: "19.07px",
    fontWeight: 600,
    color: "#3A8DFF",
    background: "#fff",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
  },
  secondarySignup: {
    width: 140,
    height: 54,
    borderRadius: 5,
    fontSize: 14,
    lineHeight: "19.07px",
    fontWeight: 600,
    color: "#3A8DFF",
    background: "#fff",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
  },
}));

const Button = ({ title, variant, type, onClick }) => {
  const classes = useStyles();

  return (
    <button
      className={`
      ${variant === "primary" && classes.primary}  ${
        variant === "secondaryLogin" && classes.secondaryLogin
      } ${variant === "secondarySignup" && classes.secondarySignup}`}
      type={type}
      onClick={onClick}
      aria-label={title}
    >
      {title}
    </button>
  );
};

export default Button;

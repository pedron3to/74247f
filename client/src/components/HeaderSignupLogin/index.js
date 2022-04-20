import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "../Button";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: 420,
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "fit-content",
    },
  },
  createAccountWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  subtitle1: {
    marginRight: 30,
  },
  loginFormWrapper: {
    width: 380,
    marginTop: "20vh",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "fit-content",
      padding: 16,
    },
  },
  buttonWrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
}));

const HeaderSignupLogin = ({ title, variantButton, titleButton, href }) => {
  const classes = useStyles();

  return (
    <Box className={classes.createAccountWrapper}>
      <Typography className={classes.subtitle1} variant='subtitle1'>
        {title}
      </Typography>
      <Link href={href} to={href}>
        <Button variant={variantButton} title={titleButton} />
      </Link>
    </Box>
  );
};

export default HeaderSignupLogin;

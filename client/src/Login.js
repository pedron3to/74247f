import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";

import Layout from "./components/Layout";
import Button from "./components/Button";

import { makeStyles } from "@material-ui/core/styles";
import InputForm from "./components/InputForm";

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

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Layout>
      <Box className={classes.contentContainer}>
        <Box className={classes.createAccountWrapper}>
          <Typography className={classes.subtitle1} variant='subtitle1'>
            Don’t have an account?
          </Typography>
          <Link href='/register' to='/register'>
            <Button variant='secondary' title='Create account' />
          </Link>
        </Box>
        <form onSubmit={handleLogin}>
          <Box className={classes.loginFormWrapper}>
            <Typography variant='h1'>Welcome back!</Typography>

            <InputForm label='E-mail address' name='email' type='email' />

            <InputForm
              label='Password'
              name='password'
              type='password'
              hasForgot
            />

            <Box className={classes.buttonWrapper}>
              <Button type='primary' variant='primary' title='Login' />
            </Box>
          </Box>
        </form>
      </Box>
    </Layout>
  );
};

export default Login;

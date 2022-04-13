import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

import Layout from "./components/Layout";
import Button from "./components/Button";
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
  signUpFormWrapper: {
    width: 380,
    marginTop: "10vh",
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
    marginTop: 40,
  },
}));

const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = useStyles();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Layout>
      <Box className={classes.contentContainer}>
        <Box className={classes.createAccountWrapper}>
          <Typography className={classes.subtitle1} variant='subtitle1'>
            Need to log in?
          </Typography>
          <Link href='/login' to='/login'>
            <Button variant='secondary' title='Login' />
          </Link>
        </Box>
        <form onSubmit={handleRegister}>
          <Box className={classes.signUpFormWrapper}>
            <Typography variant='h1'>Create an account.</Typography>

            <InputForm label='Username' name='username' type='text' />

            <InputForm label='E-mail address' name='email' type='email' />

            <InputForm
              label='Password'
              name='password'
              type='password'
              inputProps={{ minLength: 6 }}
              error={formErrorMessage.confirmPassword}
            />

            <InputForm
              label='Confirm Password'
              name='confirmPassword'
              type='password'
              inputProps={{ minLength: 6 }}
              error={formErrorMessage.confirmPassword}
            />

            <Box className={classes.buttonWrapper}>
              <Button type='primary' variant='primary' title='Create' />
            </Box>
          </Box>
        </form>
      </Box>
    </Layout>
  );
};

export default Signup;

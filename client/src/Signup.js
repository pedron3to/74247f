import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Button from "./components/Button";
import ButtonWrapper from "./components/ButtonWrapper";
import Form from "./components/Form";
import HeaderSignupLogin from "./components/HeaderSignupLogin";
import InputForm from "./components/InputForm";
import Layout from "./components/Layout";

const Signup = ({ user, register }) => {
  const history = useHistory();

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
      <HeaderSignupLogin
        title='Already have an account?'
        href='/login'
        titleButton='Login'
        variantButton='secondarySignup'
      />
      <Form
        handleSubmit={handleRegister}
        title='Create an account.'
        marginTop={10}
      >
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
        <ButtonWrapper marginTop={25}>
          <Button type='primary' variant='primary' title='Create' />
        </ButtonWrapper>
      </Form>
    </Layout>
  );
};

export default Signup;

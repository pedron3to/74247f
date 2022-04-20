import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Button from './components/Button';
import ButtonWrapper from './components/ButtonWrapper';
import Form from './components/Form';
import HeaderSignupLogin from './components/HeaderSignupLogin';
import InputForm from './components/InputForm';
import Layout from './components/Layout';

const Login = ({ user, login }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Layout>
      <HeaderSignupLogin
        title="Don't have an account?"
        href='/register'
        titleButton='Create account'
        variantButton='secondaryLogin'
      />
      <Form handleSubmit={handleLogin} title='Welcome back!'>
        <InputForm label='Username' name='username' type='text' />
        <InputForm label='Password' name='password' type='password' hasForgot />
        <ButtonWrapper marginTop={45}>
          <Button type='primary' variant='primary' title='Login' />
        </ButtonWrapper>
      </Form>
    </Layout>
  );
};

export default Login;

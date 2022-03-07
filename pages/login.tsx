import React from 'react';
import { LoginForm } from '../features/authentication';

export const Login = () => {
  React.useEffect(() => {
    console.log('hello world');
  });

  return <LoginForm />;
};

export default Login;

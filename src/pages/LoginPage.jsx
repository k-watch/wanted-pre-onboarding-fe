import React from 'react';
import styled from 'styled-components';
import Login from '../components/Login';

const Wrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

const LoginPage = () => {
  return (
    <Wrap>
      <Login />
    </Wrap>
  );
};

export default LoginPage;

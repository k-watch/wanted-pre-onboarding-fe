import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Login from '../components/login/Login';

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
  const [user, setUser] = useState(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인 상태라면 메인 페이지로
    if (user) navigate('/');
  }, []);

  return <Wrap>{!user && <Login />}</Wrap>;
};

export default LoginPage;

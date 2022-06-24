import React from 'react';
import styled from 'styled-components';
import useLogin from './useLogin';

const Wrap = styled.div`
  width: 340px;
  padding: 0 30px;
  background-color: white;
  text-align: center;

  img {
    margin: 40px 0;
  }
`;

const InputStyle = styled.input`
  width: 100%;
  padding: 9px 0 7px 8px;
  border: 1px solid;
  border-color: ${(props) => (props.error ? 'red' : '#dbdbdb')};
  border-radius: 4px;
  background-color: #fafafa;
  font-size: 1rem;

  & + & {
    margin-top: 10px;
  }

  &:focus {
    border: 1px solid black;
  }
`;

const ButtonStyle = styled.button`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 100px;
  padding: 5px 9px;
  border-radius: 4px;
  background-color: ${(props) => (props.error ? '#0095f6' : '#7cc3f3')};
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

function Login() {
  const { emailInputRef, form, error, onChange, onSubmit } = useLogin();

  return (
    <Wrap>
      <img src="/logo.png" alt="logo" />
      <form onSubmit={onSubmit}>
        <InputStyle
          autoComplete="email"
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={form.email}
          error={!error.email}
          ref={emailInputRef}
        />
        <InputStyle
          autoComplete="password"
          name="password"
          placeholder="비밀번호"
          onChange={onChange}
          value={form.password}
          error={!error.password}
        />
        <ButtonStyle
          disabled={!(error.email && error.password)}
          error={error.email && error.password}
        >
          로그인
        </ButtonStyle>
      </form>
    </Wrap>
  );
}

export default Login;

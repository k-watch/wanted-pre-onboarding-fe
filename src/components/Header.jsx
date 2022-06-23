import React from 'react';
import styled from 'styled-components';
import { MdLogout } from 'react-icons/md';
import useHeader from './useHeader';
import useResponsive from '../common/useResponsive';

const Wrap = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 10px calc(15% - 100px);
  background-color: white;

  button {
    height: 30px;
    background-color: white;
    color: black;
    font-size: 1.4375rem;
  }

  @media screen and (max-width: 420px) {
    padding: 10px;
  }
`;

const InputStyle = styled.input`
  width: 200px;
  padding: 9px 0 7px 8px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fafafa;
  font-size: 1rem;

  &:focus {
    border: 1px solid black;
  }
`;

function Header() {
  const { onClick } = useHeader();
  const { mobile } = useResponsive();

  return (
    <Wrap>
      <img src="/logo.png" alt="logo" />
      {!mobile && <InputStyle placeholder="검색" />}
      <button onClick={onClick}>
        <MdLogout />
      </button>
    </Wrap>
  );
}

export default Header;

import React from 'react';
import styled from 'styled-components';
import { IoMdHeartEmpty, IoLogoInstagram } from 'react-icons/io';
import { MdLogout } from 'react-icons/md';
import useHeader from './useHeader';
import useResponsive from '../../modules/hook/useResponsive';

const Wrap = styled.ul`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 10px calc(15% - 100px);
  background-color: white;

  img {
    width: 100%;
    height: 100%;
  }

  > * {
    &:last-of-type {
      font-size: 1.4375rem;

      svg {
        margin-left: 6px;
      }

      button {
        height: 30px;
        margin-left: 0;
        padding: 0;
        background-color: white;
        font-size: 1.4375rem;
        color: black;
      }
    }
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
      <li>
        <img src="/logo.png" alt="logo" />
      </li>
      <li>{!mobile && <InputStyle placeholder="검색" />}</li>
      <li>
        <IoMdHeartEmpty />
        <IoLogoInstagram />
        <button onClick={onClick}>
          <MdLogout />
        </button>
      </li>
    </Wrap>
  );
}

export default Header;

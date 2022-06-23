import React from 'react';
import PreAssignmentGuide from './pages/PreAssignmentGuide';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import styled from 'styled-components';

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

function App() {
  return (
    <Wrap>
      <Routes>
        <Route element={<LoginPage />} path="/" />
        <Route component={PreAssignmentGuide} path="/intro" />
      </Routes>
    </Wrap>
  );
}

export default App;

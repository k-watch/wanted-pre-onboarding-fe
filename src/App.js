import React from 'react';
import styled from 'styled-components';
import PreAssignmentGuide from './pages/PreAssignmentGuide';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

const Wrap = styled.div`
  background-color: #fafafa;
`;

function App() {
  return (
    <Wrap>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<MainPage />} path="/" />
        <Route component={PreAssignmentGuide} path="/intro" />
      </Routes>
    </Wrap>
  );
}

export default App;

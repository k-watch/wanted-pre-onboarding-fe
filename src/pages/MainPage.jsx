import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Feeds from '../components/feeds/Feeds';

function MainPage() {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    // 비로그인 상태라면 로그인 페이지로
    if (!user) navigate('/login');
  }, []);

  return (
    <>
      {user && (
        <div>
          <Header />
          <Feeds />
        </div>
      )}
    </>
  );
}

export default MainPage;

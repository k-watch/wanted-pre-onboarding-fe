import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function useHeader() {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    // 로컬스토리지 정보 삭제 후 로그인 페이지 이동
    try {
      localStorage.removeItem('user');
    } catch (e) {
      console.log('localStorage is not working');
    }
    navigate('/login');
  }, []);

  return { onClick };
}

export default useHeader;

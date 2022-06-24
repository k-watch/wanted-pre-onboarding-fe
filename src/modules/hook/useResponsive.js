import { useEffect, useState } from 'react';

function useResponsive() {
  const [mobile, setMobile] = useState(window.innerWidth < 420 ? true : false);

  const screenChange = (e) => {
    setMobile(e.matches);
  };

  useEffect(() => {
    let screen = window.matchMedia('screen and (max-width: 420px)');
    screen.addEventListener('change', screenChange);

    return () => screen.removeEventListener('change', screenChange);
  }, []);

  return { mobile };
}

export default useResponsive;

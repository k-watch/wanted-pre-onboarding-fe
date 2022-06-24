import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 회원가입 데이터
const registerInfo = [
  { email: 'abcd@abcd.com', password: '123456@A', name: '원티드' },
];

function useLogin() {
  const emailInputRef = useRef();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // 마운트 후 이메일 입력창에 포커스
    emailInputRef.current.focus();
  }, []);

  function checkValidation(value, name) {
    let reg = null;

    if (name === 'email') {
      // 이메일 조건: @, . 포함
      reg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    } else if (name === 'password') {
      // 비밀번호 조건: 대문자, 숫자, 특수문자 포함 8자리 이상
      reg = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[~!@#$%^&*()_+`-]).{8,}$/;
    }

    if (reg !== null) setError({ ...error, [name]: reg.test(value) });
  }

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;

      setForm({ ...form, [name]: value });
      checkValidation(value, name);
    },
    [form, error]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      for (const info of registerInfo) {
        // 입력정보와 등록된 회원정보가 같다면
        // 로컬스토리지 저장 후 메인 페이지 이동
        if (info.email === form.email && info.password === form.password) {
          try {
            localStorage.setItem('user', JSON.stringify(info));
          } catch (e) {
            console.log('localStorage is not working');
          }
          navigate('/');
          break;
        }
      }
    },
    [form]
  );

  return { emailInputRef, form, error, onChange, onSubmit };
}

export default useLogin;

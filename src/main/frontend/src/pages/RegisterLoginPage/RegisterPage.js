import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const [account, setAccount] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdCheck, setPwdCheck] = useState('');
    const [requestResult, setRequestResult] = useState('');

    const navigate = useNavigate();
    const emailInput = useRef();
    const pwdInput = useRef();
    const pwdCheckInput = useRef();

    const onChangeAccount = (e) => {
        setAccount(e.target.value);
    }
    
    const onChangePwd = (e) => {
        setPwd(e.target.value);
    }

    const onChangePwdCheck = (e) => {
        setPwdCheck(e.target.value);
    }

    const signUpHandler = () => {
        if(account.length < 1){
            emailInput.current.focus();
            return;
        }
        if (pwd.length < 1) {
            pwdInput.current.focus();
            return;
        }
        if (pwdCheck.length < 1){
            pwdCheckInput.current.focus();
            return;
        }

        const data = {
            'userEmail' : account,
            'userPassword' : pwd,
        }

        axios.post('http://localhost:8080/register/auth/signUp', data)
        .then((response) => {
            if(response.data.message === 'Email exists'){
                alert('이미 이메일이 있습니다.')
                return;
            }

            if (response.data.message === 'password does not matched') {
                alert('비밀번호가 일치하지 않습니다')
                return;
            }
            alert('회원가입 성공!')
            setRequestResult('success')
            navigate('/')
        })
        .catch((error) => {
            setRequestResult('failed')
        })
    }

  return (
    <div className='backgroundImage'>
        <p className='register_p'>회원가입</p>
        <div className='registerform'>
            <input
                ref={emailInput}
                onChange={onChangeAccount}
                className='getEmail'
                type='text'
                placeholder='이메일을 입력하세요'
            />
            <input
                ref={pwdInput}
                onChange={onChangePwd}
                className='getPassword'
                type='password'
                placeholder='비밀번호를 입력하세요'
            />
            <input
                ref={pwdCheckInput}
                onChange={onChangePwdCheck}
                className='getPasswordCheck'
                type='password'
                placeholder='비밀번호 확인'
            />
            <button
                className='registerfin_btn'
                onClick={signUpHandler}
            >
                가입하기
            </button>
        </div>
    </div>
  )
}

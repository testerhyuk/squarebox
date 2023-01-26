import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../Stores';
import './RegisterLogin.css'

export default function LoginPage(props) {
    const navigate = useNavigate();
    const [account, setAccount] = useState('');
    const [pwd, setPwd] = useState('');
    const emailInput = useRef();
    const pwdInput = useRef();
    const [cookies, setCookies] = useCookies();
    const {user, setUser} = useUserStore();

    const signInHandler = () => {
        if(account.length === 0) {
            emailInput.current.focus();
            return;
        }

        if(pwd.length === 0) {
            pwdInput.current.focus();
            return;
        }

        const data = {
            'userEmail' : account,
            'userPassword' : pwd,
        }

        axios
            .post("http://localhost:8080/register/auth/signIn", data)
            .then((response) => {
                const responseData = response.data;
                
                if (!responseData.result) {
                    alert('아이디와 비밀번호를 확인해주세요.')
                    return;
                }
                
                const { token, exprTime, user } = responseData.data;
                const expires = new Date();
                expires.setMilliseconds(expires.getMilliseconds() + exprTime);

                setCookies('token', token, {expires});
                setUser(user);

                if (cookies.token) {
                    props.setAuth(true)
                    navigate('/browse')
                }
            })
            .catch((error) => {
                alert("로그인에 실패했습니다.");
            });
    }

  return (
    <div className='login_page'>
    <div className='backgroundImage'>
        <div className='login'>
            <p className='service_intro'>
                최신 영화와 인기 영화를
            </p>
            <p className='service_detail'>
                소개받고 예고편을 확인하세요! 서비스를 이용하려면 이메일 주소를 입력하세요.
            </p>
        </div>
        <div>
            <input
                ref={emailInput}
                className='getEmail'
                type='text'
                placeholder='이메일을 입력하세요'
                onChange={(e) => setAccount(e.target.value)}
            />
            <input
                ref={pwdInput}
                className='getPassword'
                type='password'
                placeholder='비밀번호를 입력하세요'
                onChange={(e) => setPwd(e.target.value)}
            />
            <button
                className='login_btn'
                onClick={signInHandler}
            >
                로그인
            </button>
            <button
                className='register_btn'
                onClick={() => navigate('register')}
            >
                회원가입
            </button>
        </div>
    </div>
    </div>
  )
}

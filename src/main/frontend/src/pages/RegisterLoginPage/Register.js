import React from 'react'
import { useLocation } from 'react-router-dom';
import './promotion.css'

export default function Register() {
    const location = useLocation();
    const email = location.state
    console.log(email)
  return (
    <div className='register'>
        <h1 className='register_description'>
            비밀번호를 설정해 멤버십을 시작하세요.
        </h1>
        <div className='emailinput'>
            <input
                className='emailbox'
                type='textbox'
                value={email}
            />
        </div>
        <div>
            <input
                className='pwbox'
                type='password'
                placeholder='비밀번호를 입력하세요'
            />
        </div>
        <div className='btninput'>
            <button className='register_btn'>
                시작하기
            </button>
        </div>
    </div>
  )
}

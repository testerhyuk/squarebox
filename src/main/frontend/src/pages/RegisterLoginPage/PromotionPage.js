import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './promotion.css'

export default function PromotionPage() {
    const navigate = useNavigate();
    const [account, setAccount] = useState('');

    const onChangeAccount = (e) => {
        setAccount(e.target.value);
    }
    const toRegisterForm = () => {
        navigate('./register', {
            state: account
        })
    }

  return (
    <div className='backgroundImage'>
        <button className='login_btn'>
                로그인
            </button>
        <div className='promotion'>
            <p className='promotion_page'>
                영화를 무제한으로
            </p>
            <p className='promotion_detail'>
                시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
            </p>
        </div>
        <input
            onChange={onChangeAccount}
            className='getEmail'
            type='text'
            placeholder='이메일을 입력하세요'
        />
        <button
            onClick={toRegisterForm}
            className='register_button'>
            시작하기
        </button>
    </div>
  )
}

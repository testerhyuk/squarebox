import React, { useEffect, useRef, useState } from 'react'
import squarebox from '../images/squarebox.png';
import myinfo from '../images/myinfo.png';
import search from '../images/search.png';
import './Nav.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchHiddenBar, setSearchHiddenBar] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const wrapperRef = useRef(null);
    const navigate = useNavigate();
    
    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            handleSearch();
        }
    }
    
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleSearch = () => {
        setSearchHiddenBar(!searchHiddenBar)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setShow(true);
            }else {
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener('scroll', () => {});
        };
    }, []);

    const handleChange = (e) => {
        if (e.target.value.length === 0){
            setSearchValue(e.target.value);
            navigate('/');
            
        }else {
            setSearchValue(e.target.value);
            navigate(`/search?q=${e.target.value}`);
        }
    }

  return (
    <nav className={`nav ${show && 'nav_black'}`}>
        <img 
            alt='squarebox logo'
            src={squarebox}
            className='nav_logo'
            onClick={() => (window.location.href = "/")}
        />
        { searchHiddenBar ? (
            <img 
                alt='search logo'
                src={search}
                className='nav_search'
                onClick={handleSearch}
            />
        ) : (
            <SearchBar>
                <InputBar 
                    placeholder='영화 제목을 입력하세요' 
                    ref={wrapperRef} 
                    value={searchValue}
                    onChange={handleChange}
                    type='text'
                    size='30'
                />
            </SearchBar>
        )}
        
        <img 
            alt='user logo'
            src={myinfo}
            className='nav_avatar'
        />
    </nav>
  )
}

const SearchBar = styled.div`
    position: fixed;
    right: 180px;
    width: 150px;
    object-fit: contain;
`

const InputBar = styled.input`
    height: 30px;
    background-color: black;
    border: solid 1px white;
    opacity: 0.8;
    color: white;

    ::placeholder{
        padding: 5px;
    }
`
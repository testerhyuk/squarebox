import React, { useEffect, useRef, useState } from 'react'
import squarebox from '../images/squarebox.png';
import logout from '../images/logout.png';
import search from '../images/search.png';
import './Nav.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useOnClickOutside from '../hooks/useOnClickOutside'

export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchHiddenBar, setSearchHiddenBar] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useOnClickOutside(inputRef, () => {setSearchHiddenBar(searchHiddenBar)});

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
            navigate('/browse');
            
        }else {
            setSearchValue(e.target.value);
            navigate(`/browse/search?q=${e.target.value}`);
        }
    }

  return (
    <nav className={`nav ${show && 'nav_black'}`}>
        <img 
            alt='squarebox logo'
            src={squarebox}
            className='nav_logo'
            onClick={() => navigate('/browse')}
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
                    ref={inputRef} 
                    value={searchValue}
                    onChange={handleChange}
                    type='text'
                    size='30'
                />
            </SearchBar>
        )}
        
        <img 
            alt='user logo'
            src={logout}
            className='nav_avatar'
            onClick={() => navigate('/')}
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
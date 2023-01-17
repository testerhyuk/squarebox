import React, { useEffect, useState } from 'react'
import squarebox from '../images/squarebox.png';
import myinfo from '../images/myinfo.png';
import './Nav.css';

export default function Nav() {
    const [show, setShow] = useState(false);

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

  return (
    <nav className={`nav ${show && 'nav_black'}`}>
        <img 
            alt='squarebox logo'
            src={squarebox}
            className='nav_logo'
            onClick={() => window.location.reload()}
        />
        <img 
            alt='user logo'
            src={myinfo}
            className='nav_avatar'
        />
    </nav>
  )
}

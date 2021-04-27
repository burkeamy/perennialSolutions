import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import './menuIcon.styles.css';

const MenuIcon = () => {

    const [ menuHide, setMenuHide ] = useState('mobile-hidden');
    

    const changeView = () => {
        if (menuHide === 'mobile-hidden') {
       setMenuHide('mobile-options')
        } else {
            setMenuHide('mobile-hidden')
        }
    }

    return (
        <div className='mobile-container'>
            <button className="container" onClick={changeView}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </button>
            <nav className={ menuHide }>
                <Link className='mobile-option' to='/'>home</Link>
                <Link className='mobile-option' to='/portfolio'> portfolio</Link>
                <Link className='mobile-option' to='/aboutus'> about</Link>
                <Link className='mobile-option' to='/contact'> contact</Link>
            </nav>  
        </div>
    )
};

export default MenuIcon;
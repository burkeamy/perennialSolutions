import React from 'react';
import './top-nav.styles.css';
import logo from '../../images/oneMum.png'
import { Link } from 'react-router-dom';

const TopNav = () => {

    return (
        <div className = 'top-nav'>
            <Link to='/'><img className ='logoImg' alt='flower logo' src={logo} /></Link>
            <h1>Perennial Solutions Online</h1>

                <nav className='options'>
                        <Link className='option' to='/'>home |</Link>
                        <Link className='option' to='/portfolio'> portfolio |</Link>
                        <Link className='option' to='/aboutus'> about us |</Link>
                        <Link className='option' to='/contact'> contact</Link>
                </nav>
        </div>
    )
};

export default TopNav;
    import React from 'react';
import './top-nav.styles.css';
import Icon from '../../components/icon/icon.component';
import { Link } from 'react-router-dom';
import MenuIcon from '../../components/menuIcon/menuIcon.component';

const TopNav = () => {

    return (
        <div className = 'top-nav'>
            <Link to='/' aria-label='click to return to the homepage'> <Icon/></Link>
            <h1>Perennial Solutions Online</h1>
            <MenuIcon />
            <nav className='options'>
                    <Link className='option' to='/'>home |</Link>
                    <Link className='option' to='/portfolio'> portfolio |</Link>
                    <Link className='option' to='/aboutus'> about us |</Link>
                    <Link className='option' to='/contact'> contact |</Link>
                    <Link className='option' to='/blog'> blog</Link>
            </nav>
        </div>
    )
};

export default TopNav;
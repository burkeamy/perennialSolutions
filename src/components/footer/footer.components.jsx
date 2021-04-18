import React from 'react';
import './footer.styles.css'
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <p></p>
        <div>
            <Link className='footerOption' to='/'>home |</Link>
            <Link className='footerOption' to='/portfolio'> portfolio |</Link>
            <Link className='footerOption' to='/about'> about us |</Link>
            <Link className='footerOption' to='/contact'> contact</Link>
        </div>
    </footer>
);

export default Footer;
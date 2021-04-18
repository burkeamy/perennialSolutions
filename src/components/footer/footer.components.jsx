import React from 'react';
import './footer.styles.css'
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <Link className='footerOption' to='/'>home |</Link>
        <Link className='footerOption' to='/portfolio'> portfolio |</Link>
        <Link className='footerOption' to='/about'> about us |</Link>
        <Link className='footerOption' to='/faq'> faq |</Link>
        <Link className='footerOption' to='/contact'> contact</Link>
    </footer>
);

export default Footer;
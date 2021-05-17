import React from 'react';
import { Link } from 'react-router-dom';

import './introBox.styles.css'

const IntroBox = () => {
    return (
    <div>
        <div className='parallax' />
            <header className='bigText'>
                
                <h2>Welcome to Perennial Solutions Online</h2>
                <h4>Plant seeds online and watch your business grow for years to come</h4>
                <p className='intro-p'>web sites and digital media specialy grown for the green industry</p>
                <Link className='homepage-link' to='/contact'> Learn More!</Link>
               
            </header>
        <div className='parallax' />
    </div>
    );
};

export default IntroBox;
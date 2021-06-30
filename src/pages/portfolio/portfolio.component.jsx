import React from 'react';
import AlyssasGarden from '../../images/alyssasGardenWebsite.png'
import './portfolio.styles.css';

const Portfolio = () => {
    return (
        <div>
            <h3>What are we working on now?</h3>
            <section className='portfolio-section'>
                <img className='screen-shot'src= {AlyssasGarden } alt ='screenshot of current project' />
                <p>Our current project is for a small landscaping company that is just starting. 
                    This webiste is not complete yet, but feel free to check it out. 
                </p>
                <a href='https://alyssasgardennc.com/' rel="noreferrer" target='_blank'>Check it out!</a>
            </section>
        </div>
    )
};

export default Portfolio
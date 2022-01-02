import React from 'react';
import AlyssasGarden from '../../images/alyssasGardenWebsite.png'
import './portfolio.styles.css';

const Portfolio = () => {
    return (
        <div>
            <h3>What are we working on now?</h3>
            <section className='portfolio-section'>
                <h4>Arbor Irrigation and Landscape</h4>
                <p>This page is potentially for a re-brand of sorts
                </p>
                <a href='https://arbor-irrigationand-landscape.vercel.app/' rel="noreferrer" target='_blank'>Check it out!</a>
            </section>
            <section>
                <h4>Other projects</h4>
                    <a href='https://alyssasgardennc.com/' rel="noreferrer" target='_blank'>
                        <img className='screen-shot'src= {AlyssasGarden } alt ='screenshot of current project' />
                    </a>
            </section>
        </div>
    )
};

export default Portfolio
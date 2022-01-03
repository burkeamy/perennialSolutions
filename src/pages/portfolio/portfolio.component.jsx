import React from 'react';
import AlyssasGarden from '../../images/alyssasGardenWebsite.png'
import './portfolio.styles.css';
import Arbor from '../../images/arborWebsite.png'
import bfp from '../../images/bfpWebsite.png'

const Portfolio = () => {
    return (
        <div>
            <h3>What are we working on now?</h3>
            <section className='main-portfolio-section'>
                <h4>Arbor Irrigation and Landscape</h4>
                <p>This page is potentially for a re-brand of sorts. 
                </p>
                <a href='https://arbor-irrigationand-landscape.vercel.app/' rel="noreferrer" target='_blank'>
                <img className='screen-shot'src= { Arbor } alt ='screenshot of current project' />
                Check it out!</a>
                <p>This site is far from finished. It is built using Next.js and is all custom designed</p>
            </section>
            <h4 className='small-title'>Other projects</h4>

            <div className='other-projects'>
                    <div >
                        <h4>Alyssa's Garden, a small landscaping company</h4>
                        <a href='https://alyssasgardennc.com/' rel="noreferrer" target='_blank'>
                            <img className='screen-shot'src= {AlyssasGarden } alt ='screenshot of current project' />
                        </a>
                        <p>This site was built using React.js and is all custom including the logo</p>
                    </div>
                    <div >
                        <h4>Bynum Front Porch</h4>
                        <a href='https://www.bynumfrontporch.org/' rel="noreferrer" target='_blank'>
                            <img className='screen-shot' src= {bfp} alt ='screenshot of current project' />
                        </a>
                        <p>Monthly site updates using squarespace</p>
                    </div>
            </div>
        </div>
    )
};

export default Portfolio
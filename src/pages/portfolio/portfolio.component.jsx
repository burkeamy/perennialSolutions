import React from 'react';
import AlyssasGarden from '../../images/alyssasGardenWebsite.png'
import './portfolio.styles.css';
import Arbor from '../../images/arborWebsite.png'
import OfficialArbor from '../../images/arborlandscapewebsite.jpg'
import bfp from '../../images/bfpWebsite.png'

const Portfolio = () => {
    return (
        <div>
            <h3>What are we working on now?</h3>
            <section className='main-portfolio-section'>
                <h4>Arbor Irrigation and Landscape</h4>
                <p>This page was created using WordPress so the client can update the content easily 
                </p>
                <a href='https://arborlandscape.com/' rel="noreferrer" target='_blank'>
                <img className='screen-shot'src= { OfficialArbor } alt ='screenshot of current website project and link to arborlandscape.com' />
                Check it out!</a>
                <p>This site is a work in progress</p>
            </section>
            <h4 className='small-title'>Other projects</h4>

            <div className='other-projects'>
                    <div >
                        <h4>Alyssa's Garden, a small landscaping company</h4>
                        <a href='https://alyssasgardennc.com/' rel="noreferrer" target='_blank'>
                            <img className='screen-shot'src= {AlyssasGarden } alt ='screenshot and link to alyssasgardennc.com' />
                        </a>
                        <p>This site was built using React.js and is all custom including the logo</p>
                    </div>
                    <div >
                        <h4>Bynum Front Porch</h4>
                        <a href='https://www.bynumfrontporch.org/' rel="noreferrer" target='_blank'>
                            <img className='screen-shot' src= {bfp} alt ='screenshot and link to bynumfrontporch.org' />
                        </a>
                        <p>Monthly site updates using squarespace</p>
                    </div>
                    <div>
                        <h4>Arbor Irrigation and Landscape</h4>
                        <p>This is a prototype created using Next.js. 
                        </p>
                        <a href='https://arbor-irrigationand-landscape.vercel.app/' rel="noreferrer" target='_blank'>
                            <img className='screen-shot'src= { Arbor } alt ='screenshot and link to a prototype built with next JS' />
                       </a>
                        
                    </div>
            </div>
        </div>
    )
};

export default Portfolio
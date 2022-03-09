import React from 'react';
import './blog.styles.css';

const LighthouseTest = () => {
  return (
    <div class= 'blogPostsContainer'>
        <div classname="side-space"></div>
        <div classname="main-blog-area">
            <h2>How and why to use Google Lighthouse Test</h2>
            <p>Fist thing, what is Google Lighthouse test anyway? It is a free test for any website 
                that will quickly give you a score for things like performance, best practices, SEO, and accessibility.
            </p>
            <p>Why should you use this test? It is an easy way to see where your website stands. Each score has a breakdown of 
                things that don’t score well. This could be used as a starting point if you don’t know what to fix on a website. 
            </p>
            <p>How do you use Google Lighthouse test? Here is a step by step guide. It can only be done  on a computer of something 
                with access to a mouse.
            </p>
            <ul>
                <li>Right click on the website</li>
                <li>Scroll down to inspect and click</li>
                <li>Find the three arrows on the top right corner and click</li>
                <img className="lighthouseTestimg" src='https://res.cloudinary.com/perennial-solutions-online/image/upload/v1646177884/lighthouseTestStep2_qhv2wm.png' width="200px" alt="screenshot of top right corner to show arrows for dropdown menu that contains the lighthouse test"/>
                <li>Click on Lighthouse</li>
                <li>Choose which options you want to test for. You can also choose mobile or desktop. I recommend running one and then the other. 
                    Most websites don"’"t need the progressive web app option, so leave that blank.</li>
                <img className="lighthouseTestimg"src= "https://res.cloudinary.com/perennial-solutions-online/image/upload/v1646177952/lighthouseTestStep3_rcyggi.png" width="300px"alt="screenshot with performance, best practices, SEO, and accessibility selected for the test" />
                <li>Click Generate report. This may take a few seconds.</li>
                <li> You will get scores for each category you tested. If you scroll down, it will give you suggestions on how to fix things. For example, 
                    to improve the accessibility score I need to have more of a difference between text and background in the footer.</li>
                <img className="lighthouseTestimg"src="https://res.cloudinary.com/perennial-solutions-online/image/upload/v1646178117/lighthouseTestStep4_ryeppe.png" width="450px" height="200px"alt="screen shot to show what lighthouse scores look like"/> 
            </ul>
            <p>This web tip may not directly make your website better, but it will give you an idea of where it stands.</p>
        </div>
        <div classname="side-space"></div>
    </div>
  )
}

export default LighthouseTest
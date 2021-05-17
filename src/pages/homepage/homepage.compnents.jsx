import React from 'react';
import IntroBox from '../../components/introBox/introBox.component';
import './homepage.styles.css';



const HomePage = () => (
    <div className ='homepage'>
        <IntroBox/>
        <article className='homepageContainer'>
            <h2>What is Perennial Solutions Online</h2>
            <p className='open-p'>Perennial Solutions Online builds, updates, and redesigns websites. 
                We have a soft spot for folks in the green industry but will also 
                help folks with brown thumbs grow businesses. At Perennial Solutions
                Online, we love to build aesthetically pleasing websites that work 
                on a wide variety of devices. We also strive to make all sites 
                accessible to as many people as possible. Contact us for more 
                information
            </p>
            <h3>Services Offered</h3>
                <div className='services-container'>
                    <section className='left-item'>
                        <h4>Website Design</h4>
                        <p>For those that don't have a website at all and need to start from scratch</p>
                    </section>
                    <section className='center-item'>
                        <h4>Website Re-Design</h4>
                        <p>For those that have a website, but it needs to be updated or improved</p>
                    </section>
                    <section className='right-item'>
                        <h4>Responsive web-design</h4>
                        <p>We will take an existing website and make it more responsive to screen size</p>
                    </section>
                    <section className='left-item'>
                        <h4>Branding</h4>
                        <p>In a nutshell, this inclues logos, color scheme, website, and so much more</p>
                    </section>
                    <section className='center-item'>
                        <h4>Logo Design</h4>
                        <p>A logo created just for you</p>
                    </section>
                    <section className='right-item'>
                        <h4>Social Media</h4>
                        <p>Need help with twitter, facebook, or instagram? We can do that</p>
                    </section>
                </div>
        </article>
    </div>
);

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';

import './blog.styles.css';

const Blog = () => {
    return (
        <div className='blogContainer' >
            <h2 className="webTW">Web Tip Wednesday</h2>
            <p>seed size tips to help your website grow</p>
            <section className='blog-container'>
                <h3>Is your website secure?</h3>
                <p>This question can be very complicated. The first level of security can be found in the address bar. Visit your website and take a look.</p>
                <Link className='blog-option' to='/web-security-level-one'> More on image addres bar security</Link>
            </section>
            <section className='blog-container'>
                <h3>Why do I need descriptions on my photos?</h3>
                <p>If you have done anything with photos on your website, then you have seen that area where it asks for the photo description. </p>
                <Link className='blog-option' to='/img-alt-text'> More on image alternate text</Link>
            </section>
            <section className='blog-container'>
                <h3>Keyword planning</h3>
                <p>We all want to rank high on search engine pages so customers can find us. The search algorithm that is used is a mystery, but there are several
                    parts of it that are known. One of the first things you should think about when optimizing your site for SEO (search engine optimization) is keywords. 
                </p>
                <Link className='blog-option' to='/keyword-plan'> More on keyword planning</Link>
            </section>
            <section className='blog-container'>
                <h3>Google Lighthouse</h3>
                <p>Fist thing, what is Google Lighthouse test anyway? It is a free test for any website 
                    that will quickly give you a score for things like performance, best practices, SEO, and accessibility. Click the link for directions.
                </p>
                <Link className='blog-option' to='/lighthouse-test'> More on Google Lighthouse</Link>
            </section>
        </div>
    )

};

export default Blog;
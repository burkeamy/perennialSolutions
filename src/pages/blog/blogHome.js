import React from 'react';
import { Link } from 'react-router-dom';

import './blog.styles.css';

const Blog = () => {
    return (
        <div className='blogContainer' >
            <h2 className="webTW">Web Tip Wednesday</h2>
            <p>seed size tips to help your website grow</p>
            <h3>Keyword planning</h3>
            <p>We all want to rank high on search engine pages so customers can find us. The search algorithm that is used is a mystery, but there are several
                parts of it that are known. One of the first things you should think about when optimizing your site for SEO (search engine optimization) is keywords. 
            </p>
            <Link className='blog-option' to='/keyword-plan'> More on keyword planning</Link>
            <h3>Google Lighthouse</h3>
            <p>Fist thing, what is Google Lighthouse test anyway? It is a free test for any website 
                that will quickly give you a score for things like performance, best practices, SEO, and accessibility. Click the link for directions.
            </p>
            <Link className='blog-option' to='/lighthouse-test'> More on Google Lighthouse</Link>
        </div>
    )

};

export default Blog;
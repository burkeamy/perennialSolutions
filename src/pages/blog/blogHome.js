import React from 'react';
import BlogPosts from '../../components/blogPosts/blogPosts'
import './blog.styles.css';

const Blog = () => {
    return (
        <div className='blogContainer' >
            <h2 className="webTW">Web Tip Wednesday</h2>
            <BlogPosts />
        </div>
    )

};

export default Blog;
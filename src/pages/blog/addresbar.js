import React from 'react';
import './blog.styles.css';

const WebSecurityLevelOne = () => {
  return (
    <div class= 'blogPostsContainer'>
        <div classname="side-space"></div>
        <div classname="main-blog-area">
            <h2>Is your website secure?</h2>
            <p>
                This question can be very complicated. For most businesses with websites, the first level of security can be found in the address bar. 
                Visit your website and take a look. If it has something like https:// your-website/ then you are good. Look closely because if it says 
                http:// your-website/ (no s after the http) your site is lacking basic security.
            </p>
            <p>
                Don’t panic! Most web hosts provide this and chances are it is part of your current plan. Look around for SSL certificate and follow the 
                directions. Each hosting platform is different. If you cannot find it or you need help, please reach out to them. 
            </p>
            <p>
                Having that S helps with your SEO as well. Google and other search engines put a higher ranking on sites that are secure. 
            </p>
           <p>
                I am not a web security expert. On some rainy day and you want to go down the rabbit hole of web security I am sure there are plenty of good 
                resources out there. Just check the address bar before you read the them though.
           </p>
        </div>
        <div classname="side-space"></div>
    </div>
  )
}

export default WebSecurityLevelOne
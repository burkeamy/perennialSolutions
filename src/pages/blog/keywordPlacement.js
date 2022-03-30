import React from 'react';
import './blog.styles.css';

const KeywordPlacement = () => {
  return (
    <div class= 'blogPostsContainer'>
        <div classname="side-space"></div>
        <div classname="main-blog-area">
            <h2>Where to put those fantastic keywords</h2>
            
            <p>
                So you did some research and found some great keywords. Now you want to use these on your website to improve your search rankings. Where are the best places to use them?
            </p>
            <p>
                If your keywords go along with your company name, put them together. Having any keywords in your title will help a ton. A second place to include these keywords 
                is your meta description. Meta description is what search engines use to quickly learn what your website is about. Lastly, include these keywords in the content 
                of your web page itself. Only put them where they make sense with the other content. A web crawler can tell if you are just placing keywords where they do not 
                belong. This will hurt your ranking.
            </p>
            <p>
                If you have WordPress, click on the settings tab. Be sure to fill in the site title and tagline. WordPress will do the rest.
            </p>
            
        </div>
        <div classname="side-space"></div>
    </div>
  )
}

export default KeywordPlacement
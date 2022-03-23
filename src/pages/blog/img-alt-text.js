import React from 'react';
import './blog.styles.css';

const ImgAltText = () => {
  return (
    <div class= 'blogPostsContainer'>
        <div classname="side-space"></div>
        <div classname="main-blog-area">
            <h2>Why do I need descriptions on my photos?</h2>
            <p>
                If you have done anything with photos on your website, then you have seen that area where it asks for the photo alt text. You might write one or two quick words 
                about the photo or leave it blank. We are all guilty of this at some point. I mean it is a photo, you can see it. Why does it need an alternate description at all anyway?
            </p>
            <p>
                I am here to help you out with this. The main reason for the description is so folks using screen readers can understand the photo and know what it is and why it 
                adds value to the website.  It can also be useful if your internet is too slow and the photo will not load. In short, the descriptions are for accessibility. 
                (This also helps with the magic of SEO)
            </p>
            <p>
                Great, we all want more accessible websites. How do you do it? This depends on what platform you are using. Here are a few popular options.
            </p>
            <h4>WordPress</h4>
            <p>
                Go to your media library and click on an image. There is an alternate text area. This part is the accessible text for screen readers. Captions and descriptions 
                are more complex and I will go over them in the future. 
            </p>
            <img className="lighthouseTestimg" src= "https://res.cloudinary.com/perennial-solutions-online/image/upload/v1648043173/img%20alt%20text/wordpressImgAltTxt_tnd734.jpg"  width="450px" alt="screenshot of WordPress to show where the alt text should go" />
            <h4>Squarespace</h4>
            <p>
                Go into edit mode and double click on the image you wish to edit. Scroll down and fill in the image alt text field. Make sure you save when you are done.
            </p>
            <img className="lighthouseTestimg"src="https://res.cloudinary.com/perennial-solutions-online/image/upload/v1648043085/img%20alt%20text/squarespaceImgAltText_o4jld0.png" width="450px"alt="screenshot of Squarespace to show where the alt text should go" />
            <h4>Code Your Own</h4>
            <p>
                If you are brave enough to code your own website you probably already know how to add alt text to an image. In case your forgot, here it is in code form. 
            </p>
            <p>In the <code>img</code> tag, add alt="image description"</p>
            <p>
                Important side note to end on. If your image is purely decorative and doesn’t add information to your site, it dose not need alt text. If your image is text, 
                like a logo, make sure to include the words in the image!
            </p>
            <p>Thanks for reading.</p>
        </div>
        <div classname="side-space"></div>
    </div>
  )
}

export default ImgAltText
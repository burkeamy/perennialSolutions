import React, {useState} from 'react';

import ThankYou from '../../components/ThankYou/thankYou.component';
import './contact.styles.css';
import emailjs from 'emailjs-com';


const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault() 
        
        setIsSubmitted(true);
               
    
            emailjs.sendForm('service_os18hzg', 'template_hulbr91', e.target, 'user_SVeso4VCm5a8LFlI5j2Tf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
            
    }
    
    return (
        <div>
            <div className='contactBackground'></div>
            <section className='contactFormContainer'>
                <h2>Contact Perennial Solutions</h2>
                {!isSubmitted ? 
                     <div >
                     <h3>Please fill out this short form for additional information aboout our services</h3>
                     <form className="contact-form" onSubmit={sendEmail}>
                       <label>Your name</label>
                       <input type="text" name="name" placeholder="Your name" className="enter-name"/>
                       <label>Email address</label>
                       <input type="email" name="email"placeholder="Your email" className="enter-email"/>
                       <label>What kind of services are you looking for. If you have a website already, please include a link</label>
                       <textarea name="message" placeholder="A brief message about what you are intrested in" className="enter-message"/>
                       <br />
                       <input type="submit" value="Send" className="submit-button"/>
                     </form>
                   </div>  :
                < ThankYou/>
                }
            </section>
        </div>
    )
};

export default ContactPage;
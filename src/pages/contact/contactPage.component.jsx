import React, {useState} from 'react';

import ContactForm from '../../components/contactForm/contactForm.component';
import ThankYou from '../../components/ThankYou/thankYou.component';
import './contact.styles.css';

const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function changeMessage () {
        setIsSubmitted(true);
        console.log('sent')
    }
    return (
        <div>
            <div className='contactBackground'></div>
            <section className='contactFormContainer'>
                <h2>Contact Perennial Solutions</h2>
                {!isSubmitted ? 
                    < ContactForm onSubmit={changeMessage}/> :
                    < ThankYou/>
                }
            </section>
        </div>
    )
};

export default ContactPage;
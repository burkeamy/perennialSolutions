import React from 'react';
import emailjs from 'emailjs-com';
import './contactForm.styles.css';

const ContactForm = (changeMessage) => {

  const sendEmail = (e) => {
    e.preventDefault();
    

      emailjs.sendForm('service_os18hzg', 'template_hulbr91', e.target, 'user_SVeso4VCm5a8LFlI5j2Tf')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div >
      <h3>Please fill out this short form for additional information aboout our services</h3>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Your name</label>
        <input type="text" name="user_name" placeholder="name" className="enter-name"/>
        <label>Email address</label>
        <input type="email" name="user_email"placeholder="email" className="enter-email"/>
        <label>What kind of services are you looking for. If you have a website already, please include a link</label>
        <textarea name="message" placeholder="a brief message about what information you are looking for" className="enter-message"/>
        <br />
        <input type="submit" value="Send" className="submit-button"/>
      </form>
    </div>  
  )
};


export default ContactForm;
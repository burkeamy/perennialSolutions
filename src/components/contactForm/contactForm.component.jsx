import React from 'react';


const ContactForm = (changeMessage) => {

   

    const onSubmit = data => {
        console.log(data);
        changeMessage();
    }

    return (
        <form onSubmit={onSubmit}>  
            <input
                type='text'
                name='name'
                placeholder='Name'
                
            />
            <input 
                type='email' 
                name='email' 
                placeholder='email'
            />
            <div>
                <input type="checkbox" id="option1" name="option1" value="newWebsite"/>
                <label for="option1"> I need a website</label>
                <input type="checkbox" id="option2" name="option2" value="siteRedesign"/>
                <label for="option2"> I want to redesign a website</label>
                <input type="checkbox" id="option3" name="option3" value="option3"/>
                <label for="option3"> other</label>
            </div>

            <input type='text' name='message' placeholder='addtional information'/>
            <button type='submit'>submint</button>
        </form> 
    )
};


export default ContactForm;
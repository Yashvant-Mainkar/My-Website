import "./Contact.css"
import {Link} from "react-router-dom"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tnjbipt', 'template_pr2arbu', form.current, {
        publicKey: 'Tief6GuVaBVLoZo-y',
      })
      .then(
        () => {
          alert('Your request is submitted!');
        },
        (error) => {
          alert('Your request is FAILED...', error.text);
        },
      );
  };

  return (
    <div className="main-container">
      <Link to=".."><button className="conBackBtn">Back</button></Link>

      <div className="background-container">
        <div className="background-image">
        </div>
        <div className="contact-container">
          <h1 className="contact-h1">CONTACT ME</h1>


          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">NAME:</label>
              <input className="sameClass" type="text" id="name" name="from_name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL:</label>
              <input className="sameClass" type="email" id="email" name="from_email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">MESSAGE:</label>
              <textarea className="sameClass" id="message" name="message"></textarea>
            </div>
            <button type="submit">SUBMIT</button>
          </form>


        </div>
      </div>
    </div>
  )



    


  
}

export default Contact
//  <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>

//       <input type="text" name="from_name" />
//       <label>Email</label>

//       <input type="email" name="from_email" />
//       <label>Message</label>

//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form> 


{/* <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">NAME:</label>
              <input className="sameClass" type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL:</label>
              <input className="sameClass" type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">MESSAGE:</label>
              <textarea className="sameClass" id="message" name="message"></textarea>
            </div>
            <button type="submit">SUBMIT</button>
          </form> */}
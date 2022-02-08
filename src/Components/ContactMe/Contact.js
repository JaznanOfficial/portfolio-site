import React from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import swal from 'sweetalert'

const Contact = () => {
    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();
        
        
        emailjs.sendForm('service_mhon7tp', 'template_dr1nm3h', form.current, 'user_1WP45SDevcirhN4i48N1M')
        .then((result) => {
            console.log(result.text);
            swal({
                title: "Good job!",
                text: "Your message successfully sent!",
                icon: "success",
            });
            e.target.reset()
          
      }, (error) => {
          console.log(error.text);
          swal({
            title: "Oops!",
            text: `{error.text}`,
            icon: "warning",
          });
          e.target.reset()
      });
    }


    return (
        <div>
        <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact me</h2>
            <div class="contact-content d-lg-flex flex-lg-row flex-sm-column justify-content-center align-items-center">
                <div class="column left w-100 mx-3">
                    <div class="text">Get in Touch</div>
                    <p className='text-center'>In any purpose you can contact with me</p>
                    <div class="icons ms-3">
                        <div class="row-icon">
                            <div><i class="fas fa-user"></i></div>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Md Abdur Rahman</div>
                            </div>
                        </div>
                        <div class="row-icon">
                            <div><i class="fas fa-map-marker-alt"></i></div>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Khulna, Bangladesh</div>
                            </div>
                        </div>
                        <div class="row-icon">
                            <div><i class="fas fa-envelope"></i></div>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">jaznanofficial@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right w-100 mx-3">
                    <div class="text">Message me</div>
                    <form action="#" onSubmit={sendMail} ref={form}>
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder="Name" name='name' required/>
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email" name='email' required/>
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Subject" name='subject' required/>
                        </div>
                        <div class="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." name='message' required></textarea>
                        </div>
                        <div class="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Contact;
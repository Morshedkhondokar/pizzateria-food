import React from 'react';
import Header from '../components/Contact/Header';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
    return (
        <div className='my-20 mx-2'>
            <Header/>
            <ContactForm/>
            <div className='flex justify-center items-center'>
                <img src="images/map.png" alt="" />
            </div>
        </div>
    );
};

export default Contact;
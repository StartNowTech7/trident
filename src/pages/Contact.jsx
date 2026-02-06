import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactSection from '../sections/Contact';
import contactBg from '../assets/images/contacth.jpg';

const Contact = () => {
    return (
        <>
            <PageHeader
                title="Contact Us"
                bgImage={contactBg}
            />
            <ContactSection />
        </>
    );
};

export default Contact;

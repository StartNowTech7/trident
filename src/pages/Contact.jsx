import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactSection from '../sections/Contact';
import contactBg from '../assets/images/ss.png';
import contactPcBg from '../assets/images/contact.jpg';

const Contact = () => {
    return (
        <>
            <PageHeader
                title="Contact Us"
                bgImage={contactBg}
                pcBgImage={contactPcBg}
            />
            <ContactSection />
        </>
    );
};

export default Contact;

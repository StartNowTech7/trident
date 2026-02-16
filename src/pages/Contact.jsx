import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactSection from '../sections/Contact';
const contactBg = '/images/ss.webp';
const contactPcBg = '/images/contact.webp';

const Contact = () => {
    return (
        <>
            <PageHeader
                title="Contact Us"
                subtitle="Get In Touch"
                mobileBgImage={contactBg}
                pcBgImage={contactPcBg}
            />
            <ContactSection />
        </>
    );
};

export default Contact;

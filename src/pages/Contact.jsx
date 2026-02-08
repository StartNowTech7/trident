import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import ContactSection from '../sections/Contact';
import contactBg from '../assets/images/ss.webp';
import contactPcBg from '../assets/images/contact.webp';

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Us"
                description="Get in touch with Trident Aviation Services. Contact our team for aviation solutions, inquiries, and support. We're here to help with all your aviation needs."
                keywords="contact aviation services, aviation inquiry, aviation support contact, get in touch aviation"
            />
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

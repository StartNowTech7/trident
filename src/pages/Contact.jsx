import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactSection from '../sections/Contact';

const Contact = () => {
    return (
        <>
            <PageHeader
                title="Contact Us"
                bgImage="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop"
            />
            <ContactSection />
        </>
    );
};

export default Contact;

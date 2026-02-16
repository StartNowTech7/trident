import React from 'react';
import PageHeader from '../components/PageHeader';
import ServicesSection from '../sections/Services';
import Contact from '../sections/Contact';

const servicesHeaderImg = '/images/services-header-boeing.webp';
const servicesPcHeaderImg = '/images/air.webp';

const Services = () => {
    return (
        <>
            <PageHeader
                title="Our Services"
                subtitle="What We Offer"
                mobileBgImage={servicesHeaderImg}
                pcBgImage={servicesPcHeaderImg}
            />
            <ServicesSection />
            <Contact />
        </>
    );
};

export default Services;

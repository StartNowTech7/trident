import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import ServicesSection from '../sections/Services';
import Contact from '../sections/Contact';

import servicesHeaderImg from '../assets/images/services-header-boeing.webp';
import servicesPcHeaderImg from '../assets/images/air.webp';

const Services = () => {
    return (
        <>
            <SEO
                title="Our Services"
                description="Explore our comprehensive aviation services: GSA representation, cargo handling, airline services, parts supply, and specialized aviation support solutions."
                keywords="aviation services, GSA representation, cargo handling, airline services, aircraft parts, aviation logistics"
            />
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

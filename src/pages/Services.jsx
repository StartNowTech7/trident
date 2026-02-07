import React from 'react';
import PageHeader from '../components/PageHeader';
import ServicesSection from '../sections/Services';
import Contact from '../sections/Contact';

import servicesHeaderImg from '../assets/images/services-header-boeing.jpg';
import servicesPcHeaderImg from '../assets/images/air.jpg';

const Services = () => {
    return (
        <>
            <PageHeader
                title="Our Services"
                bgImage={servicesHeaderImg}
                pcBgImage={servicesPcHeaderImg}
            />
            <ServicesSection />
            {/* Could add more detailed service descriptions/grids here */}
            <div style={{ backgroundColor: '#f9fafb', padding: '60px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--color-primary)' }}>Logistics & Supply Chain</h3>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666' }}>
                        Beyond aviation, we offer integrated logistics solutions to ensure your cargo moves seamlessly from origin to destination.
                    </p>
                </div>
            </div>
            <Contact />
        </>
    );
};

export default Services;

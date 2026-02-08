import React from 'react';
import SEO from '../components/SEO';
import Hero from '../sections/Hero';
import { StatsBar, AboutRedesign, CTABanner, ServicesGridRedesign, ProfessionalSkills, WhyChooseUs, Testimonials } from '../sections/HomeSections';
import Contact from '../sections/Contact';

const Home = () => {
    return (
        <>
            <SEO
                title="Home"
                description="Trident Aviation Services offers professional aviation solutions including GSA services, cargo handling, airline representation, and comprehensive aviation support worldwide."
                keywords="aviation services, GSA services, cargo handling, airline representation, aviation support, aircraft services"
            />
            <Hero />
            <StatsBar />
            <AboutRedesign />
            <CTABanner />
            <ServicesGridRedesign />
            <ProfessionalSkills />
            <WhyChooseUs />
            <Testimonials />
            <Contact />
        </>
    );
};

export default Home;

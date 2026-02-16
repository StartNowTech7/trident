import React from 'react';
import Hero from '../sections/Hero';
import { StatsBar, AboutRedesign, CTABanner, ServicesGridRedesign, ProfessionalSkills, WhyChooseUs, Testimonials } from '../sections/HomeSections';
import Contact from '../sections/Contact';

const Home = () => {
    return (
        <>
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

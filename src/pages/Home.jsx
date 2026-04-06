import React from 'react';
import Hero from '../sections/Hero';
import { StatsBar, AboutRedesign, CTABanner, ServicesGridRedesign, ProfessionalSkills, WhyChooseUs, Testimonials } from '../sections/HomeSections';
import Partners from '../sections/Partners';

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
            <Partners />
        </>
    );
};

export default Home;

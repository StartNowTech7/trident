import React from 'react';
import PageHeader from '../components/PageHeader';
import AboutSection from '../sections/About';
import HistorySection from '../sections/HistorySection';
import Leadership from '../sections/Leadership';
import { ProfessionalSkills } from '../sections/HomeSections';

import aboutHeaderImg from '../assets/images/about-header-passion.jpg';

const About = () => {
    return (
        <>
            <PageHeader
                title="About Us"
                subtitle="Who We Are"
                bgImage={aboutHeaderImg}
            />
            <AboutSection />
            <HistorySection />
            <ProfessionalSkills />
            <Leadership />
        </>
    );
};

export default About;

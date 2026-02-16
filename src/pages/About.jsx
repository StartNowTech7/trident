import React from 'react';
import PageHeader from '../components/PageHeader';
import AboutSection from '../sections/About';
import HistorySection from '../sections/HistorySection';
import Leadership from '../sections/Leadership';
import { ProfessionalSkills } from '../sections/HomeSections';

const aboutHeaderImg = '/images/about-header-passion.webp';
const aboutPcHeaderImg = '/images/aboutusn.webp';

const About = () => {
    return (
        <>
            <PageHeader
                title="About Us"
                subtitle="Our Story"
                mobileBgImage={aboutHeaderImg}
                pcBgImage={aboutPcHeaderImg}
            />
            <AboutSection />
            <HistorySection />
            <Leadership />
            <ProfessionalSkills />
        </>
    );
};

export default About;

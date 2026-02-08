import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import AboutSection from '../sections/About';
import HistorySection from '../sections/HistorySection';
import Leadership from '../sections/Leadership';
import { ProfessionalSkills } from '../sections/HomeSections';

import aboutHeaderImg from '../assets/images/about-header-passion.webp';
import aboutPcHeaderImg from '../assets/images/aboutusn.webp';

const About = () => {
    return (
        <>
            <SEO
                title="About Us"
                description="Learn about Trident Aviation Services - our mission, vision, values, and commitment to excellence in aviation industry. Discover our history and leadership team."
                keywords="about trident aviation, aviation company history, aviation mission vision, aviation leadership, aviation excellence"
            />
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

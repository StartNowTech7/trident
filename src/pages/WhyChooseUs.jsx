import React from 'react';
import PageHeader from '../components/PageHeader';
import { Shield, Globe, Users, Award } from 'lucide-react';
import '../styles/WhyChooseUs.css';
import Contact from '../sections/Contact';
import headBg from '../assets/images/aviation-1.jpg';
import specializedAviation from '../assets/images/specialized-aviation.jpg';
import globalExpertise from '../assets/images/global-expertise.jpg';
import aviationSupport from '../assets/images/aviation-support.jpg';
import ecoAviation from '../assets/images/eco-aviation.jpg';
import sectionBg from '../assets/images/services-bg.jpg';

const WhyChooseUs = () => {
    return (
        <>
            <PageHeader
                title="Why Choose Us"
                subtitle="Your Trusted Aviation Partner Worldwide"
                bgImage={headBg}
            />

            <section className="usp-section">
                <div className="usp-parallax-bg" style={{ backgroundImage: `url(${sectionBg})` }}></div>
                <div className="usp-container">
                    <div className="usp-header">
                        <span className="section-subtitle">Our Unique Selling Proposition</span>
                        <h2>Excellence in Aviation Services</h2>
                        <p className="usp-intro">
                            Trident Aviation Services’ USP lies in its specialization as a trusted Airline GSA and CSA partner,
                            offering airlines a comprehensive and results-driven approach to passenger and cargo sales.
                        </p>
                    </div>

                    <div className="usp-path-container">
                        <div className="usp-step">
                            <div className="usp-content-wrapper">
                                <div className="usp-card">
                                    <div className="usp-icon-node">
                                        <Shield size={32} />
                                    </div>
                                    <div className="usp-card-img">
                                        <img src={specializedAviation} alt="Specialized Aviation" />
                                    </div>
                                    <span className="usp-index">01</span>
                                    <h3>Generic vs. Specialized</h3>
                                    <p>
                                        Unlike generic service providers, we focus solely on aviation excellence—ensuring airlines achieve
                                        maximum market visibility and optimized cargo capacity. This focused approach positions Trident
                                        as a preferred global partner.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="usp-step">
                            <div className="usp-content-wrapper">
                                <div className="usp-card">
                                    <div className="usp-icon-node">
                                        <Globe size={32} />
                                    </div>
                                    <div className="usp-card-img">
                                        <img src={globalExpertise} alt="Local Expertise" />
                                    </div>
                                    <span className="usp-index">02</span>
                                    <h3>Industry Overview</h3>
                                    <p>
                                        Operating within a dynamic aviation sector, we provide the local expertise and global reach
                                        airlines need. Our cargo sales ensure airlines maximize profitability while offering
                                        seamless solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="usp-step">
                            <div className="usp-content-wrapper">
                                <div className="usp-card">
                                    <div className="usp-icon-node">
                                        <Users size={32} />
                                    </div>
                                    <div className="usp-card-img">
                                        <img src={aviationSupport} alt="Customer Support" />
                                    </div>
                                    <span className="usp-index">03</span>
                                    <h3>Customer Expectations</h3>
                                    <p>
                                        The modern aviation landscape demands 24/7 support and personalized solutions. We delivery
                                        world-class service through transparent communication and dedicated account management.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="usp-step">
                            <div className="usp-content-wrapper">
                                <div className="usp-card">
                                    <div className="usp-icon-node">
                                        <Award size={32} />
                                    </div>
                                    <div className="usp-card-img">
                                        <img src={ecoAviation} alt="Cargo Innovation" />
                                    </div>
                                    <span className="usp-index">04</span>
                                    <h3>Sustainability & Innovation</h3>
                                    <p>
                                        We integrate forward-thinking strategies and environmentally responsible practices
                                        into our operations, aligning with the future of global aviation and digital transformation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default WhyChooseUs;

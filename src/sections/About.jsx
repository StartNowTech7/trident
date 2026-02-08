import React from 'react';
import { Target, Eye, ShieldCheck, Award, Users, Lightbulb, Leaf } from 'lucide-react';
import '../styles/About.css';

const About = () => {
    return (
        <>
            <section className="about-page-content" id="about">
                <div className="about-container">
                    <div className="about-intro">
                        <div className="about-image-main">
                            <img
                                src="/images/aviation-excellence.webp"
                                alt="Aviation Excellence"
                                loading="lazy"
                            />
                            <div className="experience-badge">
                                <span className="years">15+</span>
                                <span className="text">Years in Industry</span>
                            </div>
                        </div>
                        <div className="about-text-content">
                            <h4>Learn About Us</h4>
                            <h2>We are Professional & Experienced in Aviation.</h2>
                            <p>
                                Trident Aviation Services specializes in Airline General Sales Agency (GSA)
                                and Cargo Sales Agency (CSA) services, delivering expertise and professionalism
                                to international airline partners.
                            </p>
                            <p>
                                Since our inception, we have been committed to setting new benchmarks in
                                service delivery, market penetration, and sustainable growth within the aviation sector.
                            </p>
                        </div>
                    </div>

                    <div className="mission-vision-grid">
                        <div className="mv-card">
                            <div className="icon-box"><Target size={32} /></div>
                            <h3>Our Mission</h3>
                            <p>To deliver world-class Airline GSA and CSA services through reliable, innovative, and customer-centric solutions.</p>
                        </div>
                        <div className="mv-card">
                            <div className="icon-box"><Eye size={32} /></div>
                            <h3>Our Vision</h3>
                            <p>To be the leading global partner in airline representation and aviation services, setting standards in quality and satisfaction.</p>
                        </div>
                        <div className="mv-card">
                            <div className="icon-box"><ShieldCheck size={32} /></div>
                            <h3>Our Integrity</h3>
                            <p>We uphold the highest standards of honesty and ethics, ensuring our actions reflect what is right for all stakeholders.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="principles-section-wrapper">
                <div className="principles-bento-section">
                    <div className="values-header">
                        <h4>Our Core Values</h4>
                        <h2>The Principles That Guide Us</h2>
                    </div>

                    <div className="bento-grid">
                        <div className="bento-item main theme-sustainability">
                            <div className="bento-icon"><Leaf size={40} /></div>
                            <h3>Sustainability</h3>
                            <p>Minimizing our environmental impact while creating long-term value through responsible aviation practices.</p>
                        </div>

                        <div className="bento-item compact theme-customer">
                            <div className="bento-icon"><Users size={32} /></div>
                            <div className="bento-content">
                                <h3>Customer-Centricity</h3>
                                <p>Delivering personalized solutions built on trust.</p>
                            </div>
                        </div>

                        <div className="bento-item compact theme-innovation">
                            <div className="bento-icon"><Lightbulb size={32} /></div>
                            <div className="bento-content">
                                <h3>Innovation</h3>
                                <p>Embracing advanced technologies for the future.</p>
                            </div>
                        </div>

                        <div className="bento-item wide theme-excellence">
                            <div className="bento-icon"><Award size={36} /></div>
                            <div className="bento-content">
                                <h3>Excellence</h3>
                                <p>We consistently exceed expectations through professional dedication and a relentless pursuit of perfection.</p>
                            </div>
                        </div>

                        <div className="bento-item theme-integrity">
                            <div className="bento-icon"><ShieldCheck size={36} /></div>
                            <div className="bento-content">
                                <h3>Integrity</h3>
                                <p>Upholding the highest standards of honesty and ethics is our foundation. We believe in transparency and shared commitment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;

import React from 'react';
import PageHeader from '../components/PageHeader';
import { Shield, Globe, Users, Award } from 'lucide-react';
import '../styles/WhyChooseUs.css';
import Contact from '../sections/Contact';

const WhyChooseUs = () => {
    return (
        <>
            <PageHeader
                title="Why Choose Us"
                subtitle="Your Trusted Aviation Partner Worldwide"
                bgImage="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="usp-section">
                <div className="container">
                    <div className="usp-header">
                        <span className="section-subtitle">Our Unique Selling Proposition</span>
                        <h2>Excellence in Aviation Services</h2>
                        <p className="usp-intro">
                            Trident Aviation Services’ USP lies in its specialization as a trusted Airline GSA and CSA partner,
                            offering airlines a comprehensive and results-driven approach to passenger and cargo sales.
                            Our strength comes from a combination of deep industry expertise, customer-centric solutions,
                            and a commitment to innovation and sustainability.
                        </p>
                    </div>

                    <div className="usp-grid">
                        <div className="usp-card">
                            <div className="icon-box"><Shield size={32} /></div>
                            <h3>Generic vs. Specialized</h3>
                            <p>
                                Unlike generic service providers, we focus solely on aviation excellence—ensuring airlines achieve
                                maximum market visibility, optimized cargo capacity, and exceptional customer service. This focused
                                approach positions Trident Aviation Services as the preferred partner for international airlines.
                            </p>
                        </div>

                        <div className="usp-card highlight">
                            <div className="icon-box"><Globe size={32} /></div>
                            <h3>Industry Overview</h3>
                            <p>
                                Operating within a dynamic aviation sector shaped by globalization and digital transformation,
                                we provide the local expertise and global reach airlines need. Our cargo sales ensure airlines
                                maximize profitability while offering seamless solutions to freight forwarders.
                            </p>
                        </div>

                        <div className="usp-card">
                            <div className="icon-box"><Users size={32} /></div>
                            <h3>Customer Expectations</h3>
                            <p>
                                The modern aviation landscape demands 24/7 support and personalized solutions. Trident Aviation Services
                                is well-positioned to meet these needs, delivering world-class service to both airlines and their customers
                                through transparent communication.
                            </p>
                        </div>

                        <div className="usp-card">
                            <div className="icon-box"><Award size={32} /></div>
                            <h3>Sustainability & Innovation</h3>
                            <p>
                                With the aviation industry embracing sustainability and digital innovation, we integrate forward-thinking
                                strategies and environmentally responsible practices into our operations, aligning with the future of global aviation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default WhyChooseUs;

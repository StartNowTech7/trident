import React from 'react';
import { Plane, Award, Globe, TrendingUp } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-left">
                    <div className="hero-badge">
                        <Plane size={16} />
                        <span>Welcome to Trident Aviation</span>
                    </div>
                    <h1>World-Class Aviation<br />GSA & CSA Services</h1>
                    <p className="hero-text">
                        Connecting airlines with markets and customers through reliable, innovative, and customer-centric solutions for sustainable growth.
                    </p>
                    <div className="hero-buttons">
                        <a href="/services" className="btn btn-primary">Our Services</a>
                        <a href="/contact" className="btn btn-outline">Contact Us</a>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="cards-stack">
                        <div className="floating-card card-1">
                            <div className="card-icon"><Award size={24} /></div>
                            <div className="card-info">
                                <h3>15+ Years</h3>
                                <p>Industry Excellence</p>
                            </div>
                        </div>
                        <div className="floating-card card-2">
                            <div className="card-icon"><TrendingUp size={24} /></div>
                            <div className="card-info">
                                <h3>98%</h3>
                                <p>Satisfaction Rate</p>
                            </div>
                        </div>
                        <div className="floating-card card-3">
                            <div className="card-icon"><Globe size={24} /></div>
                            <div className="card-info">
                                <h3>50+</h3>
                                <p>Global Partners</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

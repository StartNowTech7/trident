import React from 'react';
import { Plane, Award, Globe, TrendingUp } from 'lucide-react';
import '../styles/Hero.css';
import heroBg from '../assets/images/hero-bg.webp';

const Hero = () => {
    const [heroImage, setHeroImage] = React.useState(heroBg);

    React.useEffect(() => {
        const handleResize = () => {
            // Using a slightly different image for PC if needed, 
            // but for now setting up the framework to switch Hero images
            if (window.innerWidth <= 768) {
                setHeroImage(heroBg); // Mobile image
            } else {
                setHeroImage(heroBg); // PC image (can be replaced with a PC-specific one)
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="hero" id="home">
            <img
                src={heroImage}
                alt="Aviation background"
                className="hero-bg-image"
                fetchPriority="high"
            />
            <div className="hero-overlay"></div>
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
                        <a href="/services" className="btn btn-secondary">Our Services</a>
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

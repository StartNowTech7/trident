import React, { useEffect, useState, useRef } from 'react';
import { Plane, Package, Globe, TrendingUp, Clock, Shield, Award, Users, Handshake } from 'lucide-react';
import '../styles/HomeSections.css';

// Local Image Imports
import aviation1 from '../assets/images/aviation-1.jpg';
import aviation2 from '../assets/images/aviation-2.jpg';
import shipmentImg from '../assets/images/cargo-trends.jpg'; // Using cargo shipment image
import teamProf from '../assets/images/team-skills.jpg';

export const StatsBar = () => {
    const stats = [
        { number: "15+", label: "Years Experience" },
        { number: "50+", label: "Airlines Served" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "24/7", label: "Support Available" }
    ];

    return (
        <section className="stats-bar">
            <div className="stats-container">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <h3>{stat.number}</h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export const AboutRedesign = () => {
    return (
        <section className="about-redesign">
            <div className="about-content-wrapper">
                <div className="about-images">
                    <img src={aviation1} alt="Aviation 1" className="img-1" />
                    <img src={aviation2} alt="Aviation 2" className="img-2" />
                    <img src={shipmentImg} alt="Cargo Shipment" className="img-3" />
                </div>
                <div className="about-text">
                    <h4>About Us</h4>
                    <h2>Experienced in Aviation GSA & CSA Services</h2>
                    <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '25px' }}>
                        Trident Aviation Services is a specialized Airline General Sales Agent (GSA) and Cargo Sales Agent (CSA) company,
                        providing comprehensive passenger and cargo sales solutions for international airlines.
                    </p>
                    <ul className="about-features">
                        <li><Award size={20} color="#C5A059" /> <span>Fastest Service Delivery</span></li>
                        <li><Shield size={20} color="#C5A059" /> <span>Secure & Reliable</span></li>
                        <li><Globe size={20} color="#C5A059" /> <span>Global Network</span></li>
                        <li><Users size={20} color="#C5A059" /> <span>Expert Team</span></li>
                    </ul>
                    <a href="/about" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
                        Learn More About Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export const CTABanner = () => {
    return (
        <section className="cta-banner">
            <h2>We Give You Full Control to Complete Your Aviation Needs</h2>
            <a href="/contact" className="btn btn-secondary" style={{
                background: 'var(--color-secondary)',
                color: 'var(--color-primary)',
                padding: '15px 40px',
                fontSize: '1.1rem',
                fontWeight: '600'
            }}>
                Get Started Today
            </a>
        </section>
    );
};

import { supabase } from '../lib/supabase';

// Icon mapping for dynamic icons
const IconMap = {
    Plane: <Plane size={32} />,
    Package: <Package size={32} />,
    Globe: <Globe size={32} />,
    Users: <Users size={32} />,
    Handshake: <Handshake size={32} />,
    Shield: <Shield size={32} />,
    Award: <Award size={32} />,
    TrendingUp: <TrendingUp size={32} />,
    Clock: <Clock size={32} />
};

export const ServicesGridRedesign = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            const { data } = await supabase.from('services').select('*').order('created_at', { ascending: true });
            if (data && data.length > 0) {
                setServices(data);
            } else {
                // Fallback initial data
                setServices([
                    {
                        icon_name: "Plane",
                        title: "Airline General Sales Agency (GSA)",
                        description: "Comprehensive passenger and cargo sales representation, ensuring maximum visibility and revenue."
                    }
                ]);
            }
            setLoading(false);
        };
        fetchServices();
    }, []);

    if (loading) return null;

    return (
        <section className="services-grid-redesign">
            <div className="container">
                <h2>Our Premium Services</h2>

                <div className="services-tabs-container">
                    <div className="services-tabs-nav">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`service-tab-item ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <div className="tab-icon">{IconMap[service.icon_name] || <Plane size={32} />}</div>
                                <span className="tab-label">{service.title}</span>
                            </div>
                        ))}
                    </div>

                    <div className="service-tab-content">
                        <div className="content-icon-large">
                            {IconMap[services[activeTab]?.icon_name] || <Plane size={32} />}
                        </div>
                        <h3>{services[activeTab]?.title}</h3>
                        <p>{services[activeTab]?.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const ProfessionalSkills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const skills = [
        { name: "Airline Representation", level: 95 },
        { name: "Cargo Sales Management", level: 90 },
        { name: "Market Penetration", level: 85 },
        { name: "Customer Service", level: 98 }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section className="skills-section" ref={sectionRef}>
            <div className="skills-wrapper">
                <div className="skills-image">
                    <img src={teamProf} alt="Professional workers" />
                </div>
                <div className="skills-content">
                    <h4>Our Proficiency</h4>
                    <h2>Skillful and Professional Team Doing The Job</h2>
                    <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '30px' }}>
                        Our team of experts stays ahead of industry trends to ensure your airline brand
                        receives the best representation possible. We focus on results and sustainable growth.
                    </p>
                    <div className="skill-bars">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-bar-item">
                                <div className="skill-info">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="skill-progress-bg">
                                    <div
                                        className="skill-progress-fill"
                                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const WhyChooseUs = () => {
    const features = [
        {
            icon: <Clock size={28} />,
            title: "On-Time Performance",
            description: "We ensure timely delivery and reliable service execution for all airline partners."
        },
        {
            icon: <Shield size={28} />,
            title: "Trusted & Secure",
            description: "Industry-leading security standards and transparent operations you can rely on."
        },
        {
            icon: <Award size={28} />,
            title: "Award-Winning Service",
            description: "Recognized for excellence in GSA/CSA services across Southeast Asia."
        }
    ];

    return (
        <section className="why-choose-us">
            <div className="why-choose-content">
                <div className="feature-cards">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="icon">{feature.icon}</div>
                            <div>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h4 style={{ color: 'var(--color-secondary)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '15px' }}>
                        Why Choose Us
                    </h4>
                    <h2 style={{ fontSize: '2.8rem', color: 'var(--color-primary)', marginBottom: '20px' }}>
                        Your Trusted Aviation Partner Worldwide
                    </h2>
                    <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '25px' }}>
                        With over 15 years of experience in airline representation, Trident Aviation Services has built a reputation
                        for delivering exceptional GSA and CSA services. Our commitment to innovation, sustainability, and customer
                        satisfaction sets us apart in the industry.
                    </p>
                    <a href="/services" className="btn btn-primary">Explore All Services</a>
                </div>
            </div>
        </section>
    );
};

export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            const { data } = await supabase.from('testimonials').select('*').order('created_at', { ascending: true });
            if (data && data.length > 0) {
                setTestimonials(data);
            } else {
                setTestimonials([
                    {
                        text: "Trident Aviation Services has been a game-changer for our airline's presence in the region.",
                        author: "John Mitchell",
                        role: "Commercial Director, Global Airways"
                    }
                ]);
            }
            setLoading(false);
        };
        fetchTestimonials();
    }, []);

    useEffect(() => {
        if (testimonials.length > 1) {
            const interval = setInterval(() => {
                setActiveIndex((current) => (current + 1) % testimonials.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [testimonials.length]);

    if (loading || testimonials.length === 0) return null;

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h4 style={{ color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Client Success Stories</h4>
                    <h2 style={{ fontSize: '2.5rem', color: '#ffffff' }}>What Our Partners Say</h2>
                </div>

                <div className="testimonials-wrapper">
                    <div
                        className="testimonials-track"
                        style={{ transform: `translateX(calc(-${activeIndex} * var(--slide-width)))` }}
                    >
                        {testimonials.map((item, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="quote-icon">❝</div>
                                <p className="testimonial-text">{item.content || item.text}</p>
                                <div className="testimonial-author">
                                    <h5>{item.author}</h5>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

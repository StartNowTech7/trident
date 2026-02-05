import React from 'react';
import { Plane, Package, Users, Globe, Handshake, ArrowRight, CheckCircle } from 'lucide-react';
import '../styles/Services.css';

// Image Imports
import service1 from '../assets/images/GSA.png';
import service2 from '../assets/images/cargo-trends.jpg';
import service3 from '../assets/images/airline.jpg';
import service4 from '../assets/images/servie.jpg';
import service5 from '../assets/images/part.jpg';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <Plane size={40} />,
            image: service1,
            title: "Airline General Sales Agency (GSA)",
            description: "We provide comprehensive passenger and cargo sales representation for international airlines. From market entry to long-term business growth, we ensure maximum visibility and revenue through professional sales, marketing, and operational support.",
            features: ["Market Analysis & Strategy", "Sales Force Management", "Marketing & Branding"]
        },
        {
            id: 2,
            icon: <Package size={40} />,
            image: service2,
            title: "Cargo Sales Agency (CSA)",
            description: "As a trusted CSA, we offer dedicated cargo sales and capacity management solutions, helping airlines maximize load factors and optimize revenue. Our expertise in market dynamics allows us to connect carriers with the right customers effectively.",
            features: ["Capacity Management", "Yield Maximization", "Logistics Coordination"]
        },
        {
            id: 3,
            icon: <Globe size={40} />,
            image: service3,
            title: "Airline Representation",
            description: "We act as the face of our partner airlines, delivering end-to-end representation services that strengthen brand presence, build trust, and establish long-term relationships with industry stakeholders across markets.",
            features: ["Brand Ambassadorship", "Stakeholder Relations", "Local Compliance"]
        },
        {
            id: 4,
            icon: <Users size={40} />,
            image: service4,
            title: "Customer Service Solutions",
            description: "Our dedicated service teams provide 24/7 support, ensuring smooth communication, efficient handling, and enhanced customer satisfaction for both airlines and their clients.",
            features: ["24/7 Support Desk", "Passenger Handling", "Crisis Management"]
        },
        {
            id: 5,
            icon: <Handshake size={40} />,
            image: service5,
            title: "Strategic Partnership Development",
            description: "We foster collaborative partnerships within the aviation ecosystem, enabling sustainable growth and creating opportunities for mutual success.",
            features: ["Alliance Building", "Joint Ventures", "Network Expansion"]
        }
    ];

    return (
        <section className="services-section-revamp" id="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">What We Do</span>
                    <h2>Our Core Services</h2>
                    <p>End-to-end aviation solutions tailored to your needs.</p>
                </div>

                <div className="services-list-detailed">
                    {services.map((service, index) => (
                        <div className={`service-row ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
                            <div className="service-image-col">
                                <div className="image-wrapper">
                                    <img src={service.image} alt={service.title} loading="lazy" />
                                </div>
                            </div>
                            <div className="service-content-col">
                                <h3>{service.title}</h3>
                                <p className="service-desc">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className="btn btn-outline" style={{ marginTop: '25px' }}>
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

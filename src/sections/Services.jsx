import React from 'react';
import { Plane, Package, Users, Globe, Handshake, ArrowRight } from 'lucide-react';
import '../styles/Services.css';

const Services = () => {
    const services = [
        {
            icon: <Plane size={32} />,
            title: "Airline General Sales Agency (GSA)",
            description: "We provide comprehensive passenger and cargo sales representation for international airlines. From market entry to long-term business growth, we ensure maximum visibility and revenue through professional sales, marketing, and operational support."
        },
        {
            icon: <Package size={32} />,
            title: "Cargo Sales Agency (CSA)",
            description: "As a trusted CSA, we offer dedicated cargo sales and capacity management solutions, helping airlines maximize load factors and optimize revenue. Our expertise in market dynamics allows us to connect carriers with the right customers effectively and efficiently."
        },
        {
            icon: <Globe size={32} />,
            title: "Airline Representation",
            description: "We act as the face of our partner airlines, delivering end-to-end representation services that strengthen brand presence, build trust, and establish long-term relationships with industry stakeholders across markets."
        },
        {
            icon: <Users size={32} />,
            title: "Customer Service Solutions",
            description: "Our dedicated service teams provide 24/7 support, ensuring smooth communication, efficient handling, and enhanced customer satisfaction for both airlines and their clients."
        },
        {
            icon: <Handshake size={32} />,
            title: "Strategic Partnership Development",
            description: "We foster collaborative partnerships within the aviation ecosystem, enabling sustainable growth and creating opportunities for mutual success."
        }
    ];

    return (
        <section className="services-section" id="services">
            <div className="section-header">
                <span className="section-subtitle">What We Do</span>
                <h2>Our Core Services</h2>
                <p>End-to-end aviation solutions tailored to your needs.</p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon-wrapper">
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <a href="#contact" className="service-link">
                            Learn More <ArrowRight size={16} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

'use client';
import React from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/UsefulTools.css';
import { ExternalLink, Globe, BookOpen, Clock, Calculator, MapPin } from 'lucide-react';

const UsefulTools = () => {
    // State to track image loading errors
    const [imageErrors, setImageErrors] = React.useState({});

    const handleImageError = (name) => {
        setImageErrors(prev => ({ ...prev, [name]: true }));
    };

    const toolsData = [
        // ROW 1
        {
            name: "TIACA",
            desc: "The International Air Cargo Association. Uniting and representing all elements of the global air cargo supply chain through advocacy and high-level networking.",
            link: "https://tiaca.org/",
            logo: "/images/tool1.png",
            type: "Association",
            size: "large",
            featured: true,
            fallback: <Globe size={40} />
        },
        {
            type: "image-filler",
            image: "/images/global.jpg",
            label: "Global Reach"
        },
        // ROW 2
        {
            name: "IATA",
            desc: "The global trade body for airlines, representing 83% of total air traffic and shaping aviation policy worldwide.",
            link: "https://www.iata.org/",
            logo: "/images/tool2.png",
            type: "Authority",
            size: "large",
            featured: true,
            fallback: <Globe size={40} />
        },
        {
            name: "Air Cargo News",
            desc: "Premier analytical reports and breaking news for the international air freight market.",
            link: "https://www.aircargonews.net/",
            logo: "/images/news.png",
            category: "News",
            fallback: <BookOpen size={24} />
        },
        // ROW 3
        {
            name: "XE Converter",
            desc: "Global leader in real-time currency conversion and financial data services.",
            link: "https://www.xe.com/currencyconverter/",
            logo: "/images/xe.png",
            category: "Finance",
            fallback: <Calculator size={24} />
        },
        {
            name: "AZ Freight",
            desc: "The logistics industry's most comprehensive air cargo directory and global contact database.",
            link: "https://azfreight.com/",
            logo: "/images/AZ.png",
            category: "Database",
            fallback: <BookOpen size={24} />
        },
        {
            name: "Airport Codes",
            desc: "Global search tool for IATA/ICAO codes and detailed world airport data.",
            link: "https://www.world-airport-codes.com/",
            logo: "/images/codes.png",
            category: "Database",
            fallback: <MapPin size={24} />
        },
        // ROW 4
        {
            name: "World Clock",
            desc: "Track local time and time zone differences across international aviation hubs.",
            link: "https://www.timeanddate.com/worldclock/",
            logo: "/images/clock.png",
            category: "Ops"
        },
        {
            name: "Payload Asia",
            desc: "Expert industry insights focused on the Asia-Pacific and Middle East freight sectors.",
            link: "https://www.payloadasia.com/",
            logo: "/images/payload.png",
            category: "Media",
            fallback: <BookOpen size={24} />
        },
        {
            type: "image-filler",
            image: "/images/superior.jpg",
            label: "Superior Solutions"
        }
    ];

    const headerBg = '/images/tool.jpg';
    const headerPcBg = '/images/tool.jpg';

    return (
        <div className="tools-page">
            <PageHeader 
                title="Useful Tools"
                subtitle="Aviation Toolkit"
                mobileBgImage={headerBg}
                pcBgImage={headerPcBg}
            />

            <section className="tools-bento-section">
                <div className="container">
                    <div className="section-intro">
                        <span className="tiny-label">Resources</span>
                        <h2>The Aviation Dashboard</h2>
                        <div className="gold-accent"></div>
                        <p>
                            Essential industry platforms and operational utilities curated for professional 
                            aviation stakeholders and partners.
                        </p>
                    </div>

                    <div className="bento-grid">
                        {toolsData.map((tool, idx) => {
                            if (tool.type === "image-filler") {
                                return (
                                    <div key={idx} className="bento-card image-filler-card" style={{ backgroundImage: `url(${tool.image})` }}>
                                        <div className="filler-overlay"></div>
                                        <span className="filler-label">{tool.label}</span>
                                    </div>
                                );
                            }

                            return (
                                <div 
                                    key={idx} 
                                    className={`bento-card ${tool.featured ? 'featured' : 'utility'}`}
                                >
                                    <div className="card-bg-layer"></div>
                                    <div className="card-overlay"></div>
                                    <div className="card-content-wrapper">
                                        <div className="card-top">
                                            <div className={`logo-stamp ${!tool.featured ? 'small' : ''}`}>
                                                {(tool.logo || tool.icon) && !imageErrors[tool.name] ? (
                                                    tool.logo ? (
                                                        <img 
                                                            src={tool.logo} 
                                                            alt={tool.name} 
                                                            onError={() => handleImageError(tool.name)}
                                                        />
                                                    ) : tool.icon
                                                ) : (
                                                    <div className={`fallback-icon ${tool.featured ? 'large' : ''}`}>
                                                        {tool.fallback || tool.icon}
                                                    </div>
                                                )}
                                            </div>
                                            <div className={tool.featured ? 'badge' : 'category-tag'}>
                                                {tool.type || tool.category}
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            {tool.featured ? <h3>{tool.name}</h3> : <h4>{tool.name}</h4>}
                                            <p>{tool.desc}</p>
                                            <a href={tool.link} target="_blank" rel="noopener noreferrer" className={tool.featured ? 'bento-link' : 'utility-link'}>
                                                {tool.featured ? 'Explore Resource' : 'Open Tool'} <ExternalLink size={tool.featured ? 18 : 16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UsefulTools;

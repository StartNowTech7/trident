import React from 'react';
import { History, TrendingUp, Users } from 'lucide-react';
import '../styles/About.css';

const HistorySection = () => {
    return (
        <section className="history-section">
            <div className="container">
                <div className="history-grid">
                    <div className="history-text">
                        <h4 className="section-subtitle">Our Journey</h4>
                        <h2 className="section-title">History & Background</h2>
                        <p className="history-description">
                            Founded with a vision to strengthen global aviation partnerships, Trident Aviation Services began as a focused Airline GSA/CSA company and has grown into a multi-faceted business group. We now provide an integrated approach that combines aviation expertise with logistics, tourism, and branding solutions.
                        </p>
                        <p className="history-description">
                            Under the leadership of Kushan Senabandu, who brings over 15 years of industry expertise, the company thrives on integrity, innovation, and performance. His forward-thinking approach ensures we deliver measurable results and build lasting partnerships, establishing Trident as a trusted leader in the international aviation sector.
                        </p>
                        <div className="history-stats">
                            <div className="history-stat-item">
                                <div className="stat-icon-wrapper">
                                    <History size={24} />
                                </div>
                                <div>
                                    <h5>15+ Years</h5>
                                    <p>Industry Expertise</p>
                                </div>
                            </div>
                            <div className="history-stat-item">
                                <div className="stat-icon-wrapper">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h5>Global Reach</h5>
                                    <p>Expanding Horizons</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="history-image-wrapper">
                        <img
                            src="/src/assets/images/services-bg-new.png"
                            alt="Global Aviation Partnerships"
                            className="history-main-image"
                        />
                        <div className="experience-badge">
                            <span className="years">15+</span>
                            <span className="text">Years of Excellence</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;

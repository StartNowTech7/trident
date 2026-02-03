import React from 'react';
import { Quote } from 'lucide-react';
import '../styles/Leadership.css';
import kushanImg from '../assets/kushan.png';

const Leadership = () => {
    return (
        <section className="leadership-redesign">
            <div className="leadership-container">
                <div className="md-message-box">
                    <div className="md-image">
                        <img src={kushanImg} alt="Kushan Senabandu" />
                    </div>
                    <div className="md-content">
                        <Quote size={50} className="quote-icon" />
                        <h2>Message from our Managing Director</h2>
                        <p className="message-text">
                            "Trident Aviation Services was founded with a clear vision: to strengthen global
                            aviation partnerships. We thrive on integrity, innovation, and performance.
                            Our forward-thinking approach ensures that we don't just deliver measurable
                            results, but also build lasting, trust-based partnerships with our airline clients."
                        </p>
                        <div className="md-info">
                            <h3 className="leader-name">Kushan Senabandu</h3>
                            <span className="leader-title">Managing Director, Trident Aviation Services</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Leadership;

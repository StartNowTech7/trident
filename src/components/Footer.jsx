import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, ChevronRight, Globe, Clock } from 'lucide-react';
import '../styles/Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Column 1: Logo & Contact Info */}
                <div className="footer-col">
                    <div className="footer-logo-box">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ background: 'white', padding: '5px', borderRadius: '4px' }}>
                                <img src={logo} alt="Trident" style={{ width: '40px', height: 'auto' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
                                <span style={{ fontSize: '24px', fontWeight: '800', color: 'white', letterSpacing: '1px' }}>TRIDENT</span>
                                <span style={{ fontSize: '10px', fontWeight: '600', color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Aviation Services</span>
                            </div>
                        </div>
                    </div>
                    <p style={{ marginTop: '20px', lineHeight: '1.7', color: '#cbd5e1' }}>
                        Expert airline representation and GSA services connecting global carriers to local markets with precision.
                    </p>
                    <div className="footer-info-list">
                        <div className="footer-info-item">
                            <MapPin size={18} style={{ minWidth: '18px' }} />
                            <span>Building 315, Canadia Bank Tower, Floor 18, Office Number 1845 ResCo-work03, Monivong Blvd., Corner of Ang Dong Street, Phum 1, Sangkat Wat Phnom, Khan Daun Penh, Phnom Penh Capital</span>
                        </div>
                        <div className="footer-info-item">
                            <Mail size={18} />
                            <a href="mailto:Sales@tasglobals.com" className="footer-link">Sales@tasglobals.com</a>
                        </div>
                        <div className="footer-info-item">
                            <Phone size={18} />
                            <a href="tel:+94761277254" className="footer-link">+94 76 127 7254</a>
                        </div>
                        <div className="footer-info-item">
                            <Phone size={18} />
                            <a href="tel:+85593712761" className="footer-link">+855 93 712 761</a>
                        </div>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/team">Our Team</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Useful Links */}
                <div className="footer-col">
                    <h3>Useful Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/contact">Privacy Policy</Link></li>
                        <li><Link to="/contact">Terms & Conditions</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>

                {/* Column 4: Work Hours & CTA */}
                <div className="footer-col">
                    <h3>Work Hours</h3>
                    <div className="work-hours-box">
                        <div className="hours-item">
                            <Clock size={20} />
                            <span>9 AM - 5 PM, Monday - Saturday</span>
                        </div>
                        <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                            Our support desk is available during work hours for all your aviation requirements.
                        </p>
                        <div className="footer-cta-numbers">
                            <a href="tel:+94761277254" className="footer-cta-btn">
                                <Phone size={20} fill="currentColor" />
                                +94 76 127 7254
                            </a>
                            <a href="tel:+85593712761" className="footer-cta-btn">
                                <Phone size={20} fill="currentColor" />
                                +855 93 712 761
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-wrapper">
                <div className="footer-bottom">
                    <p>Copyright &copy; {currentYear}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

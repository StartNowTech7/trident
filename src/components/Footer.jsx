import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import '../styles/Footer.css';

const logo = '/images/logo.webp';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Column 1: Logo & Contact Info */}
                <div className="footer-col">
                    <div className="footer-logo-box">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ background: 'white', padding: '5px', borderRadius: '4px', position: 'relative', width: '50px', height: '50px' }}>
                                <Image src={logo} alt="Trident" fill style={{ objectFit: 'contain', padding: '5px' }} />
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
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/team">Our Team</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Useful Links */}
                <div className="footer-col">
                    <h3>Useful Links</h3>
                    <ul className="footer-links">
                        <li><Link href="/contact">Privacy Policy</Link></li>
                        <li><Link href="/contact">Terms & Conditions</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul>
                </div>

                {/* Column 4: Contact Info */}
                <div className="footer-col">
                    <h3>Contact Us</h3>
                    <div className="footer-info-list" style={{ marginTop: '0' }}>
                        <div className="footer-info-item">
                            <Phone size={18} />
                            <a href="tel:+94761277254" className="footer-link">+94 76 127 7254</a>
                        </div>
                        <div className="footer-info-item">
                            <Phone size={18} />
                            <a href="tel:+85593712761" className="footer-link">+855 93 712 761</a>
                        </div>
                        <div className="footer-info-item">
                            <Mail size={18} />
                            <a href="mailto:Sales@tasglobals.com" className="footer-link">Sales@tasglobals.com</a>
                        </div>
                        <div className="footer-info-item">
                            <span>SV35, No.35, Floor No.7, Unit #707, Mao Tse Toung Blv, Phum 9, Sangkat Boeung Keng Kang1, Khan Boeung Keng Kang, Phnom Penh, Cambodia</span>
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

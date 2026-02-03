import React from 'react';
import { Mail, Phone, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';
import '../styles/TopBar.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-info">
                <div className="top-bar-item">
                    <Mail size={14} />
                    <a href="mailto:Sales@tasglobals.com" className="top-bar-link">Sales@tasglobals.com</a>
                </div>
                <div className="top-bar-item">
                    <Phone size={14} />
                    <a href="tel:+94761277254" className="top-bar-link">+94 76 127 7254</a>
                </div>
                <div className="top-bar-item">
                    <Phone size={14} />
                    <a href="tel:+85593712761" className="top-bar-link">+855 93 712 761</a>
                </div>
                <div className="top-bar-item">
                    <Clock size={14} />
                    <span>Mon - Fri: 9:00 - 18:00</span>
                </div>
            </div>
            <div className="top-bar-socials">
                <Facebook size={14} className="social-icon" />
                <Linkedin size={14} className="social-icon" />
                <Twitter size={14} className="social-icon" />
            </div>
        </div>
    );
};

export default TopBar;

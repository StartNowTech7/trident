'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import '../styles/Navbar.css';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

// navbar
    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <Link href="/" className="navbar-logo">
                <Image src="/logo.png" alt="Trident" width={90} height={90} priority />
                <div className="logo-text">
                    <span className="brand-name">TRIDENT</span>
                    <span className="brand-sub">Aviation Services</span>
                </div>
            </Link>
         

            <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li className="nav-item"><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                <li className={`nav-item ${activeDropdown === 0 ? 'active' : ''}`}>
                    <span className="dropdown-trigger" onClick={() => toggleDropdown(0)}>About Us <ChevronDown size={14} strokeWidth={3} /></span>
                    <ul className="dropdown-menu">
                        <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About Company</Link></li>
                        <li><Link href="/why-choose-us" onClick={() => setIsMenuOpen(false)}>Why Choose Us</Link></li>
                    </ul>
                </li>
                <li className="nav-item"><Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                <li className="nav-item"><Link href="/partner-airlines" onClick={() => setIsMenuOpen(false)}>Partner Airlines</Link></li>
                <li className="nav-item"><Link href="/useful-tools" onClick={() => setIsMenuOpen(false)}>Useful Tools</Link></li>

                <li className={`nav-item ${activeDropdown === 1 ? 'active' : ''}`}>
                    <span className="dropdown-trigger" onClick={() => toggleDropdown(1)}>Pages <ChevronDown size={14} strokeWidth={3} /></span>
                    <ul className="dropdown-menu">
                        <li><Link href="/team" onClick={() => setIsMenuOpen(false)}>Team</Link></li>
                        <li><Link href="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
                    </ul>
                </li>



                <li className="nav-item"><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                <li className="nav-mobile-cta">
                    <a href="https://www.track-trace.com/aircargo" target="_blank" rel="noopener noreferrer" className="nav-track-btn" onClick={() => setIsMenuOpen(false)}>TRACK ORDER</a>
                </li>
            </ul>



            <div className="navbar-actions">
                <a href="https://www.track-trace.com/aircargo" target="_blank" rel="noopener noreferrer" className="nav-track-btn">TRACK ORDER</a>
            </div>
        </nav >
    );
};

export default Navbar;

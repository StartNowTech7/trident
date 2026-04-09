'use client';
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import '../styles/Contact.css';

import { supabase } from '../lib/supabase';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    // Eager load map on PC (> 768px), lazy load on mobile
    const [loadMap, setLoadMap] = React.useState(false);
    const mapRef = React.useRef(null);

    React.useEffect(() => {
        // Set initial loadMap state on client
        if (window.innerWidth > 768) {
            setLoadMap(true);
        }

        // If already loaded (PC), don't set up observer
        if (window.innerWidth > 768) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setLoadMap(true);
                observer.disconnect();
            }
        }, { rootMargin: '200px' }); // Start loading 200px before it comes into view

        if (mapRef.current) {
            observer.observe(mapRef.current);
        }

        return () => {
            if (mapRef.current) {
                observer.unobserve(mapRef.current);
            }
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Send Emails via Web3Forms API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    botcheck: formData.honeypot
                }),
            });

            const result = await response.json();

            if (!result.success) {
                console.error('Web3Forms Error:', result);
                throw new Error(result.message || 'Failed to send message');
            }

            setSuccess(true);
            setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        } catch (error) {
            console.error('Submission error:', error);
            alert(error.message || 'Error sending message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-badge">
                        <span className="dot"></span>
                        <span className="badge-text">GET IN TOUCH</span>
                    </div>
                    <h2>Ready to Fly Higher?</h2>
                    <p className="contact-intro">
                        Contact Trident Aviation Services today for world-class airline representation and cargo solutions.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon"><MapPin size={24} /></div>
                            <div className="contact-text">
                                <h4>Our Location</h4>
                                <p>SV35, No.35, Floor No.7, Unit #707,<br />
                                    Mao Tse Toung Blv, Phum 9,<br />
                                    Sangkat Boeung Keng Kang1,<br />
                                    Khan Boeung Keng Kang,<br />
                                    Phnom Penh, Cambodia</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><Phone size={24} /></div>
                            <div className="contact-text">
                                <h4>Phone Number</h4>
                                <p>
                                    <a href="tel:+94761277254" style={{ color: 'inherit', textDecoration: 'none' }}>+94 76 127 7254</a><br />
                                    <a href="tel:+85593712761" style={{ color: 'inherit', textDecoration: 'none' }}>+855 93 712 761</a>
                                </p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><Mail size={24} /></div>
                            <div className="contact-text">
                                <h4>Email Address</h4>
                                <p><a href="mailto:info@tasglobals.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@tasglobals.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div style={{ display: 'none' }}>
                            <label>Leave this field empty</label>
                            <input
                                type="text"
                                name="honeypot"
                                value={formData.honeypot || ''}
                                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                                tabIndex="-1"
                                autoComplete="off"
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                rows="4"
                                placeholder="How can we help you?"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%' }}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                        {success && (
                            <p style={{ color: '#C5A059', marginTop: '15px', textAlign: 'center', fontWeight: 'bold' }}>
                                Message sent successfully! We'll get back to you soon.
                            </p>
                        )}
                    </form>
                </div>
            </div>


            <div className="contact-map" ref={mapRef}>
                {loadMap ? (
                    <iframe
                        src="https://maps.google.com/maps?q=SV35,%20No.35,%20Mao%20Tse%20Toung%20Blvd,%20Phnom%20Penh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Trident Aviation Services Location"
                    ></iframe>
                ) : (
                    <div style={{
                        width: '100%',
                        height: '450px',
                        borderRadius: '12px',
                        backgroundColor: '#f3f4f6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
                    }}>
                        <div style={{ textAlign: 'center', color: '#9ca3af' }}>
                            <MapPin size={48} style={{ margin: '0 auto 10px', opacity: 0.5 }} />
                            <p>Loading Map...</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;

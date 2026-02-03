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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.from('messages').insert([formData]);
        setLoading(false);
        if (!error) {
            setSuccess(true);
            setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        } else {
            alert('Error sending message. Please try again.');
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <span className="section-subtitle" style={{ color: 'var(--color-secondary)' }}>Get In Touch</span>
                    <h2>Ready to Fly Higher?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '500px' }}>
                        Contact Trident Aviation Services today for world-class airline representation and cargo solutions.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon"><MapPin size={24} /></div>
                            <div className="contact-text">
                                <h4>Our Location</h4>
                                <p>Building 315, Canadia Bank Tower, Floor 18,<br />
                                    Office Number 1845 ResCo-work03,<br />
                                    Monivong Blvd., Corner of Ang Dong Street,<br />
                                    Phum 1, Sangkat Wat Phnom, Khan Daun Penh,<br />
                                    Phnom Penh Capital</p>
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
                                <p><a href="mailto:Sales@tasglobals.com" style={{ color: 'inherit', textDecoration: 'none' }}>Sales@tasglobals.com</a></p>
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

            <div className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.77066068364!2d104.91924157584102!3d11.568301544046183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951468171095d%3A0xe5469ad011884ea8!2sCanadia%20Bank%20Tower!5e0!3m2!1sen!2skh!4v1711123456789!5m2!1sen!2skh"
                    width="100%"
                    height="450"
                    style={{ border: 0, borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Trident Aviation Services Location"
                ></iframe>
            </div>
        </section>
    );
};

export default Contact;

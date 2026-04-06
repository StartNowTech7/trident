'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import PageHeader from '../components/PageHeader';
import '../styles/PartnerAirlines.css';
import { ExternalLink, Globe } from 'lucide-react';

const headerBg = '/images/partners.jpg';
const headerPcBg = '/images/partners.jpg';

const PartnerAirlines = () => {
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPartners = async () => {
            const { data, error } = await supabase
                .from('partners')
                .select('*')
                .order('order', { ascending: true });
            
            if (data) setPartners(data);
            setLoading(false);
        };

        fetchPartners();
    }, []);

    return (
        <div className="partner-page">
            <PageHeader 
                title="Partner Airlines"
                subtitle="Collaborations"
                mobileBgImage={headerBg}
                pcBgImage={headerPcBg}
            />

            {/* Introduction Section */}
            <section className="partner-intro">
                <div className="container">
                    <div className="intro-content">
                        <h2>Our Represented Carriers</h2>
                        <div className="divider"></div>
                        <p>
                            Trident Aviation Services takes pride in acting as a bridge between world-class 
                            airline carriers and the regional market. We currently manage representation, 
                            sales, and operational support for the following airlines.
                        </p>
                    </div>
                </div>
            </section>

            {/* Partners Grid */}
            <section className="partners-grid-section">
                <div className="container">
                    {loading ? (
                        <div className="loader-container">
                            <div className="loader"></div>
                        </div>
                    ) : (
                        <div className="partners-premium-grid">
                            {partners.map((partner) => (
                                <div key={partner.id} className="partner-glass-card">
                                    <div className="glass-card-header">
                                        <div className="plane-icon"><Globe size={18} /></div>
                                        <span className="carrier-label">Official Partner</span>
                                    </div>
                                    <div className="partner-logo-box">
                                        <img src={partner.logo_url} alt={partner.name} />
                                    </div>
                                    <div className="partner-info-box">
                                        <h3>{partner.name}</h3>
                                        <div className="card-divider"></div>
                                        {partner.website_url && (
                                            <a 
                                                href={partner.website_url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="glass-visit-btn"
                                            >
                                                Explore Partner <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {partners.length === 0 && !loading && (
                                <div className="no-data-msg">
                                    <p>No partner airlines found. Please check back later.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PartnerAirlines;

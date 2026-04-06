'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import '../styles/Partners.css';

const Partners = () => {
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

    if (loading || partners.length === 0) return null;

    return (
        <section className="partners-section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h4 style={{ color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', fontSize: '1rem', fontWeight: 'bold' }}>
                        Collaborations
                    </h4>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                        Our Partner Airlines
                    </h2>
                </div>
            </div>

            <div className="partners-wrapper">
                <div className="marquee-inner">
                    {/* Repeat multiple times to ensure full coverage and infinite loop */}
                    {[...Array(10)].map((_, groupIndex) => (
                        <React.Fragment key={groupIndex}>
                            {partners.map((partner) => (
                                <div key={`${partner.id}-${groupIndex}`} className="partner-card">
                                    <div className="partner-logo-wrapper">
                                        {partner.website_url ? (
                                            <a href={partner.website_url} target="_blank" rel="noopener noreferrer">
                                                <img src={partner.logo_url} alt={partner.name} title={partner.name} />
                                            </a>
                                        ) : (
                                            <img src={partner.logo_url} alt={partner.name} title={partner.name} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;

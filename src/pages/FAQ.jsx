import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { ChevronDown } from 'lucide-react';

import { supabase } from '../lib/supabase';
import faqHeaderImg from '../assets/images/faq-header.webp';
import faqPcHeaderImg from '../assets/images/faq-header.webp';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFaqs = async () => {
            const { data } = await supabase.from('faqs').select('*').order('order', { ascending: true });
            if (data && data.length > 0) {
                setFaqs(data);
            } else {
                // Fallback
                setFaqs([
                    {
                        question: "What is a General Sales Agent (GSA)?",
                        answer: "A GSA represents airlines in specific markets, handling passenger sales, marketing, and customer service on behalf of the airline."
                    }
                ]);
            }
            setLoading(false);
        };
        fetchFaqs();
    }, []);

    return (
        <>
            <SEO
                title="FAQ"
                description="Find answers to frequently asked questions about Trident Aviation Services, GSA services, cargo handling, and aviation solutions. Get the information you need."
                keywords="aviation FAQ, GSA questions, cargo services FAQ, aviation support questions, airline services FAQ"
            />
            <PageHeader
                title="FAQ"
                subtitle="Frequently Asked Questions"
                bgImage={faqHeaderImg}
                pcBgImage={faqPcHeaderImg}
            />
            {loading ? (
                <section style={{ padding: '120px 20px', backgroundColor: 'white', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>Loading FAQ...</div>
                    </div>
                </section>
            ) : (
                <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
                    <div className="container" style={{ maxWidth: '900px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '15px' }}>Common Questions</h2>
                            <p style={{ color: '#666' }}>Find answers to frequently asked questions about our services.</p>
                        </div>
                        <div>
                            {faqs.map((faq, index) => (
                                <div key={index} style={{
                                    marginBottom: '20px',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    overflow: 'hidden'
                                }}>
                                    <div
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        style={{
                                            padding: '20px',
                                            backgroundColor: openIndex === index ? 'var(--color-primary)' : 'white',
                                            color: openIndex === index ? 'white' : 'var(--color-primary)',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            fontWeight: '600',
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        <span>{faq.question}</span>
                                        <ChevronDown
                                            size={20}
                                            style={{
                                                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                                                transition: 'transform 0.3s'
                                            }}
                                        />
                                    </div>
                                    {openIndex === index && (
                                        <div style={{ padding: '20px', backgroundColor: '#f9fafb', color: '#666', lineHeight: '1.8' }}>
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default FAQ;

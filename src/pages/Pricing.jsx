import React from 'react';
import PageHeader from '../components/PageHeader';
import { Check } from 'lucide-react';
import headBg from '../assets/images/cargo-trends.jpg';
import pcHeadBg from '../assets/images/cta-bg.jpg';

const Pricing = () => {
    const plans = [
        {
            name: "GSA Basic",
            price: "Contact Us",
            features: [
                "Passenger Sales Representation",
                "Market Analysis",
                "Basic Customer Support",
                "Monthly Reporting"
            ]
        },
        {
            name: "GSA Premium",
            price: "Contact Us",
            featured: true,
            features: [
                "Full GSA Services",
                "Advanced Market Strategy",
                "24/7 Customer Support",
                "Weekly Reporting",
                "Brand Development"
            ]
        },
        {
            name: "CSA Package",
            price: "Contact Us",
            features: [
                "Cargo Sales Management",
                "Capacity Optimization",
                "Freight Forwarding Partnerships",
                "Performance Analytics"
            ]
        }
    ];

    return (
        <>
            <PageHeader
                title="Pricing"
                subtitle="Our Service Packages"
                bgImage={headBg}
                pcBgImage={pcHeadBg}
            />
            <section style={{ padding: '80px 20px', backgroundColor: '#f9fafb' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '15px' }}>Flexible Pricing Plans</h2>
                        <p style={{ color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                            Choose the package that best fits your airline's needs. All plans are customizable.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
                        {plans.map((plan, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                padding: '40px 30px',
                                borderRadius: '8px',
                                textAlign: 'center',
                                border: plan.featured ? '3px solid var(--color-secondary)' : '1px solid #e5e7eb',
                                position: 'relative',
                                transform: plan.featured ? 'scale(1.05)' : 'scale(1)',
                                boxShadow: plan.featured ? '0 10px 30px rgba(0,0,0,0.1)' : '0 5px 15px rgba(0,0,0,0.05)'
                            }}>
                                {plan.featured && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: 'var(--color-secondary)',
                                        color: 'white',
                                        padding: '5px 20px',
                                        borderRadius: '20px',
                                        fontSize: '0.85rem',
                                        fontWeight: '600'
                                    }}>
                                        POPULAR
                                    </div>
                                )}
                                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '10px' }}>{plan.name}</h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-secondary)', margin: '20px 0' }}>
                                    {plan.price}
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                                    {plan.features.map((feature, i) => (
                                        <li key={i} style={{ padding: '12px 0', borderBottom: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <Check size={18} color="#C5A059" />
                                            <span style={{ color: '#666' }}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                                    Get Started
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;

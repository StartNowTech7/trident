import React from 'react';
import PageHeader from '../components/PageHeader';
import { Calendar, User } from 'lucide-react';

// Local Image Imports
import blog1 from '../assets/images/aviation-1.jpg';
import blog2 from '../assets/images/cargo-trends.jpg';
import blog3 from '../assets/images/cta-bg.jpg';
import headBg from '../assets/images/aviation-2.jpg';
import pcHeadBg from '../assets/images/airline.jpg';

const Blog = () => {
    const blogPosts = [
        {
            title: "The Future of Aviation GSA Services",
            excerpt: "Exploring how technology and innovation are reshaping airline representation in emerging markets.",
            date: "Feb 1, 2026",
            author: "Trident Team",
            image: blog1
        },
        {
            title: "Cargo Sales Trends in Southeast Asia",
            excerpt: "An analysis of growing cargo demand and how CSA services are adapting to market changes.",
            date: "Jan 28, 2026",
            author: "Kushan Senabandu",
            image: blog2
        },
        {
            title: "Building Sustainable Aviation Partnerships",
            excerpt: "How Trident Aviation Services prioritizes sustainability and long-term growth for airline partners.",
            date: "Jan 25, 2026",
            author: "Trident Team",
            image: blog3
        }
    ];

    return (
        <>
            <PageHeader
                title="Blog"
                subtitle="News & Insights"
                bgImage={headBg}
                pcBgImage={pcHeadBg}
            />
            <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
                        {blogPosts.map((post, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ height: '220px', overflow: 'hidden' }}>
                                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '25px' }}>
                                    <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', fontSize: '0.85rem', color: '#999' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <Calendar size={14} /> {post.date}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <User size={14} /> {post.author}
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '10px' }}>{post.title}</h3>
                                    <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '15px' }}>{post.excerpt}</p>
                                    <a href="#" style={{ color: 'var(--color-secondary)', fontWeight: '600' }}>Read More →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;

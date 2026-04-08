'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '../../components/PageHeader';
import Link from 'next/link';
import { Search, ArrowRight, Home } from 'lucide-react';
import '../../styles/HomeSections.css'; // Leverage existing home styles for consistency

const SearchContent = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    // Mock search results for now, as we don't have a backend search index
    const results = [
        { title: 'About Trident Aviation', link: '/about', desc: 'Discover our mission, vision, and worldwide aviation presence.' },
        { title: 'Global Services', link: '/services', desc: 'World-class GSA & CSA services for modern airlines.' },
        { title: 'Partner Airlines', link: '/partner-airlines', desc: 'A comprehensive list of our global airline partners.' },
        { title: 'Useful Tools', link: '/useful-tools', desc: 'Aviation trackers, calculators, and industry resources.' },
        { title: 'Contact Us', link: '/contact', desc: 'Get in touch for professional aviation inquiries.' }
    ].filter(res => 
        query === '' || 
        res.title.toLowerCase().includes(query.toLowerCase()) || 
        res.desc.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <section className="search-results-section" style={{ padding: '80px 0', minHeight: '60vh' }}>
            <div className="container">
                <div className="search-info-bar" style={{ marginBottom: '40px', padding: '20px', background: 'rgba(26, 54, 93, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Search size={20} color="#c5a059" />
                        <span style={{ fontSize: '18px', fontWeight: '500', color: '#1a365d' }}>
                            {query ? `Results for "${query}"` : 'Looking for something?'}
                        </span>
                    </div>
                    <span style={{ fontSize: '14px', color: '#666' }}>{results.length} pages found</span>
                </div>

                <div className="results-list" style={{ display: 'grid', gap: '20px' }}>
                    {results.length > 0 ? (
                        results.map((item, idx) => (
                            <Link href={item.link} key={idx} className="result-card" style={{ textDecoration: 'none', display: 'block', padding: '25px', background: '#fff', borderRadius: '12px', border: '1px solid #eee', transition: 'all 0.3s ease', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div>
                                        <h3 style={{ margin: '0 0 8px 0', color: '#1a365d', fontSize: '20px' }}>{item.title}</h3>
                                        <p style={{ margin: '0', color: '#666', fontSize: '15px', lineHeight: '1.6' }}>{item.desc}</p>
                                    </div>
                                    <ArrowRight size={18} color="#c5a059" style={{ marginTop: '5px' }} />
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                            <div style={{ marginBottom: '20px' }}><Search size={48} color="#ddd" /></div>
                            <h3 style={{ color: '#1a365d', fontSize: '24px' }}>No matches found</h3>
                            <p style={{ color: '#666' }}>We couldn't find any content matching your search query. Please try searching for "Services" or "Contact".</p>
                            <Link href="/" className="btn btn-secondary" style={{ marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                <Home size={18} /> Return Home
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default function SearchPage() {
    return (
        <main className="search-page">
            <PageHeader 
                title="Search Results"
                subtitle="Aviation Network Search"
                pcBgImage="/images/hero-bg.webp"
                mobileBgImage="/images/hero-bg.webp"
            />
            <Suspense fallback={<div className="container" style={{ padding: '80px 0' }}>Loading...</div>}>
                <SearchContent />
            </Suspense>
        </main>
    );
}

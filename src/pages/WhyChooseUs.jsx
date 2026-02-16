import PageHeader from '../components/PageHeader';
import Image from 'next/image';
import { Shield, Globe, Users, Award } from 'lucide-react';
import '../styles/WhyChooseUs.css';
import Contact from '../sections/Contact';

const headBg = '/images/aviation-1.webp';
const specializedAviation = '/images/specialized-aviation.webp';
const globalExpertise = '/images/global-expertise.webp';
const aviationSupport = '/images/aviation-support.webp';
const ecoAviation = '/images/eco-aviation.webp';
const sectionBg = '/images/services-bg.webp';
const heroBg = '/images/whychoose.webp';

const WhyChooseUs = () => {
    return (
        <>
            <PageHeader
                title="Why Choose Us"
                subtitle="Your Trusted Aviation Partner Worldwide"
                bgImage={headBg}
                pcBgImage={heroBg}
            />

            <section className="usp-section">
                <div className="usp-parallax-bg" style={{ backgroundImage: `url(${sectionBg})` }}></div>
                <div className="usp-container">
                    <div className="usp-header">
                        <span className="section-subtitle">Our Unique Selling Proposition</span>
                        <h2>Excellence in Aviation Services</h2>
                        <p className="usp-intro">
                            Trident Aviation Services’ USP lies in its specialization as a trusted Airline GSA and CSA partner,
                            offering airlines a comprehensive and results-driven approach to passenger and cargo sales.
                        </p>
                    </div>

                    <div className="usp-path-container">
                        <div className="usp-step">
                            <div className="usp-content-wrapper">
                                <div className="usp-card">
                                    <div className="usp-icon-node">
                                        <Shield size={32} />
                                    </div>
                                    <div className="usp-card-img" style={{ position: 'relative', height: '200px' }}>
                                        <Image src={specializedAviation} alt="Specialized Aviation" fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <span className="usp-index">01</span>
                                    <h3>Generic vs. Specialized</h3>
                                    <p>
                                        Unlike generic service providers, we focus solely on aviation excellence—ensuring airlines achieve
                                        maximum market visibility and optimized cargo capacity. This focused approach positions Trident
                                        as a preferred global partner.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="usp-step">
                            <div className="usp-content-wrapper">
                                <div className="usp-card">
                                    <div className="usp-icon-node">
                                        <Globe size={32} />
                                    </div>
                                    <div className="usp-card-img" style={{ position: 'relative', height: '200px' }}>
                                        <Image src={globalExpertise} alt="Local Expertise" fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <span className="usp-index">02</span>
                                    <h3>Industry Overview</h3>
                                    <p>
                                        Operating within a dynamic aviation sector, we provide the local expertise and global reach
                                        airlines need. Our cargo sales ensure airlines maximize profitability while offering
                                        seamless solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="usp-step">
                            <div className="usp-content-wrapper">
                                <div className="usp-card">
                                    <div className="usp-icon-node">
                                        <Users size={32} />
                                    </div>
                                    <div className="usp-card-img" style={{ position: 'relative', height: '200px' }}>
                                        <Image src={aviationSupport} alt="Customer Support" fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <span className="usp-index">03</span>
                                    <h3>Customer Expectations</h3>
                                    <p>
                                        The modern aviation landscape demands 24/7 support and personalized solutions. We delivery
                                        world-class service through transparent communication and dedicated account management.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="usp-step">
                            <div className="usp-content-wrapper">
                                <div className="usp-card">
                                    <div className="usp-icon-node">
                                        <Award size={32} />
                                    </div>
                                    <div className="usp-card-img" style={{ position: 'relative', height: '200px' }}>
                                        <Image src={ecoAviation} alt="Cargo Innovation" fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <span className="usp-index">04</span>
                                    <h3>Sustainability & Innovation</h3>
                                    <p>
                                        We integrate forward-thinking strategies and environmentally responsible practices
                                        into our operations, aligning with the future of global aviation and digital transformation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
};

export default WhyChooseUs;

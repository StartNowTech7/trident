'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
    Calendar,
    Ticket,
    Plane,
    Car,
    ShieldCheck,
    Award,
    TrendingUp,
    Handshake,
    Lightbulb,
    Mail,
    MapPin,
    Sparkles,
    Compass,
    Facebook,
    Linkedin,
    Instagram,
    Share2,
} from 'lucide-react';
import '../styles/TravelsTours.css';

const TravelsTours = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        serviceInterest: 'Cambodia Tours',
        message: '',
        honeypot: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const scrollToInquiry = (interest) => {
        if (interest) {
            setFormData((prev) => ({
                ...prev,
                serviceInterest: interest,
            }));
        }
        const el = document.getElementById('travel-contact');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
            if (!accessKey) {
                window.location.href = `mailto:wilam@tasglobals.com?subject=${encodeURIComponent(
                    `Trident Travels & Tours - ${formData.serviceInterest}`
                )}&body=${encodeURIComponent(
                    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
                )}`;
                setSuccess(true);
                setLoading(false);
                return;
            }

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    subject: `Trident Travels & Tours: ${formData.serviceInterest}`,
                    message: formData.message,
                    botcheck: formData.honeypot,
                }),
            });

            const result = await response.json();
            if (!result.success) {
                throw new Error(result.message || 'Failed to send inquiry');
            }

            setSuccess(true);
            setFormData({
                name: '',
                email: '',
                serviceInterest: 'Cambodia Tours',
                message: '',
                honeypot: '',
            });
            setTimeout(() => setSuccess(false), 6000);
        } catch (error) {
            console.error('Inquiry submission error:', error);
            alert(error.message || 'Error sending inquiry. Please email wilam@tasglobals.com directly.');
        } finally {
            setLoading(false);
        }
    };

    const cambodiaCategories = [
        {
            title: 'Temple Tours',
            image: '/images/travels/cambodia-temple.jpg',
            alt: 'Ancient Khmer temple ruins in Cambodia',
        },
        {
            title: 'City Tours',
            image: '/images/travels/cambodia-city.jpg',
            alt: 'Royal Palace golden spires in Phnom Penh',
        },
        {
            title: 'Excursions',
            image: '/images/travels/cambodia-excursions.jpg',
            alt: 'Lush countryside waterfall excursion in Cambodia',
        },
        {
            title: 'Island Tours',
            image: '/images/travels/cambodia-island.jpg',
            alt: 'Tropical island beach on Koh Rong Sanloem in Cambodia',
        },
    ];

    const sriLankaCategories = [
        {
            title: 'Culture Tours',
            image: '/images/travels/srilanka-culture.jpg',
            alt: 'Sigiriya Rock Fortress and Sri Lankan heritage',
        },
        {
            title: 'Beach Leisure',
            image: '/images/travels/srilanka-beach.jpg',
            alt: 'Mirissa golden tropical beach in Sri Lanka',
        },
        {
            title: 'Excursions',
            image: '/images/travels/srilanka-excursions.jpg',
            alt: 'Scenic highland train over Nine Arch Bridge in Ella',
        },
        {
            title: 'Adventure Tours',
            image: '/images/travels/srilanka-adventure.jpg',
            alt: 'Wild Sri Lankan leopard in Yala National Park',
        },
    ];

    const values = [
        {
            title: 'Integrity',
            icon: <ShieldCheck size={24} />,
            desc: 'We build trust through honesty, responsibility, and transparency.',
        },
        {
            title: 'Quality',
            icon: <Award size={24} />,
            desc: 'We maintain high standards across every project and interaction.',
        },
        {
            title: 'Growth',
            icon: <TrendingUp size={24} />,
            desc: 'We constantly learn, improve, and develop our capabilities.',
        },
        {
            title: 'Collaboration',
            icon: <Handshake size={24} />,
            desc: 'We believe strong results come from working together.',
        },
        {
            title: 'Innovation',
            icon: <Lightbulb size={24} />,
            desc: 'We continuously explore better ways to define travel.',
        },
    ];

    const asiaDestinations = [
        {
            name: 'Vietnam',
            subtitle: 'Heritage & Ha Long',
            image: '/images/travels/asia-vietnam.jpg',
            tint: 'linear-gradient(to top, rgba(7, 31, 20, 0.85) 0%, rgba(0, 0, 0, 0.04) 48%)',
        },
        {
            name: 'Thailand',
            subtitle: 'Golden Temples & Isles',
            image: '/images/travels/asia-thailand.jpg',
            tint: 'linear-gradient(to top, rgba(7, 31, 20, 0.85) 0%, rgba(0, 0, 0, 0.04) 48%)',
        },
        {
            name: 'Laos',
            subtitle: 'Waterfalls & Serenity',
            image: '/images/travels/asia-laos.jpg',
            tint: 'linear-gradient(to top, rgba(7, 31, 20, 0.85) 0%, rgba(0, 0, 0, 0.04) 48%)',
        },
        {
            name: 'Indonesia',
            subtitle: 'Islands & Culture',
            image: '/images/travels/asia-indonesia.jpg',
            tint: 'linear-gradient(to top, rgba(7, 31, 20, 0.85) 0%, rgba(0, 0, 0, 0.04) 48%)',
        },
        {
            name: 'Malaysia',
            subtitle: 'Skylines & Rainforest',
            image: '/images/travels/asia-malaysia.jpg',
            tint: 'linear-gradient(to top, rgba(7, 31, 20, 0.85) 0%, rgba(0, 0, 0, 0.04) 48%)',
        },
        {
            name: 'China',
            subtitle: 'Dynasties & Peaks',
            image: '/images/travels/asia-china.jpg',
            tint: 'linear-gradient(to top, rgba(7, 31, 20, 0.85) 0%, rgba(0, 0, 0, 0.04) 48%)',
        },
    ];

    const travelServices = [
        {
            title: 'Cambodia Tours',
            image: '/images/travels/service-cambodia.jpg',
            desc: "We design and manage customized Cambodia tour packages, showcasing the country's culture, heritage, and unique experiences with seamless local support.",
        },
        {
            title: 'Sri Lanka Tours',
            image: '/images/travels/srilanka-excursions.jpg',
            desc: 'Experience the best of Sri Lanka with custom, tailor-made itineraries designed around your pace and interests. Our local experts handle every detail for an authentic, hassle-free journey.',
        },
        {
            title: 'Asia Tours',
            image: '/images/travels/service-asia.jpg',
            desc: 'Explore Asia with confidence. We assist with tailored tour packages across key Asian destinations, crafted to match your interests and travel style.',
        },
        {
            title: 'Ticketing',
            image: '/images/travels/service-ticketing.jpg',
            desc: 'We provide reliable international and domestic air ticketing services from Cambodia, ensuring smooth travel planning and competitive fares.',
        },
        {
            title: 'Responsible Tours',
            image: '/images/travels/service-responsible.jpg',
            desc: 'We are committed to responsible tourism, promoting sustainable travel practices that support local communities, preserve culture, and protect the environment.',
        },
    ];

    return (
        <div className="travels-page">
            {/* 1. Hero / Polaroid Landmark Showcase */}
            <section className="tt-hero">
                <div className="tt-hero-bg-image">
                    <Image
                        src="/images/travels/cta-angkor-sunset.jpg"
                        alt="Angkor Wat at dusk in Cambodia"
                        fill
                        priority
                        unoptimized
                    />
                </div>
                <div className="tt-container tt-hero-grid">
                    <div className="tt-hero-content">
                        <span className="tt-brand-tag">
                            <Compass size={16} /> Trident Aviation Extension
                        </span>
                        <h1>
                            Trident <span>Travels &amp; Tours</span>
                        </h1>
                        <p className="tt-hero-subtitle">
                            End-to-end travel management, bespoke ground tours, luxury itineraries,
                            and aviation-grade corporate mobility across Cambodia, Sri Lanka,
                            Southeast Asia, and beyond.
                        </p>
                        <div className="tt-hero-actions">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => scrollToInquiry('Cambodia Tours')}
                            >
                                Inquire Now
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => scrollToInquiry('Ticketing')}
                            >
                                Book a Ticket
                            </button>
                        </div>
                    </div>

                    <div className="tt-polaroid-cluster">
                        <div className="tt-polaroid tt-polaroid-left">
                            <div className="tt-polaroid-img">
                                <Image
                                    src="/images/travels/srilanka-culture.jpg"
                                    alt="Sigiriya Rock Fortress (Sri Lanka)"
                                    fill
                                    unoptimized
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="tt-polaroid-caption">
                                Sigiriya Rock Fortress
                                <br />
                                (Sri Lanka)
                            </div>
                        </div>

                        <div className="tt-polaroid tt-polaroid-right">
                            <div className="tt-polaroid-img">
                                <Image
                                    src="/images/travels/service-cambodia.jpg"
                                    alt="Angkor Wat Temple (Cambodia)"
                                    fill
                                    unoptimized
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="tt-polaroid-caption">
                                Angkor Wat Temple
                                <br />
                                (Cambodia)
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Our Story */}
            <section className="tt-story-section">
                <div className="tt-container tt-story-grid">
                    <div className="tt-story-text">
                        <span className="tt-pill">Our Story</span>
                        <h2>Trident Travels &amp; Tours</h2>
                        <p>
                            Trident Travels &amp; Tours operates as the dedicated travel extension
                            of Trident Aviation Services Co. Ltd. in Phnom Penh. Leveraging
                            aviation-grade logistics to deliver flawless ground tours, luxury
                            itineraries, and corporate mobility across Southeast Asia.
                        </p>
                        <p>
                            Trident Travels &amp; Tours provides end-to-end travel management,
                            ticketing services, and destination services driven by aviation-grade
                            operational precision. Based in Phnom Penh, we deliver seamless mobility
                            solutions for corporate clients, luxury travelers, and individual
                            tourists across Cambodia, Sri Lanka, Southeast Asia, and beyond.
                        </p>
                        <blockquote className="tt-story-quote">
                            &lsquo;Take the Step. Live the Journey&rsquo;
                        </blockquote>
                    </div>

                    <div className="tt-story-image">
                        <Image
                            src="/images/travels/cambodia-dancer.jpg"
                            alt="Traditional Cambodian Apsara dancers"
                            fill
                            unoptimized
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            {/* 3. Cambodia - Journey to Inspiration */}
            <section className="tt-cambodia-split">
                <div className="tt-split-image">
                    <Image
                        src="/images/travels/cambodia-tuktuk.jpg"
                        alt="Cambodia Tuk-Tuk Journey"
                        fill
                        unoptimized
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="tt-split-content">
                    <div>
                        <span className="tt-pill">Cambodia</span>
                    </div>
                    <h2>Journey to Inspiration!</h2>
                    <p>
                        Cambodia is a land where ancient temples, rich traditions, and warm
                        hospitality come together to create unforgettable journeys. From the iconic
                        Angkor Wat at sunrise to peaceful countryside and vibrant local life, every
                        moment tells a story.
                    </p>
                    <p>
                        As a local travel agency in Cambodia, we craft authentic experiences that go
                        beyond sightseeing connecting you with the culture, people, and hidden
                        wonders of this remarkable country. Travel with us and turn your journey
                        into a story worth telling.
                    </p>

                    <div className="tt-split-footer">
                        <div className="tt-split-buttons">
                            <button
                                type="button"
                                className="tt-btn-outline-light"
                                onClick={() => scrollToInquiry('Cambodia Tours')}
                            >
                                Inquire now
                            </button>
                            <button
                                type="button"
                                className="tt-btn-outline-light"
                                onClick={() => scrollToInquiry('Ticketing')}
                            >
                                Book a Ticket
                            </button>
                        </div>

                        <div className="tt-travel-icons">
                            <div className="tt-travel-icon-item">
                                <Calendar size={22} />
                                <span>Tailored Itineraries</span>
                            </div>
                            <div className="tt-travel-icon-item">
                                <Ticket size={22} />
                                <span>Air Ticketing</span>
                            </div>
                            <div className="tt-travel-icon-item">
                                <Plane size={22} />
                                <span>Aviation Logistics</span>
                            </div>
                            <div className="tt-travel-icon-item">
                                <Car size={22} />
                                <span>Private Transfers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Explore Cambodia */}
            <section className="tt-explore-section">
                <div className="tt-container">
                    <div className="tt-section-pill-header">
                        <span className="tt-pill tt-pill-white">Explore Cambodia</span>
                    </div>
                    <div className="tt-explore-grid">
                        {cambodiaCategories.map((item) => (
                            <div
                                key={item.title}
                                className="tt-explore-card"
                                onClick={() => scrollToInquiry(`Cambodia - ${item.title}`)}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    unoptimized
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="tt-explore-overlay">
                                    <span className="tt-card-label">{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Our Values */}
            <section className="tt-values-section">
                <div className="tt-container">
                    <div className="tt-values-header">
                        <div>
                            <span className="tt-pill tt-pill-dark" style={{ marginBottom: '14px' }}>
                                Who We Are
                            </span>
                            <h2>Our Values</h2>
                        </div>
                        <p>
                            Guided by aviation-grade precision and authentic local hospitality across
                            every journey we design.
                        </p>
                    </div>
                    <div className="tt-values-grid">
                        {values.map((val) => (
                            <div key={val.title} className="tt-value-card">
                                <div className="tt-value-icon">{val.icon}</div>
                                <h3>{val.title}</h3>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Explore Sri Lanka */}
            <section className="tt-explore-section tt-explore-alt">
                <div className="tt-container">
                    <div className="tt-section-pill-header">
                        <span className="tt-pill tt-pill-white">Explore Sri Lanka</span>
                    </div>
                    <div className="tt-explore-grid">
                        {sriLankaCategories.map((item) => (
                            <div
                                key={item.title}
                                className="tt-explore-card"
                                onClick={() => scrollToInquiry(`Sri Lanka - ${item.title}`)}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    unoptimized
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="tt-explore-overlay">
                                    <span className="tt-card-label">{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. LUXURY */}
            <section className="tt-luxury-section">
                <div className="tt-container">
                    <div className="tt-luxury-header">
                        <span className="tt-pill">
                            <Sparkles
                                size={15}
                                style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }}
                            />
                            LUXURY
                        </span>
                        <p>
                            Indulge in the extraordinary with our ultra-personalized luxury travel
                            experiences across Sri Lanka and Cambodia. We curate private, seamless
                            journeys combining five-star heritage resorts, exclusive cultural access,
                            and white-glove concierge service crafted entirely around your desires.
                        </p>
                    </div>

                    <div className="tt-luxury-grid">
                        <div className="tt-luxury-card">
                            <div className="tt-luxury-img">
                                <Image
                                    src="/images/travels/luxury-srilanka.jpg"
                                    alt="Sri Lanka: Island Elegance & Untamed Luxury"
                                    fill
                                    unoptimized
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="tt-luxury-body">
                                <h3>Sri Lanka: Island Elegance &amp; Untamed Luxury</h3>
                                <p>
                                    Stay in colonial tea-estate bungalows, private coastal villas,
                                    and luxury tented safari camps. Enjoy private helicopter
                                    transfers, after-hours temple blessings, and bespoke wildlife
                                    expeditions in Yala.
                                </p>
                            </div>
                        </div>

                        <div className="tt-luxury-card">
                            <div className="tt-luxury-img">
                                <Image
                                    src="/images/travels/luxury-cambodia.jpg"
                                    alt="Cambodia: Timeless Heritage & Exclusive Access"
                                    fill
                                    unoptimized
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="tt-luxury-body">
                                <h3>Cambodia: Timeless Heritage &amp; Exclusive Access</h3>
                                <p>
                                    Experience Angkor Wat at sunrise with private scholar guides,
                                    stay in iconic ultra-luxury retreats, and unwind on secluded
                                    private islands along the Koh Rong archipelago with bespoke
                                    yacht charters.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Discover Asia */}
            <section className="tt-asia-section">
                <div className="tt-container">
                    <div className="tt-section-pill-header">
                        <span className="tt-pill tt-pill-white">Discover Asia</span>
                    </div>
                    <div className="tt-asia-grid">
                        {asiaDestinations.map((dest) => (
                            <div
                                key={dest.name}
                                className="tt-asia-card"
                                onClick={() => scrollToInquiry(`Asia Tours - ${dest.name}`)}
                            >
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    unoptimized
                                    style={{ objectFit: 'cover' }}
                                />
                                <div
                                    className="tt-asia-overlay"
                                    style={{ background: dest.tint }}
                                >
                                    <span className="tt-asia-name">{dest.name}</span>
                                    <span className="tt-asia-tag">{dest.subtitle}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Our Services */}
            <section className="tt-services-section">
                <div className="tt-container">
                    <div className="tt-section-pill-header">
                        <span className="tt-pill">Our Services</span>
                    </div>
                    <div className="tt-services-grid">
                        {travelServices.map((svc) => (
                            <div key={svc.title} className="tt-service-card">
                                <div className="tt-service-img">
                                    <Image
                                        src={svc.image}
                                        alt={svc.title}
                                        fill
                                        unoptimized
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="tt-service-body">
                                    <h3>{svc.title}</h3>
                                    <p>{svc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="tt-book-now-wrap">
                        <button
                            type="button"
                            className="tt-pill"
                            style={{ cursor: 'pointer', fontSize: '1rem', padding: '12px 40px' }}
                            onClick={() => scrollToInquiry('Cambodia Tours')}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </section>

            {/* 10. Contact & Booking CTA Banner */}
            <section className="tt-contact-banner" id="travel-contact">
                <div className="tt-contact-bg">
                    <Image
                        src="/images/travels/cta-angkor-sunset.jpg"
                        alt="Take the step with us today"
                        fill
                        unoptimized
                        style={{ objectFit: 'cover', objectPosition: 'center 45%' }}
                    />
                </div>
                <div className="tt-container tt-contact-grid">
                    <div className="tt-contact-copy">
                        <h2>Take the step with us today, and truly live the journey!</h2>
                        <span className="tt-pill">Contact</span>

                        <div className="tt-contact-details">
                            <div className="tt-contact-block">
                                <h4>Email</h4>
                                <a href="mailto:wilam@tasglobals.com">
                                    <Mail
                                        size={18}
                                        style={{
                                            display: 'inline',
                                            verticalAlign: 'middle',
                                            marginRight: '8px',
                                        }}
                                    />
                                    wilam@tasglobals.com
                                </a>
                            </div>

                            <div className="tt-contact-block">
                                <h4>Base Office</h4>
                                <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.98rem' }}>
                                    <MapPin
                                        size={16}
                                        style={{
                                            display: 'inline',
                                            verticalAlign: 'middle',
                                            marginRight: '6px',
                                            color: 'var(--color-secondary)',
                                        }}
                                    />
                                    Phnom Penh, Cambodia
                                </p>
                            </div>

                            <div className="tt-contact-block">
                                <h4>Social</h4>
                                <div className="tt-social-row">
                                    <a
                                        href="https://www.facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        className="tt-social-btn"
                                    >
                                        <Facebook size={18} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        className="tt-social-btn"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="tt-social-btn"
                                    >
                                        <Instagram size={18} />
                                    </a>
                                    <a
                                        href="https://www.pinterest.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Pinterest"
                                        className="tt-social-btn"
                                    >
                                        <Share2 size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tt-inquiry-card">
                        <h3>Plan Your Journey</h3>
                        <p className="tt-form-sub">
                            Share your travel dates, destination, or ticketing request and our
                            Phnom Penh team will respond promptly.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="tt-form-group">
                                <label htmlFor="tt-name">Full Name</label>
                                <input
                                    id="tt-name"
                                    type="text"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    required
                                />
                            </div>
                            <div className="tt-form-group">
                                <label htmlFor="tt-email">Email Address</label>
                                <input
                                    id="tt-email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    required
                                />
                            </div>
                            <div className="tt-form-group">
                                <label htmlFor="tt-interest">Travel Service</label>
                                <select
                                    id="tt-interest"
                                    value={formData.serviceInterest}
                                    onChange={(e) =>
                                        setFormData({ ...formData, serviceInterest: e.target.value })
                                    }
                                >
                                    <option value="Cambodia Tours">Cambodia Tours</option>
                                    <option value="Cambodia - Temple Tours">Cambodia - Temple Tours</option>
                                    <option value="Cambodia - City Tours">Cambodia - City Tours</option>
                                    <option value="Cambodia - Excursions">Cambodia - Excursions</option>
                                    <option value="Cambodia - Island Tours">Cambodia - Island Tours</option>
                                    <option value="Sri Lanka Tours">Sri Lanka Tours</option>
                                    <option value="Sri Lanka - Culture Tours">Sri Lanka - Culture Tours</option>
                                    <option value="Sri Lanka - Beach Leisure">Sri Lanka - Beach Leisure</option>
                                    <option value="Sri Lanka - Excursions">Sri Lanka - Excursions</option>
                                    <option value="Sri Lanka - Adventure Tours">Sri Lanka - Adventure Tours</option>
                                    <option value="Luxury Experiences">Luxury Experiences</option>
                                    <option value="Asia Tours">Asia Tours</option>
                                    <option value="Asia Tours - Vietnam">Asia Tours - Vietnam</option>
                                    <option value="Asia Tours - Thailand">Asia Tours - Thailand</option>
                                    <option value="Asia Tours - Laos">Asia Tours - Laos</option>
                                    <option value="Asia Tours - Indonesia">Asia Tours - Indonesia</option>
                                    <option value="Asia Tours - Malaysia">Asia Tours - Malaysia</option>
                                    <option value="Asia Tours - China">Asia Tours - China</option>
                                    <option value="Ticketing">Air Ticketing</option>
                                    <option value="Responsible Tours">Responsible Tours</option>
                                </select>
                            </div>
                            <div style={{ display: 'none' }}>
                                <input
                                    type="text"
                                    name="honeypot"
                                    value={formData.honeypot}
                                    onChange={(e) =>
                                        setFormData({ ...formData, honeypot: e.target.value })
                                    }
                                    tabIndex="-1"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="tt-form-group">
                                <label htmlFor="tt-message">Travel Details / Message</label>
                                <textarea
                                    id="tt-message"
                                    rows="4"
                                    placeholder="Tell us about your preferred destinations, dates, group size, or ticket route..."
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn btn-primary"
                                style={{ width: '100%' }}
                            >
                                {loading ? 'Submitting...' : 'Send Travel Inquiry'}
                            </button>
                            {success && (
                                <div className="tt-form-success">
                                    Thank you! Your inquiry has been received. Our team will reach out
                                    shortly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TravelsTours;


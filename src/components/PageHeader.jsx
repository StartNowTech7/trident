'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../styles/PageHeader.css';
import defaultBg from '../assets/images/cta-bg.webp';

const PageHeader = ({ title, subtitle, bgImage, pcBgImage, mobileBgImage }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <header className="page-header">
            <div className={`header-image-container ${imageLoaded ? 'loaded' : ''}`}>
                <Image
                    src={pcBgImage || bgImage || defaultBg}
                    alt={title}
                    fill
                    priority
                    unoptimized={true}
                    onLoad={() => setImageLoaded(true)}
                    style={{ objectFit: 'cover' }}
                    className={`header-bg pc-header-bg ${imageLoaded ? 'loaded' : ''}`}
                />
                <Image
                    src={mobileBgImage || bgImage || defaultBg}
                    alt={title}
                    fill
                    priority
                    unoptimized={true}
                    onLoad={() => setImageLoaded(true)}
                    style={{ objectFit: 'cover' }}
                    className={`header-bg mobile-header-bg ${imageLoaded ? 'loaded' : ''}`}
                />
            </div>
            <div className="header-overlay"></div>
            <div className="page-header-content">
                <h1 style={{ animation: 'none', transition: 'none', transform: 'none', opacity: 1 }}>{title}</h1>
                <div className="breadcrumb" style={{ animation: 'none', transition: 'none', transform: 'none', opacity: 1 }}>
                    Home <span>/</span> {subtitle || title}
                </div>
            </div>
        </header>
    );
};

export default PageHeader;

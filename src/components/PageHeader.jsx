import React, { useState, useEffect } from 'react';
import '../styles/PageHeader.css';
import defaultBg from '../assets/images/cta-bg.webp';

const PageHeader = ({ title, subtitle, bgImage, pcBgImage, mobileBgImage }) => {
    const [currentImage, setCurrentImage] = useState(bgImage || defaultBg);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            const newImage = isMobile
                ? (mobileBgImage || bgImage || defaultBg)
                : (pcBgImage || bgImage || defaultBg);
            setCurrentImage(newImage);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [bgImage, pcBgImage, mobileBgImage]);

    return (
        <div className="page-header">
            <div className="page-header-bg-wrapper">
                <img
                    src={currentImage}
                    alt={title}
                    className="page-header-bg"
                    fetchPriority="high"
                    loading="eager"
                />
            </div>
            <div className="page-header-overlay"></div>
            <div className="page-header-content">
                <h1>{title}</h1>
                <div className="breadcrumb">
                    Home <span>/</span> {subtitle || title}
                </div>
            </div>
        </div>
    );
};

export default PageHeader;


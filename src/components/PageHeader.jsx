import React, { useState, useEffect } from 'react';
import '../styles/PageHeader.css';
import defaultBg from '../assets/images/cta-bg.webp';

const PageHeader = ({ title, subtitle, bgImage, pcBgImage, mobileBgImage }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    // Set initial image based on screen size immediately
    const getInitialImage = () => {
        const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
        return isMobile
            ? (mobileBgImage || bgImage || defaultBg)
            : (pcBgImage || bgImage || defaultBg);
    };

    const [currentImage, setCurrentImage] = useState(getInitialImage);

    useEffect(() => {
        // Reset loaded state when image changes
        setImageLoaded(false);

        // Preload the image
        const img = new Image();
        img.src = currentImage;
        if (img.complete) {
            setImageLoaded(true);
        } else {
            img.onload = () => setImageLoaded(true);
        }

        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            const newImage = isMobile
                ? (mobileBgImage || bgImage || defaultBg)
                : (pcBgImage || bgImage || defaultBg);

            if (newImage !== currentImage) {
                setImageLoaded(false);
                setCurrentImage(newImage);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [bgImage, pcBgImage, mobileBgImage, currentImage]);

    return (
        <div className="page-header">
            <div className={`page-header-bg-wrapper ${imageLoaded ? 'loaded' : 'loading'}`}>
                <img
                    src={currentImage}
                    alt={title}
                    className="page-header-bg"
                    fetchPriority="high"
                    loading="eager"
                    onLoad={() => setImageLoaded(true)}
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

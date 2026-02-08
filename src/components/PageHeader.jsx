import React, { useState, useEffect } from 'react';
import '../styles/PageHeader.css';
import defaultBg from '../assets/images/cta-bg.jpg';

const PageHeader = ({ title, subtitle, bgImage, pcBgImage, mobileBgImage }) => {
    // Initialize as false to show loading state until image is ready
    const [imageLoaded, setImageLoaded] = useState(false);
    const [currentImage, setCurrentImage] = useState(bgImage || defaultBg);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            const newImage = isMobile
                ? (mobileBgImage || bgImage || defaultBg)
                : (pcBgImage || bgImage || defaultBg);
            setCurrentImage(newImage);

            setImageLoaded(false); // Always start as loading when image changes
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [bgImage, pcBgImage, mobileBgImage]);

    useEffect(() => {
        // Preload logic for mobile
        if (window.innerWidth <= 768) {
            const img = new Image();
            img.src = currentImage;
            if (img.complete) {
                setImageLoaded(true);
            } else {
                img.onload = () => setImageLoaded(true);
            }
        }
    }, [currentImage]);

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

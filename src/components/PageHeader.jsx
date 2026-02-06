import React, { useState, useEffect } from 'react';
import '../styles/PageHeader.css';
import defaultBg from '../assets/images/cta-bg.jpg';

const PageHeader = ({ title, subtitle, bgImage }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const imageSrc = bgImage || defaultBg;

    useEffect(() => {
        // Reset loading state when image changes
        setImageLoaded(false);

        // Preload the image
        const img = new Image();
        img.src = imageSrc;

        if (img.complete) {
            // Image is already cached
            setImageLoaded(true);
        } else {
            img.onload = () => setImageLoaded(true);
        }
    }, [imageSrc]);

    return (
        <div className="page-header">
            <div className={`page-header-bg-wrapper ${imageLoaded ? 'loaded' : 'loading'}`}>
                <img
                    src={imageSrc}
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

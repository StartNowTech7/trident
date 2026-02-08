import React from 'react';
import '../styles/PageLoader.css';
import logo from '../assets/logo.webp';

const PageLoader = () => {
    return (
        <div className="page-loader">
            <div className="loader-content">
                <img src={logo} alt="Trident Aviation" className="loader-logo" />
                <div className="loader-spinner"></div>
            </div>
        </div>
    );
};

export default PageLoader;

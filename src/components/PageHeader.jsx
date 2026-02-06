import React from 'react';
import '../styles/PageHeader.css';
import defaultBg from '../assets/images/cta-bg.jpg';

const PageHeader = ({ title, subtitle, bgImage }) => {
    return (
        <div className="page-header">
            <img
                src={bgImage || defaultBg}
                alt={title}
                className="page-header-bg"
                fetchPriority="high"
            />
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

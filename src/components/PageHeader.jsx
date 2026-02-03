import React from 'react';
import '../styles/PageHeader.css';
import defaultBg from '../assets/images/cta-bg.jpg';

const PageHeader = ({ title, subtitle, bgImage }) => {
    return (
        <div
            className="page-header"
            style={{ backgroundImage: `url(${bgImage || defaultBg})` }}
        >
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

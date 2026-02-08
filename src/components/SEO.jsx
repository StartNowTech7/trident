import { useEffect } from 'react';

const SEO = ({
    title,
    description,
    keywords,
    ogImage = '/logonew.png',
    ogType = 'website',
    headerImage // Add this prop to preload header images
}) => {
    const siteUrl = 'https://trident-aviation.vercel.app'; // Update with your actual domain
    const fullTitle = title ? `${title} | Trident Aviation Services` : 'Trident Aviation Services - Professional Aviation Solutions';

    useEffect(() => {
        // Update document title
        document.title = fullTitle;

        // Helper function to update or create meta tags
        const updateMetaTag = (attr, attrValue, content) => {
            let element = document.querySelector(`meta[${attr}="${attrValue}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, attrValue);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Primary Meta Tags
        updateMetaTag('name', 'title', fullTitle);
        updateMetaTag('name', 'description', description);
        if (keywords) {
            updateMetaTag('name', 'keywords', keywords);
        }

        // Open Graph / Facebook
        updateMetaTag('property', 'og:type', ogType);
        updateMetaTag('property', 'og:url', window.location.href);
        updateMetaTag('property', 'og:title', fullTitle);
        updateMetaTag('property', 'og:description', description);
        updateMetaTag('property', 'og:image', `${siteUrl}${ogImage}`);
        updateMetaTag('property', 'og:site_name', 'Trident Aviation Services');

        // Twitter
        updateMetaTag('property', 'twitter:card', 'summary_large_image');
        updateMetaTag('property', 'twitter:url', window.location.href);
        updateMetaTag('property', 'twitter:title', fullTitle);
        updateMetaTag('property', 'twitter:description', description);
        updateMetaTag('property', 'twitter:image', `${siteUrl}${ogImage}`);

        // Additional SEO Tags
        updateMetaTag('name', 'robots', 'index, follow');
        updateMetaTag('name', 'language', 'English');
        updateMetaTag('name', 'author', 'Trident Aviation Services');

        // Update canonical link
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', window.location.href);

        // Preload header image if provided
        if (headerImage) {
            let preloadLink = document.querySelector(`link[rel="preload"][href="${headerImage}"]`);
            if (!preloadLink) {
                preloadLink = document.createElement('link');
                preloadLink.setAttribute('rel', 'preload');
                preloadLink.setAttribute('as', 'image');
                preloadLink.setAttribute('href', headerImage);
                preloadLink.setAttribute('fetchpriority', 'high');
                document.head.appendChild(preloadLink);
            }
        }

    }, [fullTitle, description, keywords, ogImage, ogType, siteUrl, headerImage]);

    return null;
};

export default SEO;

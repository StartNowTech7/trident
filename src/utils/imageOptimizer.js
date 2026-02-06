/**
 * Image optimization utilities for better loading performance
 */

/**
 * Preload critical images to improve perceived performance
 * @param {string} imageUrl - URL of the image to preload
 */
export const preloadImage = (imageUrl) => {
    if (typeof window === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imageUrl;
    document.head.appendChild(link);
};

/**
 * Preload multiple images
 * @param {string[]} imageUrls - Array of image URLs to preload
 */
export const preloadImages = (imageUrls) => {
    imageUrls.forEach(url => preloadImage(url));
};

/**
 * Load image with promise for better control
 * @param {string} src - Image source URL
 * @returns {Promise<HTMLImageElement>}
 */
export const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
};

/**
 * Check if image is cached in browser
 * @param {string} src - Image source URL
 * @returns {boolean}
 */
export const isImageCached = (src) => {
    const img = new Image();
    img.src = src;
    return img.complete;
};

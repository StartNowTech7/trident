import { Outfit } from 'next/font/google';
import '../index.css';
import LayoutWrapper from '../components/LayoutWrapper';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
    metadataBase: new URL('https://www.tasglobals.com'),
    title: {
        default: 'Trident Aviation Services - Professional Aviation Solutions',
        template: '%s | Trident Aviation Services'
    },
    description: 'Trident Aviation Services provides world-class Airline GSA & CSA services, connecting airlines with markets and customers through reliable, innovative solutions.',
    keywords: ['aviation services', 'GSA', 'CSA', 'airline representation', 'cargo sales', 'aviation solutions'],
    authors: [{ name: 'Trident Aviation Services' }],
    creator: 'Trident Aviation Services',
    publisher: 'Trident Aviation Services',
    alternates: {
        canonical: '/',
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
            { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
        ],
        shortcut: '/favicon.png',
        apple: [
            { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            {
                rel: 'search',
                type: 'application/opensearchdescription+xml',
                url: '/opensearch.xml',
                title: 'Trident Aviation Search',
            },
        ],
    },
    openGraph: {
        title: 'Trident Aviation Services',
        description: 'Professional Aviation GSA & CSA Services',
        url: 'https://www.tasglobals.com',
        siteName: 'Trident Aviation Services',
        images: [
            {
                url: '/images/logo.webp',
                width: 800,
                height: 600,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trident Aviation Services',
        description: 'Professional Aviation GSA & CSA Services',
        images: ['/images/logo.webp'],
    },
    manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': 'https://www.tasglobals.com/#organization',
                name: 'Trident Aviation Services',
                alternateName: ['Trident Aviation', 'Trident Aviation Service', 'TAS'],
                url: 'https://www.tasglobals.com',
                logo: '/favicon.png',
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+94 11 234 5678',
                    contactType: 'customer service'
                }
            },
            {
                '@type': 'WebSite',
                '@id': 'https://www.tasglobals.com/#website',
                url: 'https://www.tasglobals.com',
                name: 'Trident Aviation Services',
                alternateName: ['Trident Aviation', 'TAS'],
                image: '/favicon.png',
                potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://www.tasglobals.com/search?q={search_term_string}',
                    'query-input': 'required name=search_term_string'
                }
            }
        ]
    };

    return (
        <html lang="en">
            <body className={outfit.className}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <LayoutWrapper>{children}</LayoutWrapper>
            </body>
        </html>
    );
}

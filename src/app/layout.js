import { Outfit } from 'next/font/google';
import '../index.css';
import LayoutWrapper from '../components/LayoutWrapper';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
    metadataBase: new URL('https://trident-aviation.vercel.app'),
    title: {
        default: 'Trident Aviation Services - Professional Aviation Solutions',
        template: '%s | Trident Aviation Services'
    },
    description: 'Trident Aviation Services provides world-class Airline GSA & CSA services, connecting airlines with markets and customers through reliable, innovative solutions.',
    keywords: ['aviation services', 'GSA', 'CSA', 'airline representation', 'cargo sales', 'aviation solutions'],
    authors: [{ name: 'Trident Aviation Services' }],
    creator: 'Trident Aviation Services',
    publisher: 'Trident Aviation Services',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: '/icon.png',
        shortcut: '/icon.png',
        apple: '/icon.png',
    },
    openGraph: {
        title: 'Trident Aviation Services',
        description: 'Professional Aviation GSA & CSA Services',
        url: 'https://trident-aviation.vercel.app',
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
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                <LayoutWrapper>{children}</LayoutWrapper>
            </body>
        </html>
    );
}

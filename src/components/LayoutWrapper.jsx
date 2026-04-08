'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutWrapper = ({ children }) => {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith('/trident-admin-panel');

    return (
        <>
            {!isAdminRoute && <Navbar />}
            <main>{children}</main>
            {!isAdminRoute && <Footer />}
        </>
    );
};

export default LayoutWrapper;

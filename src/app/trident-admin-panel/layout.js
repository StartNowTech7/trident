'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';

export default function AdminLayout({ children }) {
    const [session, setSession] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const router = useRouter();

    React.useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
            if (!session) {
                router.push('/trident-admin-panel/login');
            }
        });

        // Listen for auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            if (!session) {
                router.push('/trident-admin-panel/login');
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    if (loading) {
        return (
            <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6' }}>
                <p style={{ color: '#666' }}>Loading...</p>
            </div>
        );
    }

    if (!session) return null;

    // Don't wrap in AdminLayout here — each page handles its own layout
    return <>{children}</>;
}

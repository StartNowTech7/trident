'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import Login from '../../pages/admin/Login';

export default function AdminLayout({ children }) {
    const [session, setSession] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const router = useRouter();

    React.useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (!session) return <Login />;

    return <>{children}</>;
}

'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import '../../styles/Admin.css';

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'info@tasglobals.com';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Access Restriction: Only allow the authorized admin email
        if (email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
            setError('Access Denied: Only authorized administrators can sign in.');
            setLoading(false);
            return;
        }

        try {
            const { data, error: loginError } = await supabase.auth.signInWithPassword({
                email: email.toLowerCase(),
                password: password,
            });

            if (loginError) throw loginError;

            if (data.session) {
                router.refresh();
                router.push('/trident-admin-panel/dashboard');
            }
        } catch (err) {
            setError(err.message || 'Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f4f6',
            padding: '20px'
        }}>
            <div className="admin-card" style={{ width: '100%', maxWidth: '400px' }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', fontWeight: '800' }}>Trident Admin</h2>
                    <p style={{ color: '#666' }}>Sign in to your administrator account</p>
                </div>

                {error && (
                    <div style={{
                        padding: '12px',
                        backgroundColor: '#fee2e2',
                        color: '#b91c1c',
                        borderRadius: '6px',
                        marginBottom: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid #fecaca'
                    }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>Admin Email</label>
                        <input
                            type="email"
                            placeholder="admin@tasglobals.com"
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '2px solid #e5e7eb',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                transition: 'border-color 0.2s'
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '30px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151' }}>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '2px solid #e5e7eb',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                transition: 'border-color 0.2s'
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="admin-btn admin-btn-primary"
                        style={{ width: '100%', padding: '14px', borderRadius: '8px', fontWeight: '700' }}
                    >
                        {loading ? 'Authenticating...' : 'Sign In'}
                    </button>
                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <p style={{ fontSize: '0.85rem', color: '#666' }}>
                            Restricted access for <strong>{ADMIN_EMAIL}</strong>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

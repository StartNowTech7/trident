import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { supabase } from '../../lib/supabase';
import { Plane, Users, CircleHelp, MessageSquare } from 'lucide-react';

const Dashboard = () => {
    const [stats, setStats] = useState({
        services: 0,
        team: 0,
        faqs: 0,
        messages: 0
    });

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        const [services, team, faqs, messages] = await Promise.all([
            supabase.from('services').select('*', { count: 'exact', head: true }),
            supabase.from('team').select('*', { count: 'exact', head: true }),
            supabase.from('faqs').select('*', { count: 'exact', head: true }),
            supabase.from('messages').select('*', { count: 'exact', head: true })
        ]);

        setStats({
            services: services.count || 0,
            team: team.count || 0,
            faqs: faqs.count || 0,
            messages: messages.count || 0
        });
    };

    const statCards = [
        { label: 'Total Services', value: stats.services, icon: <Plane size={24} />, color: '#0A3D26' },
        { label: 'Team Members', value: stats.team, icon: <Users size={24} />, color: '#C5A059' },
        { label: 'Total FAQs', value: stats.faqs, icon: <CircleHelp size={24} />, color: '#0A3D26' },
        { label: 'Unread Messages', value: stats.messages, icon: <MessageSquare size={24} />, color: '#C5A059' },
    ];

    return (
        <AdminLayout>
            <div className="admin-header">
                <h1>Dashboard Overview</h1>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                {statCards.map((stat, index) => (
                    <div key={index} className="admin-card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{
                            padding: '15px',
                            backgroundColor: stat.color + '15',
                            color: stat.color,
                            borderRadius: '12px'
                        }}>
                            {stat.icon}
                        </div>
                        <div>
                            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '5px' }}>{stat.label}</p>
                            <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="admin-card">
                <h3>Recent Activity</h3>
                <p style={{ color: '#666' }}>No recent activity to show.</p>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;

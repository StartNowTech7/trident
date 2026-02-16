'use client';
import React from 'react';
import PageHeader from '../components/PageHeader';
import Image from 'next/image';
const kushanImg = '/images/kushan.webp';
import { supabase } from '../lib/supabase';
const teamHeaderImg = '/images/team-header-hands.webp';
const teamPcHeaderImg = '/images/team.webp';

const Team = () => {
    const [teamMembers, setTeamMembers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchTeam = async () => {
            const { data } = await supabase.from('team').select('*').order('created_at', { ascending: true });
            if (data && data.length > 0) {
                setTeamMembers(data);
            } else {
                // Fallback to initial data if DB is empty
                setTeamMembers([
                    {
                        name: "Kushan Senabandu",
                        role: "Managing Director",
                        image: '/images/kushan.webp'
                    }
                ]);
            }
            setLoading(false);
        };
        fetchTeam();
    }, []);

    return (
        <>
            <PageHeader
                title="Our Team"
                subtitle="Meet Our Experts"
                bgImage={teamHeaderImg}
                pcBgImage={teamPcHeaderImg}
            />
            {loading ? (
                <section style={{ padding: '120px 20px', backgroundColor: 'white', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>Loading Team...</div>
                    </div>
                </section>
            ) : (
                <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '15px' }}>Leadership Team</h2>
                            <p style={{ color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                                Our experienced team brings decades of aviation expertise to deliver exceptional service.
                            </p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                            {teamMembers.map((member, index) => (
                                <div key={index} style={{ textAlign: 'center' }}>
                                    <div style={{
                                        width: '200px',
                                        height: '200px',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        margin: '0 auto 20px',
                                        border: '4px solid var(--color-secondary)',
                                        position: 'relative'
                                    }}>
                                        <Image src={member.image_url || member.image} alt={member.name} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '5px' }}>{member.name}</h3>
                                    <p style={{ color: 'var(--color-secondary)', fontWeight: '600' }}>{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Team;

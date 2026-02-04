import React from 'react';
import PageHeader from '../components/PageHeader';
import kushanImg from '../assets/kushan.png';
import { supabase } from '../lib/supabase';
import teamHeaderImg from '../assets/images/team-header-hands.jpg';

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
                        image: kushanImg
                    }
                ]);
            }
            setLoading(false);
        };
        fetchTeam();
    }, []);

    if (loading) return <div style={{ padding: '100px', textAlign: 'center' }}>Loading Team...</div>;

    return (
        <>
            <PageHeader
                title="Our Team"
                subtitle="Meet Our Experts"
                bgImage={teamHeaderImg}
            />
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
                                    border: '4px solid var(--color-secondary)'
                                }}>
                                    <img src={member.image_url || member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '5px' }}>{member.name}</h3>
                                <p style={{ color: 'var(--color-secondary)', fontWeight: '600' }}>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;

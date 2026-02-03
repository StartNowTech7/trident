import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { supabase } from '../../lib/supabase';
import { Mail, Clock, Trash2, CheckCircle } from 'lucide-react';

const Inbox = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('messages').select('*').order('created_at', { ascending: false });
        if (data) setMessages(data);
        setLoading(false);
    };

    const markAsRead = async (id) => {
        await supabase.from('messages').update({ is_read: true }).eq('id', id);
        fetchMessages();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            await supabase.from('messages').delete().eq('id', id);
            fetchMessages();
            setSelectedMessage(null);
        }
    };

    return (
        <AdminLayout>
            <div className="admin-header">
                <h1>Inbox</h1>
                <p style={{ color: '#666' }}>Manage incoming messages from the contact form.</p>
            </div>

            <div className="inbox-grid">
                {/* Message List */}
                <div className="admin-card inbox-list" style={{ padding: 0, overflowY: 'auto' }}>
                    {loading ? <p style={{ padding: '20px' }}>Loading messages...</p> : (
                        <div>
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    onClick={() => setSelectedMessage(msg)}
                                    style={{
                                        padding: '20px',
                                        borderBottom: '1px solid #eee',
                                        cursor: 'pointer',
                                        backgroundColor: selectedMessage?.id === msg.id ? '#f3f4f6' : (msg.is_read ? 'white' : '#f0fdf4'),
                                        transition: 'all 0.2s',
                                        borderLeft: !msg.is_read ? '4px solid #0A3D26' : 'none'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                        <strong style={{ color: 'var(--color-primary)' }}>{msg.name}</strong>
                                        <span style={{ fontSize: '0.8rem', color: '#888' }}>
                                            {new Date(msg.created_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: '0.9rem', color: '#666', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {msg.subject || 'No Subject'}
                                    </p>
                                </div>
                            ))}
                            {messages.length === 0 && (
                                <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
                                    Your inbox is empty.
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Message Detail */}
                <div className="admin-card inbox-detail">
                    {selectedMessage ? (
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
                                <div>
                                    <h2 style={{ marginBottom: '5px' }}>{selectedMessage.subject || 'No Subject'}</h2>
                                    <p style={{ color: '#666' }}>From: <strong>{selectedMessage.name}</strong> ({selectedMessage.email})</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '10px' }}>
                                        <span style={{ fontSize: '0.9rem', color: '#888', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <Clock size={16} /> {new Date(selectedMessage.created_at).toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    {!selectedMessage.is_read && (
                                        <button className="admin-btn admin-btn-outline" onClick={() => markAsRead(selectedMessage.id)}>
                                            <CheckCircle size={18} /> Mark Read
                                        </button>
                                    )}
                                    <button className="admin-btn admin-btn-danger" onClick={() => handleDelete(selectedMessage.id)}>
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                            <div style={{
                                padding: '25px',
                                backgroundColor: '#f9fafb',
                                borderRadius: '8px',
                                lineHeight: '1.8',
                                whiteSpace: 'pre-wrap'
                            }}>
                                {selectedMessage.message}
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <a
                                    href={`mailto:${selectedMessage.email}`}
                                    className="admin-btn admin-btn-primary"
                                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                                >
                                    <Mail size={18} /> Reply via Email
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', flexDirection: 'column' }}>
                            <Mail size={48} style={{ marginBottom: '15px', opacity: 0.3 }} />
                            <p>Select a message to read</p>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default Inbox;

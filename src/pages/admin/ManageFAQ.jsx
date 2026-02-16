'use client';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

const ManageFAQ = () => {
    const [faqs, setFaqs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ question: '', answer: '', order: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('faqs').select('*').order('order', { ascending: true });
        if (data) setFaqs(data);
        setLoading(false);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        if (editingId) {
            await supabase.from('faqs').update(formData).eq('id', editingId);
        } else {
            await supabase.from('faqs').insert([formData]);
        }
        setIsModalOpen(false);
        setEditingId(null);
        setFormData({ question: '', answer: '', order: faqs.length });
        fetchFaqs();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this FAQ?')) {
            await supabase.from('faqs').delete().eq('id', id);
            fetchFaqs();
        }
    };

    const openEdit = (faq) => {
        setEditingId(faq.id);
        setFormData({ question: faq.question, answer: faq.answer, order: faq.order });
        setIsModalOpen(true);
    };

    return (
        <AdminLayout>
            <div className="admin-header">
                <h1>Manage FAQ</h1>
                <button className="admin-btn admin-btn-primary" onClick={() => setIsModalOpen(true)}>
                    <Plus size={18} /> Add FAQ
                </button>
            </div>

            <div className="admin-card">
                {loading ? <p>Loading...</p> : (
                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Order</th>
                                    <th>Question</th>
                                    <th>Answer</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faqs.map((faq) => (
                                    <tr key={faq.id}>
                                        <td>{faq.order}</td>
                                        <td style={{ fontWeight: '600' }}>{faq.question}</td>
                                        <td style={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {faq.answer}
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <button className="admin-btn admin-btn-outline" onClick={() => openEdit(faq)}>
                                                    <Edit2 size={16} />
                                                </button>
                                                <button className="admin-btn admin-btn-danger" onClick={() => handleDelete(faq.id)}>
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {faqs.length === 0 && (
                                    <tr>
                                        <td colSpan="4" style={{ textAlign: 'center', padding: '40px' }}>No FAQs found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {isModalOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', zIndex: 1000
                }}>
                    <div className="admin-card" style={{ width: '100%', maxWidth: '600px', margin: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <h2>{editingId ? 'Edit FAQ' : 'Add New FAQ'}</h2>
                            <X className="cursor-pointer" onClick={() => setIsModalOpen(false)} />
                        </div>
                        <form onSubmit={handleSave}>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Question</label>
                                <input
                                    type="text"
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    value={formData.question}
                                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                                    required
                                />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Answer</label>
                                <textarea
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    rows="5"
                                    value={formData.answer}
                                    onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                                    required
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Display Order</label>
                                <input
                                    type="number"
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    value={formData.order}
                                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                                <button type="button" className="admin-btn admin-btn-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="submit" className="admin-btn admin-btn-primary">Save FAQ</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default ManageFAQ;

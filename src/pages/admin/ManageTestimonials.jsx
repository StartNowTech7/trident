import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, X, Star } from 'lucide-react';

const ManageTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ author: '', role: '', content: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false });
        if (data) setTestimonials(data);
        setLoading(false);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        if (editingId) {
            await supabase.from('testimonials').update(formData).eq('id', editingId);
        } else {
            await supabase.from('testimonials').insert([formData]);
        }
        setIsModalOpen(false);
        setEditingId(null);
        setFormData({ author: '', role: '', content: '' });
        fetchTestimonials();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this testimonial?')) {
            await supabase.from('testimonials').delete().eq('id', id);
            fetchTestimonials();
        }
    };

    const openEdit = (t) => {
        setEditingId(t.id);
        setFormData({ author: t.author, role: t.role, content: t.content });
        setIsModalOpen(true);
    };

    return (
        <AdminLayout>
            <div className="admin-header">
                <h1>Manage Testimonials</h1>
                <button className="admin-btn admin-btn-primary" onClick={() => setIsModalOpen(true)}>
                    <Plus size={18} /> Add Testimonial
                </button>
            </div>

            <div className="admin-card">
                {loading ? <p>Loading...</p> : (
                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Author</th>
                                    <th>Role</th>
                                    <th>Content</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {testimonials.map((t) => (
                                    <tr key={t.id}>
                                        <td style={{ fontWeight: '600' }}>{t.author}</td>
                                        <td>{t.role}</td>
                                        <td style={{ maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {t.content}
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <button className="admin-btn admin-btn-outline" onClick={() => openEdit(t)}>
                                                    <Edit2 size={16} />
                                                </button>
                                                <button className="admin-btn admin-btn-danger" onClick={() => handleDelete(t.id)}>
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {testimonials.length === 0 && (
                                    <tr>
                                        <td colSpan="4" style={{ textAlign: 'center', padding: '40px' }}>No testimonials found.</td>
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
                    <div className="admin-card" style={{ width: '100%', maxWidth: '500px', margin: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <h2>{editingId ? 'Edit Testimonial' : 'Add New Testimonial'}</h2>
                            <X className="cursor-pointer" onClick={() => setIsModalOpen(false)} />
                        </div>
                        <form onSubmit={handleSave}>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Author Name</label>
                                <input
                                    type="text"
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    value={formData.author}
                                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                    required
                                />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Role / Company</label>
                                <input
                                    type="text"
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    required
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Testimonial Content</label>
                                <textarea
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    rows="5"
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    required
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                                <button type="button" className="admin-btn admin-btn-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="submit" className="admin-btn admin-btn-primary">Save Testimonial</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default ManageTestimonials;

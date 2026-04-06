'use client';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

const ManagePartners = () => {
    const [partners, setPartners] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ name: '', logo_url: '', website_url: '', order: 0 });
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchPartners();
    }, []);

    const fetchPartners = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('partners').select('*').order('order', { ascending: true });
        if (data) setPartners(data);
        setLoading(false);
    };

    const handleFileUpload = async (file) => {
        try {
            setUploading(true);
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            let { error: uploadError } = await supabase.storage
                .from('team-photos') // Reusing team-photos bucket for simplicity as per existing setup
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('team-photos')
                .getPublicUrl(filePath);

            return publicUrl;
        } catch (error) {
            alert('Error uploading logo: ' + error.message);
            return null;
        } finally {
            setUploading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        let currentLogoUrl = formData.logo_url;

        if (file) {
            const uploadedUrl = await handleFileUpload(file);
            if (uploadedUrl) currentLogoUrl = uploadedUrl;
            else return;
        }

        const dataToSave = { ...formData, logo_url: currentLogoUrl };

        if (editingId) {
            await supabase.from('partners').update(dataToSave).eq('id', editingId);
        } else {
            await supabase.from('partners').insert([dataToSave]);
        }

        setIsModalOpen(false);
        setEditingId(null);
        setFormData({ name: '', logo_url: '', website_url: '', order: 0 });
        setFile(null);
        fetchPartners();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this partner?')) {
            await supabase.from('partners').delete().eq('id', id);
            fetchPartners();
        }
    };

    const openEdit = (partner) => {
        setEditingId(partner.id);
        setFormData({ 
            name: partner.name, 
            logo_url: partner.logo_url, 
            website_url: partner.website_url || '', 
            order: partner.order || 0 
        });
        setFile(null);
        setIsModalOpen(true);
    };

    return (
        <AdminLayout>
            <div className="admin-header">
                <h1>Manage Partners</h1>
                <button className="admin-btn admin-btn-primary" onClick={() => {
                    setEditingId(null);
                    setFormData({ name: '', logo_url: '', website_url: '', order: 0 });
                    setFile(null);
                    setIsModalOpen(true);
                }}>
                    <Plus size={18} /> Add Partner
                </button>
            </div>

            <div className="admin-card">
                {loading ? <p>Loading...</p> : (
                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Logo</th>
                                    <th>Name</th>
                                    <th>Website</th>
                                    <th>Order</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {partners.map((partner) => (
                                    <tr key={partner.id}>
                                        <td>
                                            <img
                                                src={partner.logo_url || 'https://via.placeholder.com/50'}
                                                alt={partner.name}
                                                style={{ width: '60px', height: '40px', objectFit: 'contain', background: '#f8fafc', padding: '5px', borderRadius: '4px' }}
                                            />
                                        </td>
                                        <td style={{ fontWeight: '600' }}>{partner.name}</td>
                                        <td>{partner.website_url || 'N/A'}</td>
                                        <td>{partner.order}</td>
                                        <td>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <button className="admin-btn admin-btn-outline" onClick={() => openEdit(partner)}>
                                                    <Edit2 size={16} />
                                                </button>
                                                <button className="admin-btn admin-btn-danger" onClick={() => handleDelete(partner.id)}>
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {partners.length === 0 && (
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: 'center', padding: '40px' }}>No partners found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {isModalOpen && (
                <div className="admin-modal-overlay">
                    <div className="admin-modal-content">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                            <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-primary)' }}>
                                {editingId ? 'Edit Partner' : 'Add Partner'}
                            </h2>
                            <X className="cursor-pointer" size={24} onClick={() => setIsModalOpen(false)} />
                        </div>
                        <form onSubmit={handleSave}>
                            <div className="admin-form-group">
                                <label>Partner Name</label>
                                <input
                                    type="text"
                                    className="admin-form-input"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    placeholder="Enter airline name"
                                />
                            </div>
                            <div className="admin-form-group">
                                <label>Website URL (Optional)</label>
                                <input
                                    type="url"
                                    className="admin-form-input"
                                    value={formData.website_url}
                                    onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                                    placeholder="https://example.com"
                                />
                            </div>
                            <div className="admin-form-group">
                                <label>Display Order</label>
                                <input
                                    type="number"
                                    className="admin-form-input"
                                    value={formData.order}
                                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                                />
                            </div>
                            <div className="admin-form-group">
                                <label>Logo Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="admin-form-input"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    required={!editingId && !formData.logo_url}
                                />
                                {formData.logo_url && !file && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px', padding: '10px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                                        <img src={formData.logo_url} alt="Current" style={{ width: '60px', height: '40px', objectFit: 'contain', background: 'white', padding: '4px', borderRadius: '4px', border: '1px solid #e5e7eb' }} />
                                        <span style={{ fontSize: '0.85rem', color: '#666' }}>Current Logo</span>
                                    </div>
                                )}
                            </div>
                            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
                                <button type="button" className="admin-btn admin-btn-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="submit" className="admin-btn admin-btn-primary" disabled={uploading}>
                                    {uploading ? 'Uploading...' : 'Save Partner Details'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default ManagePartners;

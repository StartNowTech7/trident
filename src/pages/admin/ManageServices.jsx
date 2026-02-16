'use client';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ title: '', description: '', icon_name: 'Plane' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('services').select('*').order('created_at', { ascending: false });
        if (data) setServices(data);
        setLoading(false);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        if (editingId) {
            await supabase.from('services').update(formData).eq('id', editingId);
        } else {
            await supabase.from('services').insert([formData]);
        }
        setIsModalOpen(false);
        setEditingId(null);
        setFormData({ title: '', description: '', icon_name: 'Plane' });
        fetchServices();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            await supabase.from('services').delete().eq('id', id);
            fetchServices();
        }
    };

    const openEdit = (service) => {
        setEditingId(service.id);
        setFormData({ title: service.title, description: service.description, icon_name: service.icon_name });
        setIsModalOpen(true);
    };

    return (
        <AdminLayout>
            <div className="admin-header">
                <h1>Manage Services</h1>
                <button className="admin-btn admin-btn-primary" onClick={() => setIsModalOpen(true)}>
                    <Plus size={18} /> Add New Service
                </button>
            </div>

            <div className="admin-card">
                {loading ? <p>Loading...</p> : (
                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Icon</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service) => (
                                    <tr key={service.id}>
                                        <td style={{ fontWeight: '600' }}>{service.title}</td>
                                        <td style={{ maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {service.description}
                                        </td>
                                        <td>{service.icon_name}</td>
                                        <td>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <button className="admin-btn admin-btn-outline" onClick={() => openEdit(service)}>
                                                    <Edit2 size={16} />
                                                </button>
                                                <button className="admin-btn admin-btn-danger" onClick={() => handleDelete(service.id)}>
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {services.length === 0 && (
                                    <tr>
                                        <td colSpan="4" style={{ textAlign: 'center', padding: '40px' }}>No services found. Add your first service!</td>
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
                            <h2>{editingId ? 'Edit Service' : 'Add New Service'}</h2>
                            <X className="cursor-pointer" onClick={() => setIsModalOpen(false)} />
                        </div>
                        <form onSubmit={handleSave}>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Service Title</label>
                                <input
                                    type="text"
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Description</label>
                                <textarea
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    rows="4"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    required
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Icon Name (Lucide)</label>
                                <select
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    value={formData.icon_name}
                                    onChange={(e) => setFormData({ ...formData, icon_name: e.target.value })}
                                >
                                    <option value="Plane">Plane</option>
                                    <option value="Package">Package</option>
                                    <option value="Globe">Globe</option>
                                    <option value="Users">Users</option>
                                    <option value="Handshake">Handshake</option>
                                    <option value="Shield">Shield</option>
                                    <option value="Award">Award</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                                <button type="button" className="admin-btn admin-btn-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="submit" className="admin-btn admin-btn-primary">Save Service</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default ManageServices;

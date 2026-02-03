import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

const ManageTeam = () => {
    const [team, setTeam] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ name: '', role: '', image_url: '' });
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchTeam();
    }, []);

    const fetchTeam = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('team').select('*').order('created_at', { ascending: false });
        if (data) setTeam(data);
        setLoading(false);
    };

    const handleFileUpload = async (file) => {
        try {
            setUploading(true);
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            let { error: uploadError, data } = await supabase.storage
                .from('team-photos')
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            const { data: { publicUrl } } = supabase.storage
                .from('team-photos')
                .getPublicUrl(filePath);

            return publicUrl;
        } catch (error) {
            alert('Error uploading image: ' + error.message);
            return null;
        } finally {
            setUploading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        let currentImageUrl = formData.image_url;

        if (file) {
            const uploadedUrl = await handleFileUpload(file);
            if (uploadedUrl) {
                currentImageUrl = uploadedUrl;
            } else {
                return; // Stop if upload failed
            }
        }

        const dataToSave = { ...formData, image_url: currentImageUrl };

        if (editingId) {
            await supabase.from('team').update(dataToSave).eq('id', editingId);
        } else {
            await supabase.from('team').insert([dataToSave]);
        }

        setIsModalOpen(false);
        setEditingId(null);
        setFormData({ name: '', role: '', image_url: '' });
        setFile(null);
        fetchTeam();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this team member?')) {
            await supabase.from('team').delete().eq('id', id);
            fetchTeam();
        }
    };

    const openEdit = (member) => {
        setEditingId(member.id);
        setFormData({ name: member.name, role: member.role, image_url: member.image_url });
        setFile(null);
        setIsModalOpen(true);
    };

    return (
        <AdminLayout>
            <div className="admin-header">
                <h1>Manage Team</h1>
                <button className="admin-btn admin-btn-primary" onClick={() => {
                    setEditingId(null);
                    setFormData({ name: '', role: '', image_url: '' });
                    setFile(null);
                    setIsModalOpen(true);
                }}>
                    <Plus size={18} /> Add Member
                </button>
            </div>

            <div className="admin-card">
                {loading ? <p>Loading...</p> : (
                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {team.map((member) => (
                                    <tr key={member.id}>
                                        <td>
                                            <img
                                                src={member.image_url || 'https://via.placeholder.com/50'}
                                                alt={member.name}
                                                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                                            />
                                        </td>
                                        <td style={{ fontWeight: '600' }}>{member.name}</td>
                                        <td>{member.role}</td>
                                        <td>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <button className="admin-btn admin-btn-outline" onClick={() => openEdit(member)}>
                                                    <Edit2 size={16} />
                                                </button>
                                                <button className="admin-btn admin-btn-danger" onClick={() => handleDelete(member.id)}>
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {team.length === 0 && (
                                    <tr>
                                        <td colSpan="4" style={{ textAlign: 'center', padding: '40px' }}>No team members found.</td>
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
                            <h2>{editingId ? 'Edit Team Member' : 'Add Team Member'}</h2>
                            <X className="cursor-pointer" onClick={() => setIsModalOpen(false)} />
                        </div>
                        <form onSubmit={handleSave}>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Full Name</label>
                                <input
                                    type="text"
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Role</label>
                                <input
                                    type="text"
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    required
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Photo</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '10px' }}
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                                {formData.image_url && !file && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <img src={formData.image_url} alt="Current" style={{ width: '50px', height: '50px', borderRadius: '5px', objectFit: 'cover' }} />
                                        <span style={{ fontSize: '0.8rem', color: '#666' }}>Current Photo</span>
                                    </div>
                                )}
                            </div>
                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                                <button type="button" className="admin-btn admin-btn-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="submit" className="admin-btn admin-btn-primary" disabled={uploading}>
                                    {uploading ? 'Uploading...' : 'Save Member'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default ManageTeam;

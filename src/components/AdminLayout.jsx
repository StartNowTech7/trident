import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Plane, CircleHelp, MessageSquare, LogOut, Star, Menu, X } from 'lucide-react';
import '../styles/Admin.css';

const AdminLayout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { path: '/admin/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
        { path: '/admin/services', icon: <Plane size={20} />, label: 'Services' },
        { path: '/admin/team', icon: <Users size={20} />, label: 'Team' },
        { path: '/admin/faq', icon: <CircleHelp size={20} />, label: 'FAQ' },
        { path: '/admin/testimonials', icon: <Star size={20} />, label: 'Testimonials' },
        { path: '/admin/inbox', icon: <MessageSquare size={20} />, label: 'Inbox' },
    ];

    const handleLogout = () => {
        navigate('/admin/login');
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className={`admin-layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
            {/* Mobile Header */}
            <header className="admin-mobile-header">
                <button className="sidebar-toggle" onClick={toggleSidebar}>
                    <Menu size={24} />
                </button>
                <h2>TRIDENT</h2>
            </header>

            {/* Mobile Overlay */}
            {isSidebarOpen && <div className="admin-sidebar-overlay" onClick={toggleSidebar}></div>}

            <aside className={`admin-sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="admin-logo">
                    <h2>TRIDENT ADMIN</h2>
                    <button className="mobile-close" onClick={toggleSidebar}>
                        <X size={24} />
                    </button>
                </div>
                <nav className="admin-nav">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`admin-nav-item ${location.pathname === item.path ? 'active' : ''}`}
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>
                <div className="admin-logout" onClick={handleLogout}>
                    <LogOut size={20} />
                    <span>Logout</span>
                </div>
            </aside>
            <main className="admin-main">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;

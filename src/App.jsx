import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import WhyChooseUsPage from './pages/WhyChooseUs';
import './index.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

import Dashboard from './pages/admin/Dashboard';
import Login from './pages/admin/Login';
import ManageServices from './pages/admin/ManageServices';
import ManageTeam from './pages/admin/ManageTeam';
import ManageFAQ from './pages/admin/ManageFAQ';
import ManageTestimonials from './pages/admin/ManageTestimonials';
import Inbox from './pages/admin/Inbox';
import { supabase } from './lib/supabase';

// Protected Route Component
const AuthGuard = ({ children }) => {
  const [session, setSession] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!session) return <Login />;

  return children;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
          <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
          <Route path="/team" element={<><Navbar /><Team /><Footer /></>} />
          <Route path="/faq" element={<><Navbar /><FAQ /><Footer /></>} />
          <Route path="/pricing" element={<><Navbar /><Pricing /><Footer /></>} />
          <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
          <Route path="/why-choose-us" element={<><Navbar /><WhyChooseUsPage /><Footer /></>} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AuthGuard><Dashboard /></AuthGuard>} />
          <Route path="/admin/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
          <Route path="/admin/services" element={<AuthGuard><ManageServices /></AuthGuard>} />
          <Route path="/admin/team" element={<AuthGuard><ManageTeam /></AuthGuard>} />
          <Route path="/admin/faq" element={<AuthGuard><ManageFAQ /></AuthGuard>} />
          <Route path="/admin/testimonials" element={<AuthGuard><ManageTestimonials /></AuthGuard>} />
          <Route path="/admin/inbox" element={<AuthGuard><Inbox /></AuthGuard>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

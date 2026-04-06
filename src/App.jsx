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
import PartnerAirlines from './pages/PartnerAirlines';
import UsefulTools from './pages/UsefulTools';
import './index.css';

// Custom Scroll Manager to handle restoration and route changes manually
const ScrollManager = () => {
  const { pathname } = useLocation();
  const isFirstRender = React.useRef(true);

  // 1. Manual Scroll Restoration on Refresh (Mount only)
  React.useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollKey = `scrollPosition_${pathname}`;
    const savedPosition = sessionStorage.getItem(scrollKey);

    if (savedPosition) {
      const targetScroll = parseInt(savedPosition, 10);

      const restore = () => {
        window.scrollTo(0, targetScroll);
      }

      // Initial attempt
      restore();

      // Polling to enforce position as images load (backup)
      let attempts = 0;
      const maxAttempts = 20;
      const interval = setInterval(() => {
        if (Math.abs(window.scrollY - targetScroll) > 5) {
          restore();
        }
        attempts++;
        if (attempts >= maxAttempts) clearInterval(interval);
      }, 50);

      // Cleanup
      return () => {
        clearInterval(interval);
      };
    }
  }, []); // Empty dependency array = Runs only on MOUNT (Refresh)

  // 2. Save scroll position continuously for the CURRENT path
  React.useEffect(() => {
    const scrollKey = `scrollPosition_${pathname}`;

    // Debounce for performance
    let timeoutId;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        sessionStorage.setItem(scrollKey, window.scrollY.toString());
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [pathname]);

  // 3. Scroll to Top on Route Change
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

import Dashboard from './pages/admin/Dashboard';
import Login from './pages/admin/Login';
import ManageServices from './pages/admin/ManageServices';
import ManageTeam from './pages/admin/ManageTeam';
import ManageFAQ from './pages/admin/ManageFAQ';
import ManagePartners from './pages/admin/ManagePartners';
import ManageTestimonials from './pages/admin/ManageTestimonials';
import Inbox from './pages/admin/Inbox';
import { supabase } from './lib/supabase';

// Protected Route Component
const AuthGuard = ({ children }) => {
  const [session, setSession] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const AUTHORIZED_EMAIL = 'startnowtech.info@gmail.com';

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
  if (!session || session.user.email !== AUTHORIZED_EMAIL) return <Login />;

  return children;
};

function App() {
  return (
    <Router>
      <ScrollManager />
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
          <Route path="/partner-airlines" element={<><Navbar /><PartnerAirlines /><Footer /></>} />
          <Route path="/useful-tools" element={<><Navbar /><UsefulTools /><Footer /></>} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AuthGuard><Dashboard /></AuthGuard>} />
          <Route path="/admin/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
          <Route path="/admin/services" element={<AuthGuard><ManageServices /></AuthGuard>} />
          <Route path="/admin/team" element={<AuthGuard><ManageTeam /></AuthGuard>} />
          <Route path="/admin/faq" element={<AuthGuard><ManageFAQ /></AuthGuard>} />
          <Route path="/admin/partners" element={<AuthGuard><ManagePartners /></AuthGuard>} />
          <Route path="/admin/testimonials" element={<AuthGuard><ManageTestimonials /></AuthGuard>} />
          <Route path="/admin/inbox" element={<AuthGuard><Inbox /></AuthGuard>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

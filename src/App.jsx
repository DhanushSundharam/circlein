import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomerDashboard from './pages/CustomerDashboard';
import DriverDashboard from './pages/DriverDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Team from './pages/Team';
import WhyUs from './pages/WhyUs';
import Faq from './pages/Faq';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{padding: '20px', color: 'red'}}><h1>Error:</h1><pre>{this.state.error?.toString()}</pre><pre>{this.state.error?.stack}</pre></div>;
    }
    return this.props.children; 
  }
}

function AppContent({ user, setUser }) {
  const location = useLocation();
  // Show navbar ONLY on the marketing pages
  const showNavbar = ['/', '/services', '/team', '/whyus', '/faq', '/blog'].includes(location.pathname) || location.pathname.startsWith('/blog/');

  return (
    <div className="app-container">
      {showNavbar && <Navbar user={user} setUser={setUser} />}
      <main className="main-content" style={{ padding: 0, height: '100vh' }}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={user ? <Navigate to={`/${user.role}`} /> : <Landing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/whyus" element={<WhyUs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/login" element={user ? <Navigate to={`/${user.role}`} /> : <Login setUser={setUser} />} />
            
            {/* Role-based Routes */}
            <Route path="/customer" element={user?.role === 'customer' ? <CustomerDashboard user={user} setUser={setUser} /> : <Navigate to="/login" />} />
            <Route path="/driver" element={user?.role === 'driver' ? <DriverDashboard user={user} /> : <Navigate to="/login" />} />
            <Route path="/admin" element={user?.role === 'admin' ? <AdminDashboard user={user} /> : <Navigate to="/login" />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null); // { id, name, role }

  return (
    <Router>
      <AppContent user={user} setUser={setUser} />
    </Router>
  );
}

export default App;

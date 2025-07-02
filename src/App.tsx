import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AmazonPrime from './pages/AmazonPrime';
import Netflix from './pages/Netflix';
import DisneyHotstar from './pages/DisneyHotstar';
import Compare from './pages/Compare';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';

// Protected Layout Component
const ProtectedLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

// Public Layout Component (for login/signup)
const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  // If user is already logged in, redirect to home
  if (user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

function AppContent() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          {/* Public routes - redirect to home if already logged in */}
          <Route path="/login" element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          } />
          <Route path="/signup" element={
            <PublicLayout>
              <Signup />
            </PublicLayout>
          } />
          
          {/* Protected routes - require authentication */}
          <Route path="/" element={
            <ProtectedLayout>
              <Home />
            </ProtectedLayout>
          } />
          <Route path="/amazon-prime" element={
            <ProtectedLayout>
              <AmazonPrime />
            </ProtectedLayout>
          } />
          <Route path="/netflix" element={
            <ProtectedLayout>
              <Netflix />
            </ProtectedLayout>
          } />
          <Route path="/disney-hotstar" element={
            <ProtectedLayout>
              <DisneyHotstar />
            </ProtectedLayout>
          } />
          <Route path="/compare" element={
            <ProtectedLayout>
              <Compare />
            </ProtectedLayout>
          } />

          {/* Catch all route - redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
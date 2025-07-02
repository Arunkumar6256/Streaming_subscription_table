import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AmazonPrime from './pages/AmazonPrime';
import Netflix from './pages/Netflix';
import DisneyHotstar from './pages/DisneyHotstar';
import Compare from './pages/Compare';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Public routes - no authentication required */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Protected routes - authentication required */}
              <Route path="/" element={
                <>
                  <Navbar />
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                  <Footer />
                </>
              } />
              <Route path="/amazon-prime" element={
                <>
                  <Navbar />
                  <ProtectedRoute>
                    <AmazonPrime />
                  </ProtectedRoute>
                  <Footer />
                </>
              } />
              <Route path="/netflix" element={
                <>
                  <Navbar />
                  <ProtectedRoute>
                    <Netflix />
                  </ProtectedRoute>
                  <Footer />
                </>
              } />
              <Route path="/disney-hotstar" element={
                <>
                  <Navbar />
                  <ProtectedRoute>
                    <DisneyHotstar />
                  </ProtectedRoute>
                  <Footer />
                </>
              } />
              <Route path="/compare" element={
                <>
                  <Navbar />
                  <ProtectedRoute>
                    <Compare />
                  </ProtectedRoute>
                  <Footer />
                </>
              } />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
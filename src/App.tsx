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
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } />
              <Route path="/amazon-prime" element={
                <ProtectedRoute>
                  <AmazonPrime />
                </ProtectedRoute>
              } />
              <Route path="/netflix" element={
                <ProtectedRoute>
                  <Netflix />
                </ProtectedRoute>
              } />
              <Route path="/disney-hotstar" element={
                <ProtectedRoute>
                  <DisneyHotstar />
                </ProtectedRoute>
              } />
              <Route path="/compare" element={
                <ProtectedRoute>
                  <Compare />
                </ProtectedRoute>
              } />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
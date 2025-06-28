import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AmazonPrime from './pages/AmazonPrime';
import Netflix from './pages/Netflix';
import DisneyHotstar from './pages/DisneyHotstar';
import Compare from './pages/Compare';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/amazon-prime" element={<AmazonPrime />} />
            <Route path="/netflix" element={<Netflix />} />
            <Route path="/disney-hotstar" element={<DisneyHotstar />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
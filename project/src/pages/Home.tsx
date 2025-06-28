import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SubscriptionTable from '../components/SubscriptionTable';
import FeaturesSection from '../components/FeaturesSection';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturesSection />
      <SubscriptionTable />
    </motion.div>
  );
};

export default Home;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Check, Star, Download, Tv, Users, Crown, Shield } from 'lucide-react';
import PaymentModal from '../components/PaymentModal';

const Netflix = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const plan = {
    name: 'Premium',
    service: 'Netflix',
    price: 649,
    period: 'month',
    color: 'from-red-600 to-red-500',
    stripeLink: 'https://buy.stripe.com/test_6oU00l9b53Sx8HI4Cq2go02'
  };

  const features = [
    'Unlimited movies & TV shows',
    'Watch on any device',
    'No ads',
    'Download for offline viewing',
    'Netflix Originals',
    'HD & 4K available',
    'Multiple user profiles',
    'Parental controls',
    'Smart downloads',
    'Mobile games included'
  ];

  const exclusiveContent = [
    {
      title: 'Stranger Things',
      genre: 'Sci-Fi Drama',
      rating: '8.7/10',
      image: 'https://images.pexels.com/photos/7991582/pexels-photo-7991582.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'The Crown',
      genre: 'Historical Drama',
      rating: '8.6/10',
      image: 'https://images.pexels.com/photos/7991583/pexels-photo-7991583.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Squid Game',
      genre: 'Thriller',
      rating: '8.0/10',
      image: 'https://images.pexels.com/photos/7991584/pexels-photo-7991584.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-800 to-black">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-red-600 to-red-500 p-4 rounded-2xl">
                  <Play className="w-12 h-12 text-white" fill="currentColor" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold text-white mb-2">Netflix</h1>
                  <p className="text-red-200 text-xl">Unlimited entertainment</p>
                </div>
              </div>
              
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Stream thousands of movies, TV shows, and Netflix Originals. 
                Watch anywhere, anytime, on any device with no ads and unlimited downloads.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                  <Crown className="w-5 h-5 inline mr-2" />
                  Netflix Originals
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                  <Shield className="w-5 h-5 inline mr-2" />
                  No advertisements
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                  <Download className="w-5 h-5 inline mr-2" />
                  Offline viewing
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPaymentModal(true)}
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Watching - ₹649/month
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">15,000+</div>
                    <div className="text-red-200">Titles Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">4K</div>
                    <div className="text-red-200">Ultra HD Quality</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">4</div>
                    <div className="text-red-200">Simultaneous Streams</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">190+</div>
                    <div className="text-red-200">Countries</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Premium Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best of streaming with Netflix's premium features and exclusive content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Check className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Netflix Originals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Award-winning series and films created exclusively for Netflix members
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exclusiveContent.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    {content.rating}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{content.title}</h3>
                  <p className="text-gray-600">{content.genre}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Join Netflix Today</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
              <div className="text-6xl font-bold text-white mb-4">₹649</div>
              <div className="text-xl text-red-200 mb-6">per month</div>
              <div className="text-red-100 mb-8">
                Premium plan with 4K streaming and 4 simultaneous screens
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPaymentModal(true)}
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {showPaymentModal && (
        <PaymentModal
          plan={plan}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </motion.div>
  );
};

export default Netflix;
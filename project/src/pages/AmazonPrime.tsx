import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Check, Star, Download, Tv, Users, Crown, Shield } from 'lucide-react';
import PaymentModal from '../components/PaymentModal';

const AmazonPrime = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const plan = {
    name: 'Prime Video',
    service: 'Amazon Prime',
    price: 1499,
    period: 'year',
    color: 'from-orange-500 to-yellow-500',
    stripeLink: 'https://buy.stripe.com/test_28E28t1ID88NcXY9WK2go01'
  };

  const features = [
    'Unlimited movies & TV shows',
    'Prime shipping benefits',
    'Prime Music included',
    'Prime Reading access',
    'Exclusive Prime Originals',
    'No ads on most content',
    'Download for offline viewing',
    'Watch on multiple devices',
    '4K Ultra HD streaming',
    'HDR content support'
  ];

  const exclusiveContent = [
    {
      title: 'The Boys',
      genre: 'Superhero Drama',
      rating: '8.7/10',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'The Marvelous Mrs. Maisel',
      genre: 'Comedy Drama',
      rating: '8.7/10',
      image: 'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'The Terminal List',
      genre: 'Action Thriller',
      rating: '8.0/10',
      image: 'https://images.pexels.com/photos/7991581/pexels-photo-7991581.jpeg?auto=compress&cs=tinysrgb&w=400'
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
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-yellow-900 to-orange-900">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-4 rounded-2xl">
                  <Play className="w-12 h-12 text-white" fill="currentColor" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold text-white mb-2">Amazon Prime</h1>
                  <p className="text-orange-200 text-xl">More than just streaming</p>
                </div>
              </div>
              
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Get unlimited access to thousands of movies, TV shows, and Amazon Originals. 
                Plus enjoy free shipping, Prime Music, and Prime Reading all in one membership.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                  <Crown className="w-5 h-5 inline mr-2" />
                  Prime Originals
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                  <Shield className="w-5 h-5 inline mr-2" />
                  Ad-free experience
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                  <Download className="w-5 h-5 inline mr-2" />
                  Offline downloads
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPaymentModal(true)}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Prime Journey - ₹1,499/year
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
                    <div className="text-4xl font-bold text-white mb-2">10,000+</div>
                    <div className="text-orange-200">Movies & Shows</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">4K</div>
                    <div className="text-orange-200">Ultra HD Quality</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">3</div>
                    <div className="text-orange-200">Simultaneous Streams</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">∞</div>
                    <div className="text-orange-200">Downloads</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What's Included</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Amazon Prime is more than streaming - it's a complete entertainment and shopping experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Check className="w-6 h-6 text-orange-500 flex-shrink-0" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Prime Originals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Award-winning original series and movies you can't watch anywhere else
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
      <section className="py-20 bg-gradient-to-r from-orange-900 to-yellow-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Start?</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
              <div className="text-6xl font-bold text-white mb-4">₹1,499</div>
              <div className="text-xl text-orange-200 mb-6">per year</div>
              <div className="text-orange-100 mb-8">
                That's just ₹125 per month for unlimited entertainment plus Prime benefits
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPaymentModal(true)}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
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

export default AmazonPrime;
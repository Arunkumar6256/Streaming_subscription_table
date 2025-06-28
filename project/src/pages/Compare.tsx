import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Crown, Zap } from 'lucide-react';
import PaymentModal from '../components/PaymentModal';

const Compare = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const plans = [
    {
      name: 'Prime Video',
      service: 'Amazon Prime',
      price: 1499,
      period: 'year',
      monthlyPrice: 125,
      color: 'from-orange-500 to-yellow-500',
      gradient: 'from-orange-50 to-yellow-50',
      stripeLink: 'https://buy.stripe.com/test_28E28t1ID88NcXY9WK2go01',
      features: {
        'Content Library': '10,000+ titles',
        'Video Quality': '4K Ultra HD',
        'Simultaneous Streams': '3 devices',
        'Downloads': true,
        'Ads': 'Minimal ads',
        'Live Sports': false,
        'Original Content': true,
        'Music Included': true,
        'Free Shipping': true,
        'Reading Access': true,
        'Mobile Games': false,
        'Kids Profiles': true
      }
    },
    {
      name: 'Premium',
      service: 'Netflix',
      price: 649,
      period: 'month',
      monthlyPrice: 649,
      color: 'from-red-600 to-red-500',
      gradient: 'from-red-50 to-pink-50',
      popular: true,
      stripeLink: 'https://buy.stripe.com/test_6oU00l9b53Sx8HI4Cq2go02',
      features: {
        'Content Library': '15,000+ titles',
        'Video Quality': '4K Ultra HD',
        'Simultaneous Streams': '4 devices',
        'Downloads': true,
        'Ads': 'No ads',
        'Live Sports': false,
        'Original Content': true,
        'Music Included': false,
        'Free Shipping': false,
        'Reading Access': false,
        'Mobile Games': true,
        'Kids Profiles': true
      }
    },
    {
      name: 'Super',
      service: 'Disney+ Hotstar',
      price: 1499,
      period: 'year',
      monthlyPrice: 125,
      color: 'from-blue-600 to-indigo-600',
      gradient: 'from-blue-50 to-indigo-50',
      stripeLink: 'https://buy.stripe.com/test_6oUbJ3fztagV0bced02go00',
      features: {
        'Content Library': '100,000+ hours',
        'Video Quality': '4K Ultra HD',
        'Simultaneous Streams': '4 devices',
        'Downloads': true,
        'Ads': 'No ads',
        'Live Sports': true,
        'Original Content': true,
        'Music Included': false,
        'Free Shipping': false,
        'Reading Access': false,
        'Mobile Games': false,
        'Kids Profiles': true
      }
    }
  ];

  const featureCategories = [
    'Content Library',
    'Video Quality',
    'Simultaneous Streams',
    'Downloads',
    'Ads',
    'Live Sports',
    'Original Content',
    'Music Included',
    'Free Shipping',
    'Reading Access',
    'Mobile Games',
    'Kids Profiles'
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  const renderFeatureValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    return <span className="text-sm font-medium text-gray-900">{value}</span>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Compare All Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect streaming service for your entertainment needs. 
            Compare features, pricing, and benefits side by side.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl shadow-xl bg-gradient-to-br ${plan.gradient} border-2 border-transparent hover:border-gray-200 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8 text-center">
                <div className={`inline-block p-4 rounded-full bg-gradient-to-r ${plan.color} mb-4`}>
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.service}</h3>
                <p className="text-lg text-gray-600 mb-4">{plan.name} Plan</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900">₹{plan.price}</div>
                  <div className="text-gray-600">/{plan.period}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    ₹{plan.monthlyPrice}/month
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-3 px-6 rounded-xl font-bold text-white transition-all duration-300 bg-gradient-to-r ${plan.color}`}
                >
                  Choose Plan
                </motion.button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Detailed Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8">
            <h2 className="text-3xl font-bold text-center">Detailed Feature Comparison</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-6 font-bold text-gray-900">Features</th>
                  {plans.map((plan, index) => (
                    <th key={index} className="text-center p-6">
                      <div className="font-bold text-gray-900">{plan.service}</div>
                      <div className="text-sm text-gray-600">{plan.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureCategories.map((feature, featureIndex) => (
                  <motion.tr
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + featureIndex * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-6 font-medium text-gray-900">{feature}</td>
                    {plans.map((plan, planIndex) => (
                      <td key={planIndex} className="p-6 text-center">
                        {renderFeatureValue(plan.features[feature])}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-12 text-white">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Zap className="w-8 h-8 text-yellow-400" />
              <h3 className="text-3xl font-bold">Why Choose StreamCompare?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="font-bold text-xl mb-2">Secure Payments</h4>
                <p className="text-blue-100">Bank-grade security for all transactions</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="font-bold text-xl mb-2">Best Prices</h4>
                <p className="text-blue-100">Competitive pricing across all platforms</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="font-bold text-xl mb-2">Instant Access</h4>
                <p className="text-blue-100">Start streaming immediately after purchase</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {showPaymentModal && selectedPlan && (
        <PaymentModal
          plan={selectedPlan}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </motion.div>
  );
};

export default Compare;
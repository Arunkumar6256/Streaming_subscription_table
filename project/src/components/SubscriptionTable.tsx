import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Zap, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PaymentModal from './PaymentModal';

interface Plan {
  name: string;
  service: string;
  price: number;
  period: string;
  color: string;
  gradient: string;
  popular?: boolean;
  features: string[];
  screens: number;
  quality: string;
  downloads: boolean;
  link: string;
  stripeLink: string;
}

const plans: Plan[] = [
  {
    name: 'Prime Video',
    service: 'Amazon Prime',
    price: 1499,
    period: 'year',
    color: 'from-orange-500 to-yellow-500',
    gradient: 'from-orange-50 to-yellow-50',
    features: [
      'Unlimited movies & TV shows',
      'Prime shipping benefits',
      'Prime Music included',
      'Prime Reading access',
      'Exclusive Prime Originals',
      'No ads on most content'
    ],
    screens: 3,
    quality: '4K Ultra HD',
    downloads: true,
    link: '/amazon-prime',
    stripeLink: 'https://buy.stripe.com/test_28E28t1ID88NcXY9WK2go01'
  },
  {
    name: 'Premium',
    service: 'Netflix',
    price: 649,
    period: 'month',
    color: 'from-red-600 to-red-500',
    gradient: 'from-red-50 to-pink-50',
    popular: true,
    features: [
      'Unlimited movies & TV shows',
      'Watch on any device',
      'No ads',
      'Download for offline viewing',
      'Netflix Originals',
      'HD & 4K available'
    ],
    screens: 4,
    quality: '4K Ultra HD',
    downloads: true,
    link: '/netflix',
    stripeLink: 'https://buy.stripe.com/test_6oU00l9b53Sx8HI4Cq2go02'
  },
  {
    name: 'Super',
    service: 'Disney+ Hotstar',
    price: 1499,
    period: 'year',
    color: 'from-blue-600 to-indigo-600',
    gradient: 'from-blue-50 to-indigo-50',
    features: [
      'Disney+ premium content',
      'Live sports streaming',
      'Hotstar Specials',
      'Kids safe mode',
      'Multiple languages',
      'Ad-free experience'
    ],
    screens: 4,
    quality: '4K Ultra HD',
    downloads: true,
    link: '/disney-hotstar',
    stripeLink: 'https://buy.stripe.com/test_6oUbJ3fztagV0bced02go00'
  }
];

const SubscriptionTable = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare features, pricing, and benefits across top streaming platforms. 
            All plans include HD streaming and multiple device support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl shadow-xl transform transition-all duration-300 hover:shadow-2xl bg-gradient-to-br ${plan.gradient} border-2 border-transparent hover:border-gray-200`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className={`inline-block p-4 rounded-full bg-gradient-to-r ${plan.color} mb-4`}>
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.service}</h3>
                  <p className="text-lg text-gray-600 mb-4">{plan.name} Plan</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">₹{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Screens</span>
                    <span className="font-semibold text-gray-900">{plan.screens}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Quality</span>
                    <span className="font-semibold text-gray-900">{plan.quality}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Downloads</span>
                    <span className="font-semibold text-green-600">
                      {plan.downloads ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Link
                    to={plan.link}
                    className={`w-full py-3 px-6 rounded-xl font-bold text-white text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r ${plan.color} flex items-center justify-center gap-2`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  
                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className="w-full py-3 px-6 rounded-xl font-medium text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-900">Why Choose Our Platform?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Secure Payments</h4>
                <p className="text-gray-600">Bank-grade security for all transactions</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Best Prices</h4>
                <p className="text-gray-600">Competitive pricing across all platforms</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Instant Access</h4>
                <p className="text-gray-600">Start streaming immediately after purchase</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                to="/compare"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Compare All Plans
                <ArrowRight className="w-5 h-5" />
              </Link>
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
    </section>
  );
};

export default SubscriptionTable;
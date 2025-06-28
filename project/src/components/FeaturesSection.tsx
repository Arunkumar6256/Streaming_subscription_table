import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, Users, Download, Tv } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Bank-grade security with SSL encryption for all transactions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Start streaming immediately after successful payment',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: '4K Ultra HD streaming with HDR support on all platforms',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Multiple Profiles',
      description: 'Create separate profiles for family members with parental controls',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Download,
      title: 'Offline Viewing',
      description: 'Download content to watch offline on any device',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Tv,
      title: 'Multi-Device',
      description: 'Watch on TV, laptop, tablet, or mobile with seamless sync',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose StreamCompare?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make it easy to find and subscribe to the perfect streaming service for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
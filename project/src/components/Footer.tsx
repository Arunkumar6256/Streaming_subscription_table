import React from 'react';
import { Play, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Play className="w-8 h-8 text-blue-400" fill="currentColor" />
            <span className="text-2xl font-bold">StreamCompare</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            <span>for streaming enthusiasts</span>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 StreamCompare. All rights reserved. | Secure payments powered by Stripe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
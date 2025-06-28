import React from 'react';
import { Play, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <Play className="text-white w-16 h-16" fill="currentColor" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Stream<span className="text-blue-400">Compare</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Compare the best streaming services and find your perfect entertainment package. 
            Get instant access to thousands of movies, shows, and exclusive content.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-blue-200">
              <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
              <span className="font-semibold">Premium Content</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <Users className="w-5 h-5 text-green-400" />
              <span className="font-semibold">Multiple Profiles</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <Play className="w-5 h-5 text-purple-400" />
              <span className="font-semibold">HD & 4K Streaming</span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Compare Plans Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
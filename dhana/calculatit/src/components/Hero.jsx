import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-blue-900 to-blue-700 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Your All-in-One Calculation Hub
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Free, accurate, and easy-to-use calculators for all your personal and professional needs
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#tools"
            className="btn btn-secondary inline-flex items-center justify-center"
          >
            Explore Tools
            <ArrowDownIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;

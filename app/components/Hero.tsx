import React from 'react';
import Link from 'next/link';
import PhoneFrame from './PhoneFrame';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white overflow-hidden">
      <div className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideUp">
              Smart Budget Tracking with CAP AI
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-slideUp animation-delay-200">
              Take control of your finances with our intelligent budget tracker. Plan, track, and save with powerful AI assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slideUp animation-delay-400">
              <Link href="#download" className="btn bg-white text-primary-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                Download Now
              </Link>
              <Link href="#features" className="btn bg-primary-600 border border-white hover:bg-primary-700 hover:scale-105 transition-all duration-300">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative animate-float">
            <PhoneFrame 
              src="/images/0x0ss.png"
              alt="CAP AI Budget Tracker App"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
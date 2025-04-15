import React from 'react';
import Link from 'next/link';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import PhoneFrame from './PhoneFrame';

const Download = () => {
  return (
    <section id="download" className="section bg-primary-700 text-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slideUp">Download CAP AI Today</h2>
            <p className="text-lg mb-8 animate-slideUp animation-delay-200">
              Start tracking your finances, setting budgets, and receiving AI-powered insights with just a few taps.
              Available for iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slideUp animation-delay-400">
              <a 
                href="#" 
                className="btn bg-black flex items-center justify-center gap-2 hover:bg-gray-900 hover:scale-105 transition-all duration-300"
              >
                <FaApple className="text-xl" />
                <span>App Store</span>
              </a>
              <a 
                href="#" 
                className="btn bg-black flex items-center justify-center gap-2 hover:bg-gray-900 hover:scale-105 transition-all duration-300"
              >
                <FaGooglePlay className="text-xl" />
                <span>Google Play</span>
              </a>
            </div>
          </div>
          <div className="relative flex justify-center transform hover:rotate-3 transition-transform duration-700 animate-float">
            <PhoneFrame
              src="/images/0x0ss (5).png"
              alt="CAP AI Budget Tracker App"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download; 
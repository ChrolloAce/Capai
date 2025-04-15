import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12 overflow-hidden">
              <Image
                src="/images/CAPAILOGO.png"
                alt="CAP AI Logo"
                fill
                style={{ objectFit: 'contain' }}
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text">CAP AI</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-primary-700 transition-colors duration-300">
            Features
          </Link>
          <Link href="#app-screens" className="text-gray-600 hover:text-primary-700 transition-colors duration-300">
            Screenshots
          </Link>
          <Link href="#download" className="text-gray-600 hover:text-primary-700 transition-colors duration-300">
            Download
          </Link>
        </nav>
        <div>
          <Link href="#download" className="btn btn-primary hover:scale-105 transition-transform duration-300">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 
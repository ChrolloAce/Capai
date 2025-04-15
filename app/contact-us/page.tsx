import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary-700 text-center">Contact Us</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h2>
              <p className="text-center text-gray-600 mb-8">
                Have questions about CAP AI Budget Tracker? Our team is here to help you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <FaUser className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Salman</h3>
                      <p className="text-gray-600 text-sm">Primary Contact</p>
                    </div>
                  </div>
                  <div className="ml-16 space-y-3">
                    <div className="flex items-center">
                      <FaPhone className="text-primary-600 mr-2" />
                      <p>+923098675247</p>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="text-primary-600 mr-2" />
                      <p>salmandotweb@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <FaUser className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Nisar</h3>
                      <p className="text-gray-600 text-sm">Secondary Contact</p>
                    </div>
                  </div>
                  <div className="ml-16 space-y-3">
                    <div className="flex items-center">
                      <FaEnvelope className="text-primary-600 mr-2" />
                      <p>salmandotweb@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/" className="btn btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 
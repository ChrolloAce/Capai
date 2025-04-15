import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary-700">Privacy Policy</h1>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              At CAP AI, we collect information that helps us provide and improve our budget tracking services. 
              This may include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Personal information you provide (name, email address)</li>
              <li>Financial information you input to track your budget</li>
              <li>Device and usage information (how you use our app)</li>
              <li>Information from third-party services with your permission</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide and maintain our service</li>
              <li>Improve and personalize your experience</li>
              <li>Process transactions</li>
              <li>Send service-related notifications</li>
              <li>Provide customer support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your data against unauthorized access, 
              alteration, disclosure, or destruction. Your financial data is encrypted and stored securely.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Data Sharing</h2>
            <p className="mb-4">We don't sell your data to third parties. We may share information with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Service providers who help us deliver our services</li>
              <li>Partners with your explicit consent</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Your Choices</h2>
            <p className="mb-4">
              You can access, update, or delete your personal information through the app settings. 
              You may also contact us to exercise your data rights.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Changes to This Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: salmandotweb@gmail.com</li>
              <li>Phone: +923098675247</li>
            </ul>
          </div>
          
          <p className="mt-8 text-center text-gray-600">
            Last Updated: {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
          </p>
          
          <div className="mt-8 text-center">
            <Link href="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 
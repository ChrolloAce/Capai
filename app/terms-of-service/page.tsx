import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary-700">Terms of Service</h1>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using the CAP AI Budget Tracker application ("the App"), you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use the App.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Description of Service</h2>
            <p className="mb-4">
              CAP AI provides a budget tracking and financial management application that allows users to track expenses, 
              set budgets, and receive financial insights. The App may be updated from time to time to enhance functionality.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">3. User Accounts</h2>
            <p className="mb-4">
              To use certain features of the App, you may need to create an account. You are responsible for maintaining 
              the confidentiality of your account information and for all activities that occur under your account.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">4. User Responsibilities</h2>
            <p className="mb-4">As a user of the App, you agree to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Not use the App for any illegal or unauthorized purpose</li>
              <li>Not attempt to access any other user's account or data</li>
              <li>Not interfere with the proper functioning of the App</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              The App, including all content, features, and functionality, is owned by CAP AI and is protected by copyright, 
              trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative 
              works based upon the App without express permission.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Disclaimer of Warranties</h2>
            <p className="mb-4">
              The App is provided "as is" and "as available" without warranties of any kind, either express or implied. 
              CAP AI does not guarantee that the App will be uninterrupted, secure, or error-free.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              CAP AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting 
              from your use of or inability to use the App.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
            <p className="mb-4">
              CAP AI reserves the right to modify these Terms at any time. We will notify users of any material changes by 
              posting the new Terms on the App or via email.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4">9. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
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
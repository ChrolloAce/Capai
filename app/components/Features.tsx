import React from 'react';
import { FaChartLine, FaBell, FaLock, FaRobot } from 'react-icons/fa';

const features = [
  {
    icon: <FaChartLine className="text-4xl text-primary-600" />,
    title: 'Expense Tracking',
    description: 'Track your spending in real-time across multiple categories and accounts.'
  },
  {
    icon: <FaBell className="text-4xl text-primary-600" />,
    title: 'Budget Alerts',
    description: 'Set budget limits and get notified when you are approaching your spending threshold.'
  },
  {
    icon: <FaLock className="text-4xl text-primary-600" />,
    title: 'Secure Data',
    description: 'Your financial data is encrypted and securely stored with bank-level security.'
  },
  {
    icon: <FaRobot className="text-4xl text-primary-600" />,
    title: 'AI Insights',
    description: 'Get personalized financial insights and recommendations powered by artificial intelligence.'
  }
];

const Features = () => {
  return (
    <section id="features" className="section bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">Smart Features for Smarter Budgeting</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            CAP AI combines powerful budget tracking with intelligent features to help you manage your money better.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform hover:-rotate-1 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 animate-float" style={{ animationDelay: `${index * 200}ms` }}>{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 
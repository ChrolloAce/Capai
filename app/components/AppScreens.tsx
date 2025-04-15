import React from 'react';
import PhoneFrame from './PhoneFrame';

const screenshots = [
  {
    src: '/images/0x0ss (1).png',
    alt: 'Budget Dashboard',
    title: 'Smart Dashboard',
    description: 'Get a comprehensive view of your finances at a glance'
  },
  {
    src: '/images/0x0ss (2).png',
    alt: 'Expense Tracking',
    title: 'Track Expenses',
    description: 'Easily categorize and monitor all your spending'
  },
  {
    src: '/images/0x0ss (3).png',
    alt: 'Budget Goals',
    title: 'Set Budgets',
    description: 'Create personalized budget goals for different categories'
  },
  {
    src: '/images/0x0ss (4).png',
    alt: 'AI Insights',
    title: 'AI Insights',
    description: 'Receive smart recommendations based on your spending patterns'
  }
];

const AppScreens = () => {
  return (
    <section id="app-screens" className="section bg-gray-50 overflow-hidden">
      <div className="container">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">Powerful Budget Management</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Take a look at what makes CAP AI the smartest way to manage your finances
          </p>
        </div>
        
        <div className="flex flex-nowrap overflow-x-auto py-8 gap-12 snap-x snap-mandatory scrollbar-hide">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index} 
              className="snap-center shrink-0 px-4 transition-all duration-500 hover:scale-105 transform"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                  <PhoneFrame
                    src={screenshot.src}
                    alt={screenshot.alt}
                  />
                </div>
                <div className="mt-6 text-center max-w-xs">
                  <h3 className="text-xl font-semibold mb-2 text-primary-700">{screenshot.title}</h3>
                  <p className="text-gray-600">{screenshot.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppScreens; 
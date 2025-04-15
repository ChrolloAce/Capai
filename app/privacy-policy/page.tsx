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
            <p className="mb-4 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            
            <p className="mb-6">
              This Privacy Policy describes how CAP AI ("we," "our," or "us") collects, uses, and discloses your information 
              when you use our mobile application CAP AI Budget Tracker (the "App"). Please read this Privacy Policy carefully.
            </p>
            
            <p className="mb-6">
              By using the App, you agree to the collection and use of information in accordance with this Privacy Policy. 
              This Privacy Policy has been created to comply with applicable data protection laws, including the 
              General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and the 
              requirements of the Apple App Store and Google Play Store.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
            
            <h3 className="text-lg font-medium mb-2">1.1 Information You Provide to Us</h3>
            <p className="mb-4">
              We collect information you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Create an account (name, email address, password)</li>
              <li>Set up your profile (demographic information, profile pictures)</li>
              <li>Input financial data (expenses, income, budget categories, financial goals)</li>
              <li>Connect financial accounts (with your explicit permission)</li>
              <li>Contact our customer support (communication history, contact details)</li>
              <li>Participate in surveys or promotions (survey responses, feedback)</li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2">1.2 Information We Collect Automatically</h3>
            <p className="mb-4">
              When you use our App, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Device Information:</strong> Device type, operating system, unique device identifiers, 
                mobile network information, IP address
              </li>
              <li>
                <strong>Usage Information:</strong> How you use the App, features you access, time spent on the App, 
                actions taken, preferences
              </li>
              <li>
                <strong>Performance Data:</strong> App crashes, debugging information, and performance metrics
              </li>
              <li>
                <strong>Location Information:</strong> With your permission, we may collect precise or approximate 
                location information for features like finding nearby ATMs or categorizing expenses by location
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2">1.3 Information From Third Parties</h3>
            <p className="mb-4">
              With your permission, we may collect information from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Financial institutions when you choose to connect your accounts</li>
              <li>Social media platforms if you choose to connect your social accounts</li>
              <li>Identity verification services for security purposes</li>
              <li>Analytics providers to help us understand App usage</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            
            <h3 className="text-lg font-medium mb-2">2.1 Provide and Improve Our Services</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Create and maintain your account</li>
              <li>Process and display your financial data</li>
              <li>Generate budget recommendations and financial insights</li>
              <li>Improve the App's functionality and user experience</li>
              <li>Develop new features and services</li>
              <li>Troubleshoot issues and debug the App</li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2">2.2 Personalization</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Customize your experience based on your preferences and usage patterns</li>
              <li>Provide personalized financial advice and insights</li>
              <li>Suggest relevant features or tips</li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2">2.3 Communications</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Send important notifications about your account or budgets</li>
              <li>Respond to your queries and provide customer support</li>
              <li>Send updates about new features or services</li>
              <li>With your consent, send promotional materials or newsletters</li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2">2.4 Security and Legal Compliance</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Protect against fraudulent or unauthorized activity</li>
              <li>Verify your identity when needed</li>
              <li>Comply with applicable laws and regulations</li>
              <li>Enforce our Terms of Service</li>
              <li>Establish, exercise, or defend legal claims</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">3. How We Share Your Information</h2>
            <p className="mb-4">We may share your information with:</p>
            
            <h3 className="text-lg font-medium mb-2">3.1 Service Providers</h3>
            <p className="mb-4">
              We work with third-party service providers who help us operate, provide, and improve our services. 
              These providers may have access to your information to perform tasks on our behalf, such as data hosting, 
              analytics, customer service, and fraud prevention. They are contractually obligated to use your data 
              only for the purposes of providing services to us and to maintain appropriate security measures.
            </p>
            
            <h3 className="text-lg font-medium mb-2">3.2 With Your Consent</h3>
            <p className="mb-4">
              We may share your information with third parties when you explicitly consent to such sharing, 
              such as when you choose to connect your financial accounts or share your budget progress with others.
            </p>
            
            <h3 className="text-lg font-medium mb-2">3.3 For Legal Reasons</h3>
            <p className="mb-4">
              We may disclose your information if we believe in good faith that it is necessary to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Comply with applicable laws or legal processes</li>
              <li>Respond to claims against us</li>
              <li>Protect the rights, property, or safety of CAP AI, our users, or the public</li>
              <li>Detect, prevent, or address fraud, security, or technical issues</li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2">3.4 Business Transfers</h3>
            <p className="mb-4">
              If CAP AI is involved in a merger, acquisition, or sale of all or a portion of its assets, 
              your information may be transferred as part of that transaction. We will notify you via email 
              and/or a prominent notice in our App of any change in ownership or uses of your information.
            </p>
            
            <h3 className="text-lg font-medium mb-2">3.5 Aggregated and Anonymized Data</h3>
            <p className="mb-4">
              We may share aggregated, anonymized, or de-identified information that cannot reasonably be used 
              to identify you with third parties for various purposes, including research, analytics, and 
              improving our services.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Secure authentication protocols</li>
              <li>Regular security assessments and testing</li>
              <li>Limited access to personal information by authorized personnel only</li>
              <li>Physical and electronic safeguards for our systems</li>
            </ul>
            <p className="mb-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. 
              While we strive to use commercially acceptable means to protect your personal information, 
              we cannot guarantee its absolute security.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Your Rights and Choices</h2>
            
            <h3 className="text-lg font-medium mb-2">5.1 Account Information</h3>
            <p className="mb-4">
              You can review, update, or delete your account information at any time by accessing your account settings in the App. 
              Note that we may retain certain information as required by law or for legitimate business purposes.
            </p>
            
            <h3 className="text-lg font-medium mb-2">5.2 Privacy Rights</h3>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The right to access and receive a copy of your personal data</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to processing of your data</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us at andrewlow2457@gmail.com. We will respond to your request 
              within the timeframe required by applicable law.
            </p>
            
            <h3 className="text-lg font-medium mb-2">5.3 Communication Preferences</h3>
            <p className="mb-4">
              You can opt out of receiving promotional emails by following the unsubscribe instructions in those emails. 
              You may still receive service-related and other non-promotional communications.
            </p>
            
            <h3 className="text-lg font-medium mb-2">5.4 Mobile Device Permissions</h3>
            <p className="mb-4">
              You can control the App's access to certain device features like location, camera, or contacts through your 
              device settings. Note that limiting certain permissions may affect the functionality of some App features.
            </p>
            
            <h3 className="text-lg font-medium mb-2">5.5 Do Not Track</h3>
            <p className="mb-4">
              Some browsers have a "Do Not Track" feature that signals to websites that you do not want to have your online activity tracked. 
              Given the lack of a common standard for Do Not Track signals, our App does not currently respond to Do Not Track signals.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Children's Privacy</h2>
            <p className="mb-4">
              Our App is not directed to children under 13 (or the minimum age required in your country). 
              We do not knowingly collect personal information from children under this age. 
              If we learn that we have collected personal information from a child under this age, 
              we will take steps to delete such information as quickly as possible. 
              If you believe we have collected information from a child under this age, 
              please contact us at andrewlow2457@gmail.com.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">7. International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to, stored, and processed in countries other than the one in which you reside. 
              By using our App, you consent to the transfer of your information to countries which may have different data 
              protection rules than your country. We take appropriate safeguards to ensure your information remains protected 
              in accordance with this Privacy Policy.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required or permitted by law. When determining how long to retain information, 
              we consider the amount, nature, and sensitivity of the information, the potential risk of harm from unauthorized 
              use or disclosure, the purposes for which we process the information, whether we can achieve those purposes through 
              other means, and applicable legal requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">9. Third-Party Links and Services</h2>
            <p className="mb-4">
              Our App may contain links to third-party websites, services, or resources that are not owned or controlled by CAP AI. 
              We are not responsible for the privacy practices or the content of such third-party services. 
              We encourage you to review the privacy policies of any third-party services you access through our App.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
              legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy in 
              the App and updating the "Last Updated" date at the top of this policy. Your continued use of the App after such 
              modifications will constitute your acknowledgment of the modified Privacy Policy.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: andrewlow2457@gmail.com</li>
              <li>Phone: +65 9465 1800</li>
            </ul>
            <p className="mt-4">
              We will respond to your inquiry as soon as possible and within the timeframe required by applicable law.
            </p>
          </div>
          
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
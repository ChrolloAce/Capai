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
            <p className="mb-4 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            
            <p className="mb-6">
              Please read these Terms of Service ("Terms") carefully before using the CAP AI Budget Tracker mobile application 
              (the "App") operated by CAP AI ("us", "we", or "our").
            </p>
            
            <p className="mb-6">
              By downloading, accessing, or using the App, you agree to be bound by these Terms. If you disagree with any part 
              of the Terms, then you do not have permission to access or use the App.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Definitions</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>"App"</strong> refers to the CAP AI Budget Tracker mobile application.</li>
              <li><strong>"Service"</strong> refers to the App and any services provided through the App.</li>
              <li><strong>"User"</strong> refers to the individual accessing or using the Service.</li>
              <li><strong>"Content"</strong> refers to text, images, videos, audio, and any other materials that appear on the App.</li>
              <li><strong>"User Content"</strong> refers to any information, data, or content that users submit to the App.</li>
              <li><strong>"Personal Information"</strong> refers to information that identifies or can be used to identify a User.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using the App, you confirm that:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You have read and understood these Terms and agree to be bound by them.</li>
              <li>You are at least 13 years old (or the minimum legal age in your jurisdiction).</li>
              <li>If you are using the App on behalf of a company or organization, you have the authority to bind that entity to these Terms.</li>
              <li>Your use of the App will comply with all applicable laws and regulations.</li>
            </ul>
            <p className="mb-4">
              If you do not agree to these Terms, you must not access or use the App.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Description of Service</h2>
            <p className="mb-4">
              CAP AI provides a budget tracking and financial management application that allows users to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Track personal expenses and income</li>
              <li>Create and manage budgets</li>
              <li>Set financial goals</li>
              <li>Receive financial insights and recommendations</li>
              <li>Connect financial accounts (with explicit permission)</li>
              <li>Generate financial reports and analytics</li>
            </ul>
            <p className="mb-4">
              We reserve the right to modify, suspend, or discontinue the Service (or any part or feature) at any time, 
              with or without notice. We will not be liable to you or any third party for any modification, suspension, 
              or discontinuation of the Service.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">4. User Accounts</h2>
            
            <h3 className="text-lg font-medium mb-2">4.1 Account Creation</h3>
            <p className="mb-4">
              To use certain features of the App, you may need to create an account. When you create an account, 
              you must provide accurate, current, and complete information. You are responsible for maintaining 
              the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            
            <h3 className="text-lg font-medium mb-2">4.2 Account Security</h3>
            <p className="mb-4">
              You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Notify us immediately of any unauthorized access to or use of your account</li>
              <li>Ensure that you log out of your account at the end of each session</li>
              <li>Use reasonable efforts to prevent unauthorized access to your account</li>
              <li>Not share your account credentials with any third party</li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2">4.3 Account Termination</h3>
            <p className="mb-4">
              We reserve the right to suspend or terminate your account and access to the Service at our sole discretion, 
              without notice, for conduct that we believe violates these Terms or is harmful to other users of the App, 
              us, or third parties, or for any other reason.
            </p>
            <p className="mb-4">
              You may also terminate your account at any time by following the instructions in the App or by contacting us.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">5. User Responsibilities and Conduct</h2>
            
            <h3 className="text-lg font-medium mb-2">5.1 Prohibited Activities</h3>
            <p className="mb-4">
              You agree not to engage in any of the following activities:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Using the App for any illegal purpose or in violation of any laws</li>
              <li>Attempting to interfere with, compromise, or disrupt the App or servers</li>
              <li>Attempting to bypass any security measures of the App</li>
              <li>Accessing data not intended for you</li>
              <li>Introducing malware, viruses, or other harmful code to the App</li>
              <li>Attempting to reverse engineer any portion of the App</li>
              <li>Collecting or harvesting data from the App without permission</li>
              <li>Using the App to generate unauthorized automated requests</li>
              <li>Impersonating another person or entity</li>
              <li>Interfering with any other user's enjoyment of the App</li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2">5.2 User Content</h3>
            <p className="mb-4">
              You are solely responsible for any content you submit to the App. By submitting content, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You own all rights to the content or have all necessary permissions to use and share it</li>
              <li>The content does not violate any third-party rights, including intellectual property rights and privacy rights</li>
              <li>The content does not contain any material that is defamatory, obscene, or otherwise unlawful</li>
              <li>The content does not contain any viruses, malware, or other harmful code</li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2">5.3 Accuracy of Information</h3>
            <p className="mb-4">
              You are responsible for ensuring that the financial information you input into the App is accurate. 
              While we strive to provide helpful financial insights, we cannot guarantee the accuracy of any financial 
              recommendations or projections based on the information you provide.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Intellectual Property</h2>
            
            <h3 className="text-lg font-medium mb-2">6.1 App Content</h3>
            <p className="mb-4">
              The App and its content, features, and functionality are owned by CAP AI and are protected by copyright, 
              trademark, patent, trade secret, and other intellectual property or proprietary rights laws. The App's content 
              includes, but is not limited to, text, graphics, logos, icons, images, audio clips, software, and user interfaces.
            </p>
            
            <h3 className="text-lg font-medium mb-2">6.2 License to Use</h3>
            <p className="mb-4">
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to 
              access and use the App for your personal, non-commercial use. You may not:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Reproduce, distribute, display, or transmit the App for any purpose</li>
              <li>Modify, adapt, or hack the App</li>
              <li>Use the App to develop a competing product</li>
              <li>Decompile, reverse engineer, or attempt to extract the source code of the App</li>
              <li>Remove any copyright, trademark, or other proprietary notices from the App</li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2">6.3 User Content License</h3>
            <p className="mb-4">
              By submitting content to the App, you grant us a worldwide, non-exclusive, royalty-free license 
              to use, reproduce, modify, adapt, publish, and display such content in connection with providing 
              and promoting the App. This license continues even if you stop using our App, but we will respect 
              your privacy settings and any content designated as private will be treated accordingly.
            </p>
            
            <h3 className="text-lg font-medium mb-2">6.4 Feedback</h3>
            <p className="mb-4">
              If you provide us with feedback about the App, you grant us the right to use that feedback without any 
              restriction or compensation to you.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Third-Party Services and Links</h2>
            <p className="mb-4">
              The App may contain links to third-party websites or services that are not owned or controlled by CAP AI. 
              We have no control over, and assume no responsibility for, the content, privacy policies, or practices of 
              any third-party websites or services. We do not warrant the offerings of any of these third parties.
            </p>
            <p className="mb-4">
              Your interaction with such third-party websites or services is subject to their own terms and policies. 
              We strongly advise you to read the terms and conditions and privacy policies of any third-party websites 
              or services that you visit.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Subscription and Billing</h2>
            
            <h3 className="text-lg font-medium mb-2">8.1 Free and Paid Features</h3>
            <p className="mb-4">
              The App may offer both free and premium features. To access premium features, you may need to purchase 
              a subscription or one-time payment as specified in the App.
            </p>
            
            <h3 className="text-lg font-medium mb-2">8.2 Payment Processing</h3>
            <p className="mb-4">
              All payments are processed through third-party payment processors (such as Apple App Store or Google Play Store). 
              Your use of these payment services is subject to their terms and conditions. We are not responsible for any 
              errors or issues related to the processing of payments through these third-party services.
            </p>
            
            <h3 className="text-lg font-medium mb-2">8.3 Subscription Renewal and Cancellation</h3>
            <p className="mb-4">
              Subscriptions automatically renew unless auto-renewal is turned off at least 24 hours before the end of the 
              current period. You can manage your subscription and turn off auto-renewal through your app store account settings.
            </p>
            <p className="mb-4">
              If you cancel your subscription, you will continue to have access to premium features until the end of your 
              current billing period. We do not provide refunds for the unused portion of your subscription period.
            </p>
            
            <h3 className="text-lg font-medium mb-2">8.4 Price Changes</h3>
            <p className="mb-4">
              We reserve the right to change our subscription fees at any time. If we change our fees, we will provide 
              notice of the change on the App or in email to you, at our option, at least 30 days before the change is 
              to take effect. Your continued use of the premium features after the fee change becomes effective constitutes 
              your agreement to pay the changed amount.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
            <p className="mb-4">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
              INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
              NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
            </p>
            <p className="mb-4">
              CAP AI, ITS SUBSIDIARIES, AFFILIATES, AND LICENSORS DO NOT WARRANT THAT:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>THE APP WILL FUNCTION UNINTERRUPTED, SECURE, OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION</li>
              <li>ANY ERRORS OR DEFECTS WILL BE CORRECTED</li>
              <li>THE APP IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS</li>
              <li>THE RESULTS OF USING THE APP WILL MEET YOUR REQUIREMENTS</li>
              <li>THE FINANCIAL RECOMMENDATIONS OR INSIGHTS PROVIDED ARE ACCURATE, COMPLETE, OR SUITABLE FOR YOUR CIRCUMSTANCES</li>
            </ul>
            <p className="mb-4">
              THE APP DOES NOT PROVIDE PROFESSIONAL FINANCIAL ADVICE. THE CONTENT IS FOR INFORMATIONAL PURPOSES ONLY AND IS NOT 
              INTENDED TO BE A SUBSTITUTE FOR PROFESSIONAL FINANCIAL ADVICE, DIAGNOSIS, OR TREATMENT. ALWAYS SEEK THE ADVICE OF 
              A QUALIFIED FINANCIAL ADVISOR WITH ANY QUESTIONS YOU MAY HAVE REGARDING YOUR FINANCIAL SITUATION.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="mb-4">
              IN NO EVENT SHALL CAP AI, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR 
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF 
              PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE APP</li>
              <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE APP</li>
              <li>ANY CONTENT OBTAINED FROM THE APP</li>
              <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
              <li>ANY FINANCIAL DECISIONS MADE BASED ON INFORMATION OR RECOMMENDATIONS PROVIDED BY THE APP</li>
            </ul>
            <p className="mb-4">
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, 
              SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IN SUCH CASES, OUR LIABILITY WILL BE LIMITED TO THE FULLEST EXTENT 
              PERMITTED BY APPLICABLE LAW.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">11. Indemnification</h2>
            <p className="mb-4">
              You agree to defend, indemnify, and hold harmless CAP AI, its officers, directors, employees, and agents, 
              from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses 
              (including but not limited to attorney's fees) arising from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your use of and access to the App</li>
              <li>Your violation of any term of these Terms</li>
              <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
              <li>Any claim that your User Content caused damage to a third party</li>
            </ul>
            <p className="mb-4">
              This defense and indemnification obligation will survive these Terms and your use of the App.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">12. Governing Law and Dispute Resolution</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of Singapore, 
              without regard to its conflict of law provisions.
            </p>
            <p className="mb-4">
              Any dispute arising from or relating to the subject matter of these Terms shall be finally settled by 
              arbitration in Singapore, using the English language in accordance with the Arbitration Rules of the 
              Singapore International Arbitration Centre ("SIAC Rules") then in effect, by one or more commercial 
              arbitrators with substantial experience in resolving intellectual property and commercial contract disputes.
            </p>
            <p className="mb-4">
              Any legal action, suit, or proceeding arising out of or relating to these Terms or the App must be 
              instituted exclusively in the courts located in Singapore, and you agree to submit to the personal 
              jurisdiction of such courts.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">13. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
              is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes 
              a material change will be determined at our sole discretion.
            </p>
            <p className="mb-4">
              By continuing to access or use our App after any revisions become effective, you agree to be bound by the 
              revised terms. If you do not agree to the new terms, you are no longer authorized to use the App.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">14. Severability</h2>
            <p className="mb-4">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and 
              interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, 
              and the remaining provisions will continue in full force and effect.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4">15. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: andrewlow2457@gmail.com</li>
              <li>Phone: +65 9465 1800</li>
            </ul>
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
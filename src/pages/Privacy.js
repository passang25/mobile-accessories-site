import React from "react";

function Privacy() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen py-10 px-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-lg">
            Last updated: June 2025
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg space-y-4 text-center">
        
          <img src="/assets/Intro.jpg" alt="Privacy" className="w-full rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p className="leading-relaxed">
            Welcome to our website. Your privacy is critically important to us. This privacy policy explains how we collect, use, and protect your information when you visit our site. We are committed to maintaining the confidentiality of any personal data you share with us and ensuring transparency in our data-handling practices.
          </p>
        </div>

        {/* Cookies Section */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg space-y-4 text-center">
          <img src="/assets/Cookies.jpg" className="w-full rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p className="leading-relaxed">
            Our website uses cookies to personalize content, provide social media features, and analyze our traffic. Cookies are small data files stored on your device. They help us understand user behavior and enhance your experience. However, they do not collect any personal information. You can disable cookies anytime through your browser settings.
          </p>
        </div>

        {/* Google AdSense Section */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg space-y-4 text-center">
    <img src="/assets/Ads.jpg" className="w-full rounded-lg mb-4" />

          <h2 className="text-2xl font-semibold">Google AdSense</h2>
          <p className="leading-relaxed">
            We use Google AdSense on our site to display relevant advertisements. Google may use cookies or web beacons to deliver these ads and measure their effectiveness. These cookies help serve personalized ads based on your interests and browsing history. You can opt out of personalized ads by visiting 
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline ml-1">Google Ads Settings</a>.
          </p>
        </div>

        {/* Data Collection Section */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg space-y-4 text-center">
          <img src="/assets/Data.jpg" className="w-full rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold">Data Collection</h2>
          <p className="leading-relaxed">
            We do not collect any personally identifiable information unless you voluntarily provide it via contact forms or email. Your data will never be sold, shared, or disclosed to third parties without your consent. All data is stored securely and used only for the purpose you intended.
          </p>
        </div>

        {/* User Rights Section */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg space-y-4 text-center">
      <img src="/assets/Rights.jpg" className="w-full rounded-lg mb-4" />
          <h2 className="text-2xl font-semibold">User Rights</h2>
          <p className="leading-relaxed">
            As a user, you have the right to access, modify, or delete any personal data you've shared with us. You can also opt out of cookie tracking or personalized advertising by adjusting your browser settings. For any data requests or privacy concerns, please contact us through the information provided on our Contact page.
          </p>
        </div>

        {/* Acceptance Section */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold text-center">Consent</h2>
          <p className="leading-relaxed">
            By using our site, you consent to our privacy policy. We reserve the right to update or modify this policy at any time without prior notice. Please review this page periodically for the latest information on our privacy practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
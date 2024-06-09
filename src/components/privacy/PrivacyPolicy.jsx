import React from 'react';
import './PrivacyPolicy.css'; // Import the CSS file

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy">
        <h1>Privacy Policy</h1>
        <p>Last updated: 09.06.2024</p>

        <h2>Introduction</h2>
        <p>
          Welcome to our Privacy Policy. Your privacy is critically important to us.
          This policy explains how we collect, use, and protect your information when you use our website.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We use Google Analytics to collect information about your use of our website. This includes:
        </p>
        <ul>
          <li>Your IP address</li>
          <li>Geographical location</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referral source</li>
          <li>Length of visit</li>
          <li>Page views</li>
          <li>Website navigation paths</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          The information collected via Google Analytics helps us understand how our website is used.
          This enables us to improve our website's functionality and user experience. We do not use this information for any other purpose.
        </p>

        <h2>Sharing Your Information</h2>
        <p>
          We do not share your personal information with any third parties, except to the extent necessary
          to use Google Analytics as described in this policy.
        </p>

        <h2>Your Consent</h2>
        <p>
          By using our website, you consent to our use of Google Analytics and the collection of data as outlined in this policy.
          If you do not agree, please do not use our website.
        </p>

        <h2>Opting Out</h2>
        <p>
          You can opt-out of Google Analytics tracking by using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

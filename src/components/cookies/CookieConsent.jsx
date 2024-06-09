import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setShowBanner(true);
    } else if (consent === 'true') {
      loadGoogleTagManager();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    loadGoogleTagManager();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
  };

  const loadGoogleTagManager = () => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-5M9KDVWB`;
    script.async = true;
    document.head.appendChild(script);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5M9KDVWB" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(noscript);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-consent-banner">
      <p>
        We use cookies and other tracking technologies to improve your browsing experience on our website. 
        By using our site, you consent to our use of cookies. 
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Learn more</a>
      </p>
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleDecline}>Decline</button>
    </div>
  );
};

export default CookieConsent;

// Footer.js
import './App.css'; // Make sure to import the CSS file
import React from 'react';

const Footer = () => {
    return (
        <footer className="App-footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} NoAf.De. All rights reserved.</p>
                {/* You can add more footer content here */}
            </div>
        </footer>
    );
};

export default Footer;

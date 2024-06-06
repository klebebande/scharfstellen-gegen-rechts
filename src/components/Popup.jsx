import React from 'react';
import './Popup.css';

const Popup = ({ content, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-button" onClick={onClose}>X</button>
        <div>{content}</div>
        <button className="schliessen-button" onClick={onClose}>Schließen</button>
      </div>
    </div>
  );
};

export default Popup;

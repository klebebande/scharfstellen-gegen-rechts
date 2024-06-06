import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdown from '../hooks/useMarkdown';
import Popup from './Popup';
import './MarkdownRenderer.css';

const MarkdownRenderer = ({ file }) => {
  const { content, data } = useMarkdown(file);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Split content into main content and quellen
  const mainContent = content.split('# Quellen')[0];
  const quellenContent = content.includes('# Quellen') ? content.split('# Quellen')[1] : '';

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="markdown-container" style={{ backgroundColor: data.color }}>
      {/* {data.title && <h1>{data.title}</h1>} */}
      <ReactMarkdown>{mainContent}</ReactMarkdown>
      <div className="button-container">
        <button onClick={handleButtonClick}>
          Quellen
        </button>
      </div>
      {isPopupOpen && (
        <Popup content={<ReactMarkdown>{`# Quellen${quellenContent}`}</ReactMarkdown>} onClose={closePopup} />
      )}
    </div>
  );
};

export default MarkdownRenderer;

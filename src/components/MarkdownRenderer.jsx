import React from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdown from '../hooks/useMarkdown';
import './MarkdownRenderer.css';

const MarkdownRenderer = ({ file }) => {
  const { content, data } = useMarkdown(file);

  return (
    <div className="markdown-container" style={{ backgroundColor: data.color }}>
      {data.title && <h1>{data.title}</h1>}
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;

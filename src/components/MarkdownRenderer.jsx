import React from 'react';
import useMarkdown from '../hooks/useMarkdown';
import './MarkdownRenderer.css';

const MarkdownRenderer = ({ file }) => {
  const { content, data } = useMarkdown(file);

  return (
    <div className="markdown-container">
      {data.title && <h1>{data.title}</h1>}
      {data.teaser && <div className="teaser-box">{data.teaser}</div>}
      <pre>{content}</pre>
    </div>
  );
};

export default MarkdownRenderer;

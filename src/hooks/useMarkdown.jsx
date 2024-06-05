import { useEffect, useState } from 'react';

const useMarkdown = (file) => {
  const [content, setContent] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => {
        // Manually parse the front matter
        const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
        const match = text.match(frontMatterRegex);

        let frontMatter = {};
        let markdownContent = text;

        if (match) {
          const frontMatterText = match[1];
          markdownContent = text.slice(match[0].length);

          frontMatterText.split('\n').forEach(line => {
            const [key, ...value] = line.split(':');
            frontMatter[key.trim()] = value.join(':').trim();
          });
        }

        setContent(markdownContent);
        setData(frontMatter);
      })
      .catch((error) => {
        console.error("Error fetching markdown:", error);
      });
  }, [file]);

  return { content, data };
};

export default useMarkdown;

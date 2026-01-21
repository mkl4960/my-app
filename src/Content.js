import React, { useState, useEffect } from 'react';

function Content() {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch('https://my-app.runasp.net/api/secure', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.text();
          setContent(data);
        } else {
          setError('Failed to load content.');
        }
      } catch (error) {
        setError('Failed to load content.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      <h2>Content</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {content && <p>{content}</p>}
    </div>
  );
}

export default Content;
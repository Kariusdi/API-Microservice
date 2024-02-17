import React, { useState } from 'react';

const DeleteButton = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleDeleteClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/queue/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        // Add any necessary DELETE request payload if needed
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {err && <h2>{err}</h2>}

      <button id='del' onClick={handleDeleteClick}>Pop Queue</button>

      {isLoading && <h2>Loading...</h2>}

    </div>
  );
};

export default DeleteButton;

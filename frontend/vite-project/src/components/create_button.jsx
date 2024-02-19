import React, { useState } from 'react';

const CreateButton = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handlePostClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://api/queue/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'value' }), // Replace with your POST data
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      // Handle the result as needed
      console.log(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* {err && <h2>{err}</h2>} */}

      <button id='add' onClick={handlePostClick}>Add Queue</button>

      {isLoading && <h2>Loading...</h2>}
    </div>
  );
};

export default CreateButton;

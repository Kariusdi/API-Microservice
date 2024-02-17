import React, { useState } from 'react';
import '../App.css'

const GetButton = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:32409/queue/get');

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result)
      setData(result)
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* {err && <h2>{err}</h2>} */}
      {data && <h4>{JSON.stringify(data, null, 2)}</h4>}

      <button id='get' onClick={handleClick}>Get Queue</button>

      {isLoading && <h2>Loading...</h2>}

    </div>
  );
};

export default GetButton;

'use client';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function Home() {
  const [httpMessage, setHttpMessage] = useState('');
  const [socketMessage, setSocketMessage] = useState('');

  // HTTP fetch — one-off request
  useEffect(() => {
    fetch('http://localhost:4000')
      .then((res) => res.text())
      .then((data) => setHttpMessage(data))
      .catch((err) => console.error('Fetch failed:', err));
  }, []);

  // WebSocket — persistent connection
  useEffect(() => {
    const socket = io('http://localhost:4000');

    socket.on('hello', (data) => {
      console.log('Received from server:', data);
      setSocketMessage(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <p>HTTP says: {httpMessage}</p>
      <p>Socket says: {socketMessage}</p>
    </div>
  );
}


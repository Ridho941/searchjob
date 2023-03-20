import React, { useState, useEffect } from 'react';

const Flash = ({ message, type, duration }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, duration || 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [duration]);

  if (!isVisible) {
    return null;
  }

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500'
  }

  return (
    <div className={`flex justify-center ${colors[type]} text-white py-2 px-4 rounded-md`}>
      {message}
    </div>
  );
}

export default Flash;
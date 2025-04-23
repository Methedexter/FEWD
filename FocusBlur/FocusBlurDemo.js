import React, { useState } from 'react';

const FocusBlurDemo = () => {
  const [focusedId, setFocusedId] = useState(null);

  const handleFocus = (id) => {
    setFocusedId(id);
  };

  return (
    <div className="p-6 space-y-4 text-center">
      <h2
        className={`cursor-pointer p-4 border-2 rounded-lg transition-all duration-300 hover:blur-sm ${
          focusedId === 'title' ? 'bg-blue-100 border-blue-500' : 'border-transparent'
        }`}
        onClick={() => handleFocus('title')}
      >
        Click me to focus
      </h2>

      <p
        className={`cursor-pointer p-4 border-2 rounded-lg transition-all duration-300 hover:blur-sm ${
          focusedId === 'text' ? 'bg-blue-100 border-blue-500' : 'border-transparent'
        }`}
        onClick={() => handleFocus('text')}
      >
        Click this text too!
      </p>

      <img
        src="/santorini.jpg"
        alt="Santorini"
        className="mx-auto rounded-lg hover:blur-sm transition duration-300 max-w-md w-full"
      />
    </div>
  );
};

export default FocusBlurDemo;
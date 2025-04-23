
import React, { useState } from 'react';

function FocusBlurDemo() {
  const [isFocused, setIsFocused] = useState(false);
  const [isTextBlurred, setIsTextBlurred] = useState(false);
  const [isImageBlurred, setIsImageBlurred] = useState(false);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2
        onMouseEnter={() => setIsTextBlurred(true)}
        onMouseLeave={() => setIsTextBlurred(false)}
        style={{
          filter: isTextBlurred ? 'blur(3px)' : 'none',
          transition: 'filter 0.3s',
          marginBottom: '20px',
        }}
      >
        Hover over this text to blur
      </h2>

      <input
        type="text"
        placeholder="Click to focus"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          padding: '10px',
          fontSize: '16px',
          outline: 'none',
          backgroundColor: isFocused ? 'lightyellow' : 'white',
          border: isFocused ? '2px solid orange' : '1px solid gray',
          marginBottom: '20px',
        }}
      />

      <div>
        <img
          src="/Lock.jpg"
          alt="Hover to blur"
          onMouseEnter={() => setIsImageBlurred(true)}
          onMouseLeave={() => setIsImageBlurred(false)}
          style={{
            filter: isImageBlurred ? 'blur(4px)' : 'none',
            transition: 'filter 0.3s',
            width: '450px',
            height: 'auto',
            marginTop: '20px',
          }}
        />
      </div>
    </div>
  );
}

export default FocusBlurDemo;

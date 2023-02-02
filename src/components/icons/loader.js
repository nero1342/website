import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* <path d="M110.7 117.03L85.59 83.64c13.01-5.37 22.18-18.08 22.18-32.87c0-19.63-16.13-35.61-35.96-35.61H33.95c-.15 0-.28.06-.42.09h-6.46c-1.24 0-2.24 1-2.24 2.24v100.96c0 1.24 1 2.24 2.24 2.24h21.89c1.24 0 2.24-1 2.24-2.24V86.37h8.64l25.2 33.51c.45.59 1.15.94 1.89.94h21.89c.9 0 1.72-.51 2.11-1.31c.4-.8.31-1.76-.23-2.48zM70.12 65.38c-.36.03-.72.06-1.08.06H51.57c-.05 0-.09-.04-.14-.06c-.09-.02-.18-.04-.24-.1a.577.577 0 0 1-.21-.43V36.67c0-.17.08-.32.21-.43c.06-.05.14-.07.22-.09c.06-.02.1-.07.16-.07h17.46c.42 0 .84.03 1.25.07c7.22.66 12.9 6.96 12.9 14.61c.01 7.72-5.76 14.04-13.06 14.62z" fill="#40C0E7"/> */}
      <g id="R" transform="translate(25.000000, 25.000000)">
        <image
          href="https://github.com/nero1342/website/raw/main/src/images/logo.png"
          width="50"
          height="50"
        />
      </g>

      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;

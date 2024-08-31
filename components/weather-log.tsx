import React from "react";

const WeatherLogo: React.FC = () => {
  return (
    <div className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-16 h-16 text-blue-500">
        <circle cx="32" cy="32" r="14" className="fill-yellow-400" />
        <g className="stroke-yellow-400 stroke-[4px] stroke-round">
          <line x1="32" y1="6" x2="32" y2="16" />
          <line x1="32" y1="48" x2="32" y2="58" />
          <line x1="6" y1="32" x2="16" y2="32" />
          <line x1="48" y1="32" x2="58" y2="32" />
          <line x1="13" y1="13" x2="20" y2="20" />
          <line x1="44" y1="44" x2="51" y2="51" />
          <line x1="13" y1="51" x2="20" y2="44" />
          <line x1="44" y1="20" x2="51" y2="13" />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="64"
        height="64"
        className="text-blue-500">
        <path
          d="M46 38c0-4.4-3.6-8-8-8h-2a8 8 0 00-16 0h-2c-4.4 0-8 3.6-8 8s3.6 8 8 8h28c4.4 0 8-3.6 8-8z"
          fill="#B0C4DE"
        />
        <g fill="#1E90FF">
          <path d="M22 46c1 0 2 1 2 2s-1 3-2 3-2-2-2-3 1-2 2-2z" />
          <path d="M30 50c1 0 2 1 2 2s-1 3-2 3-2-2-2-3 1-2 2-2z" />
          <path d="M38 46c1 0 2 1 2 2s-1 3-2 3-2-2-2-3 1-2 2-2z" />
        </g>
      </svg>
    </div>
  );
};

export default WeatherLogo;

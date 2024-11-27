import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src="/abu-interiors.png"
        alt="Abu Interiors Logo"
        className="h-16 w-16 object-contain" // Tailwind classes for styling image
      />
      <h2 className="text-2xl font-norwester text-blue-600">Abu Interiors</h2> {/* Tailwind classes for text */}
    </div>
  );
};

export default Logo;

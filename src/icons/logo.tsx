import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src="/abu-interiors.png"
        alt="Abu Interiors Logo"
        className="h-16 w-16 object-contain" // Image styling
      />
      <h2 className="text-2xl text-[#332F59] font-bold font-norwester">Abu Interiors</h2> {/* Text styling */}
    </div>
  );
};

export default Logo;

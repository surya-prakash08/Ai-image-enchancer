// src/components/Watermark.jsx
import React from "react";

const Watermark = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center pointer-events-none z-0">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-500 opacity-20 transform rotate-[-30deg] whitespace-nowrap">
        Made with ❤️ by Surya Prakash
      </h1>
    </div>
  );
};

export default Watermark;

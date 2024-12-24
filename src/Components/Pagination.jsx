import React from "react";

const PaginationDots = ({ activeIndex }) => {
  const totalDots = 3; // Number of dots
  return (
    <div className="flex justify-center mt-6">
      {Array.from({ length: totalDots }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full mx-1 ${
            index === activeIndex ? "bg-customgreen" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default PaginationDots;

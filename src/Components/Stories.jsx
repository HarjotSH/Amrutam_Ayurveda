import React, { useState } from "react";
import PaginationDots from "./Pagination"; // Import the dots component

const CustomerStories = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Active dot index
  const testimonials = [
    {
      category: "Consulted for Skin",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      feedback: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipiscing.",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
    },
    {
      category: "Consulted for hair",
      name: "Sophie Moore",
      location: "Mumbai",
      date: "17/02/24",
      rating: 5,
      feedback: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipiscing.",
      borderColor: "border-green-200",
      textColor: "text-green-600",
    },
    {
      category: "Consulted for hair",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      feedback: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipiscing.",
      borderColor: "border-green-200",
      textColor: "text-green-600",
    },
  ];

  return (
    <div className="bg-yellow-50 py-10">
      <h2 className=" inline-block text-customgreen text-2xl font-semibold border-b-4 border-s-emerald-200 text-center mb-8">
        Stories from our valued customers!
      </h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg p-6 w-80 border-t-8 ${testimonial.borderColor}`}
          >
            <p className={`text-sm font-medium ${testimonial.textColor} mb-2`}>
              {testimonial.category}
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-gray-300 rounded-full w-10 h-10"></div>
              <div>
                {/* Horizontal layout for name and date */}
                <div className="flex items-center justify-between">
                  <p className="text-gray-800 font-semibold mr-9">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.date}</p>
                </div>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
            <p className="font-bold text-gray-800 text-lg mt-4">
              “{testimonial.feedback}”
            </p>
            <p className="text-gray-600 text-sm mt-2">
              {testimonial.description}
            </p>
          </div>
        ))}
      </div>
      <PaginationDots activeIndex={activeIndex} />
    </div>
  );
};

export default CustomerStories;

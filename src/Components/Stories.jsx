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
      backgroundColor: "bg-purple-200",
    },
    {
      category: "Consulted for Hair",
      name: "Sophie Moore",
      location: "Mumbai",
      date: "17/02/24",
      rating: 5,
      feedback: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipiscing.",
      backgroundColor: "bg-green-200",
    },
    {
      category: "Consulted for Hair",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      feedback: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipiscing.",
      backgroundColor: "bg-green-200",
    },
  ];

  return (
    <div className="bg-yellow-50 py-14">
      {/* Centered Heading with Custom Font and Border */}
      <div className="flex justify-center items-center mb-8">
        <h2
          className="inline-block text-customgreen font-bold border-b-4 border-s-emerald-200 mb-5"
          style={{
            fontSize: "48px",
            fontWeight: "500",
            lineHeight: "50px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Stories from our valued customers!
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="flex justify-center gap-6 flex-wrap">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-2xl w-80"
          >
            {/* Colored Background Section for Category */}
            <div
              className={`w-full h-16 flex items-center justify-center rounded-t-2xl ${testimonial.backgroundColor}`}
            >
              <p className="text-black font-semibold text-base">{testimonial.category}</p>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-700 rounded-full w-10 h-10"></div>
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
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <PaginationDots activeIndex={activeIndex} />
    </div>
  );
};

export default CustomerStories;

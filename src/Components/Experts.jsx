import React, { useState } from "react";
import PaginationDots from "./Pagination"; // Reusing PaginationDots component
import Expert from "../Images/Expert_icon.png"

const AyurvedaExperts = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experts = [
    {
      name: "Dr. Vaishali Sharma",
      title: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      specialty: "Skin Specialist",
      rating: 4.5,
      img: Expert, // Replace with actual image URL
    },
    {
      name: "Dr. Vaishali Sharma",
      title: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      specialty: "Skin Specialist",
      rating: 4.5,
      img: Expert, // Replace with actual image URL
    },
    {
      name: "Dr. Vaishali Sharma",
      title: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      specialty: "Skin Specialist",
      rating: 4.5,
      img: Expert, // Replace with actual image URL
    },
  ];

  return (
    <div
      className=" flex flex-col items-center justify-center py-10"
      style={{
        width: "1440px",
        height: "808px",
        top: "4654px",
        left: "1px",
        gap: "0px",
        opacity: "1",
      }}
    >
      {/* Heading */}
      <h2 className="text-customgreen text-2xl font-semibold border-b-4 border-s-emerald-200 text-center mb-12" style={{
        fontSize:"48px",
        fontweight: "700",
        lineheight:" 61.82px",
        textalign: "center",
        textunderlineposition: "from-font",
      }}>
        Meet Our Ayurveda Experts
      </h2>

      {/* Cards Section */}
      <div className="flex gap-8 justify-center items-center">
        {experts.map((expert, index) => (
          <div
            key={index}
            className={`bg-yellow-50 shadow-xl rounded-lg p-6 w-80 border-t-4 ${
              index === activeIndex ? "border-customgreen" : "border-transparent"
            }`}
          >
            {/* Expert Image */}
            <div className="flex justify-center mb-4">
              <img
                src={expert.img}
                alt={expert.name}
                className="rounded-full w-24 h-24"
              />
            </div>

            {/* Rating */}
            <div className="flex justify-center items-center gap-1 mb-2">
              <span className="text-yellow-400 font-bold">{expert.rating}</span>
              <span className="text-gray-600">★</span>
            </div>

            {/* Expert Info */}
            <div className="text-center">
              <p className="font-bold text-gray-800">{expert.name}</p>
              <p className="text-gray-500 text-sm">{expert.title}</p>
              <p className="text-gray-500 text-sm mt-2">{expert.experience}</p>
              <button className="bg-green-100 text-customgreen text-sm px-3 py-1 rounded-full mt-2">
                {expert.specialty}
              </button>
            </div>

            {/* Book Button */}
            <div className="mt-6">
              <button className="w-full bg-customgreen text-white py-2 rounded-md font-semibold">
                Book a session
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="mt-8">
        <PaginationDots activeIndex={activeIndex} />
      </div>

      {/* Find More Experts Button */}
      <div className="mt-6">
        <button className="bg-customgreen text-white px-6 py-2 rounded-md font-semibold">
          Find more experts
        </button>
      </div>
    </div>
  );
};

export default AyurvedaExperts;

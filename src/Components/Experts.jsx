import React, { useState } from "react";
import PaginationDots from "./Pagination"; // Reusing PaginationDots component
import Expert from "../Images/Expert_icon.png";

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

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? experts.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === experts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center py-10"
      style={{
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      {/* Heading */}
      <h2
        className="text-customgreen text-2xl font-semibold border-b-4 border-s-emerald-200 text-center mb-12"
        style={{
          fontSize: "48px",
          fontWeight: "600",
          lineHeight: "50px",
          textAlign: "center",
          textUnderlinePosition: "from-font",
        }}
      >
        Meet Our Ayurveda Experts
      </h2>

      {/* Arrows */}
      <button
        onClick={handlePrevClick}
        className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-lg p-7 text-2xl flex items-center justify-center w-12 h-12 text-gray-500"
      >
        ←
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-lg p-7 text-2xl flex items-center justify-center w-12 h-12 text-gray-500"
      >
        →
      </button>

      {/* Cards Section */}
      <div className="flex gap-8 justify-center items-center flex-wrap">
        {experts.map((expert, index) => (
          <div
            key={index}
            className={`bg-yellow-50 shadow-xl rounded-lg p-6 w-72 border-t-4 ${
              index === activeIndex
                ? "border-customgreen"
                : "border-transparent"
            }`}
          >
            {/* Expert Image */}
            <div className="flex justify-center mb-4">
              <img
                src={expert.img}
                alt={expert.name}
                className="rounded-full w-28 h-28"
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
      <div className="mt-8 mb-4">
        <PaginationDots activeIndex={activeIndex} />
      </div>

      {/* Find More Experts Button */}
      <div className="mt-6">
        <button
          className=" text-customgreen px-6 py-2 rounded-md font-semibold text-lg"
          style={{
            backgroundColor: "#DBE3DC63",
            height:"55px",
            width:"200px",
            border:"1px solid #3a643b"
          }}
        >
          Find more experts
        </button>
      </div>
    </div>
  );
};

export default AyurvedaExperts;

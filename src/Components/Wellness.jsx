import React from "react";
import i1 from "../Images/WellnessIcons/i1.png";
import i2 from "../Images/WellnessIcons/i2.png";
import i3 from "../Images/WellnessIcons/i3.png";
import i4 from "../Images/WellnessIcons/i4.png";
import i5 from "../Images/WellnessIcons/i5.png";
import i6 from "../Images/WellnessIcons/i6.png";
import Yog from "../Images/WellnessIcons/Yog.png";

const WellnessSection = () => {
  const wellnessFeatures = [
    {
      icon: i1,
      title: "Personalized Wellness",
      description:
        "Get treatments made just for you based on your individual dosha (body type).",
    },
    {
      icon: i2,
      title: "Focus on Prevention",
      description: "Stop problems even before they start.",
    },
    {
      icon: i3,
      title: "Mind-Body Connection",
      description: "Keep your mind and body in sync for a happy life.",
    },
    {
      icon: i4,
      title: "Holistic Healing",
      description: "Fix the root problem for long-lasting health.",
    },
    {
      icon: i5,
      title: "Natural Remedies",
      description: "Using herbs and natural therapies for healing.",
    },
    {
      icon: i6,
      title: "Boosting Immunity",
      description: "Stay strong and healthy for life, not just for today.",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-8 text-center">
      <h2 className="inline-block text-4xl font-bold text-customgreen mb-4 border-b-8 border-s-emerald-200">
        Discover Ayurveda’s Magic With Us
      </h2>
      <p
        className="text-center text-neutral-500 mb-16"
        style={{
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "28px",
          textAlign: "center",
        }}
      >
        Ayurvedic treatment aims to balance your body and mind, bringing harmony
        <br />
        and vitality. It's like a journey to better health using ancient wisdom,
        <br />a totally effective approach for a better life.
      </p>

      <div className="relative flex flex-col lg:flex-row justify-center items-center lg:items-start">
        {/* Left Icons */}
        <div className="flex flex-col gap-8 ml-20 mt-5">
          {wellnessFeatures.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 max-w-xs lg:max-w-sm ${feature.title === "Personalized Wellness" || feature.title === "Mind-Body Connection" ? "ml-24" : ""}`}
            >
              <div className="">
                <h3 className="text-lg font-semibold truncate">{feature.title}</h3>
                <p className="text-center text-gray-600 line-clamp-4">
                  {feature.description}
                </p>
              </div>
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mb-4 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="relative my-8 lg:my-0 lg:mx-16 flex justify-center items-center">
          {/* Yog Image */}
          <img
            src={Yog}
            alt="Lady Sitting"
            className="relative w-full h-auto max-w-[400px] lg:max-w-[900px] lg:h-auto object-contain"
            style={{ zIndex: 1 }}
          />
        </div>

        {/* Right Icons */}
        <div className="flex flex-col gap-8 mr-20 mt-5">
          {wellnessFeatures.slice(3).map((feature, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 max-w-xs lg:max-w-sm ${feature.title === "Holistic Healing" || feature.title === "Boosting Immunity" ? "mr-36" : ""}`}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mb-4 object-contain"
              />
              <div className="">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellnessSection;

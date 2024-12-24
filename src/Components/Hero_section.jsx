import React from "react";
import Hero from "../Images/Hero.jpg";
import logo from "../Images/logo.png";
import FeatureCardExample from "./FeatureCards/FeatureCard_example";

const HeroSection = ({
  welcomeText = "Namaste, Welcome to Amrutam",
  mainHeading = "Step into Holistic Healing with Ayurveda Book Consultation With Certified Experts.",
  subHeading = "Dive into the world of ayurveda and experience personalized health solutions and holistic guidance from trusted ayurvedic doctors anytime, anywhere.",
  ctaText = "BOOK AN APPOINTMENT",
}) => {
  return (
    <>
      <div
        className="hero-section relative w-full min-h-screen text-white bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(18, 18, 18, 0.9) 30%, rgba(149, 29, 28, 0.8) 60%, rgba(255, 255, 255, 0) 80%),
            url(${Hero})`,
          backgroundColor: "#951D1C", // Fallback color
          backgroundSize: "contain", // Covers the entire container
          backgroundPosition: "right 2% top", // Positions the image towards the right
          backgroundRepeat: "no-repeat", // Prevents image tiling
        }}
      >
        {/* Top Logo Bar */}
        <div
          className="w-full flex items-center"
          style={{
            height: "70px",
            backgroundColor: "#fff7e2",
          }}
        >
          <img
            src={logo}
            alt="Amrutam logo"
            style={{
              height: "70px",
              width: "150px",
              marginLeft: "20px",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="flex flex-col justify-center items-start px-10 py-20 bg-black/60 min-h-[calc(100vh-70px)]">
          <h3
            className="text-yellow-50 text-lg mb-4 font-light"
            style={{
              fontWeight: "400",
              fontSize: "28px",
              lineHeight: "28px",
            }}
          >
            {welcomeText}
          </h3>
          <h1 className="text-4xl font-bold mb-6 leading-snug max-w-full">
            Step into Holistic Healing with{" "}
            <span className="text-yellow-50 underline">Ayurveda</span> <br />
            Book Consultation With Certified Experts.
          </h1>
          <p className="text-lg mb-8 leading-relaxed max-w-full">
            Dive into the world of ayurveda and experience personalized health
            solutions and <br /> holistic guidance from trusted ayurvedic
            doctors anytime, anywhere.
          </p>
          <button className="bg-customgreen text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-green-700 transition-all duration-200">
            {ctaText}
          </button>
        </div>
      </div>

      <FeatureCardExample />
    </>
  );
};

export default HeroSection;

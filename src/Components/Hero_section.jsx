import React from "react";
import FeatureCardExample from "./Components/FeatureCard"
import Hero from "../Images/Hero.jpg";
import logo from "../Images/logo.png";

const HeroSection = ({
  welcomeText = "Namaste, Welcome to Amrutam",
  mainHeading = "Step into Holistic Healing with Ayurveda Book Consultation with certified Experts.",
  subHeading = "Dive into the world of ayurveda and experience personalized health solutions and holistic guidance from trusted ayurvedic doctors anytime, anywhere.",
  ctaText = "BOOK AN APPOINTMENT",
}) => {
  return (
    <>
      <div
        className="hero-section relative w-full min-h-screen flex flex-col bg-cover bg-center bg-no-repeat text-white"
        // style={{
        //   backgroundImage: `url(${Hero})`,
        // }}
      >
        <div
          className="w-full"
          style={{
            height: "70px",
            backgroundColor: "#fff7e2",
            padding:""
          }}
        >
          <img src={logo} alt="Amrutam logo" style={{
            height:"70px",
            width:"150px"
          }}/>
        </div>
        {/* Gradient Overlay */}

        <div
          className="absolute inset-0 flex"
          style={{ marginTop: "70px", zIndex: -1 }}
        >
          <div
            className="w-1/2 h-full"
            style={{
              background:
                "linear-gradient(88deg, #121212E0 0%, #121212EB 100%)",
              // zIndex: -1,
            }}
          ></div>
        </div>

        {/* Content section */}
        <div className="mt-32 ml-20 flex">
          <div className="hero-overlay "></div>
          <div className="hero-gradient-left"></div>
          <div className="hero-gradient-right"></div>
          <div className="hero-content items-center w-full h-full">
            <div className="text-container w-50 text-white">
              <h3 className="welcome-text text-yellow-50 mb-4">
                {welcomeText}
              </h3>
              <div className="main-content">
                <h1 className="main-heading mb-4">
                  {mainHeading.split("Ayurveda")[0]}
                  <span className="text-yellow-50">Ayurveda</span>
                  <br />
                  {mainHeading.split("Ayurveda")[1]}
                </h1>
                <p className="sub-heading">{subHeading}</p>
              </div>
            </div>
            <button className="cta-button mt-14 bg-lime-800 p-4 rounded-xl">
              {ctaText}
            </button>
          </div>
          {/* Right Half - Image */}
          <div
            className="w-1/2 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${Hero})`,
            }}
          ></div>
        </div>
      </div>
      <FeatureCardExample/>
    </>
  );
};



export default HeroSection;

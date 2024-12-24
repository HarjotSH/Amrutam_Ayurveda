import React from "react";
import C1 from "../Images/Consult_Section/Consult_Section_1.png";
import C2 from "../Images/Consult_Section/Consult_Section_2.png";
import C3 from "../Images/Consult_Section/Consult_Section_3.png";
import banner from "../Images/Consult_Section/Consult_banner.jpg";

const AyurvedicConsultation = () => {
  const features = [
    {
      title: "स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं।",
      description:
        "[Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person.]",
      image: null,
    },
    {
      title: null, // Center div with only an image
      description: null,
      image: C1,
    },
    {
      title: "Precise Diagnosis",
      description:
        "Ayurveda’s core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.",
      image: null,
    },
    {
      title: "Zero Side-effects",
      description:
        "Ayurvedic treatments are devoid of chemicals and are based completely on natural herbs.",
      image: null,
    },
    {
      image: C2,
    },
    {
      title: "Individual Treatment",
      description:
        "All treatments are personalized based on a person’s unique constitution and health concerns.",
      image: null,
    },
    {
      image: C3,
    },
  ];

  return (
    <>
      <div className="bg-[#faf4e7] py-12 px-6 lg:px-20">
        <h2 className="inline-block text-center text-3xl lg:text-4xl font-bold text-customgreen border-s-emerald-200 border-b-4 mb-8">
          What sets Ayurvedic consultations apart?
        </h2>
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg flex flex-col items-center text-center h-64 ${
                feature.title || feature.description
                  ? "border-t-[5px] border-t-customgreen"
                  : ""
              }`}
            >
              {feature.image && !feature.title && !feature.description && (
                <img
                  src={feature.image}
                  alt="Ayurvedic Consultation Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
              {feature.title && (
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {feature.title}
                </h3>
              )}
              {feature.description && (
                <p className="text-gray-600 text-sm">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.slice(3).map((feature, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg flex flex-col items-center text-center h-64 ${
                feature.title || feature.description
                  ? "border-t-[5px] border-t-customgreen"
                  : ""
              }`}
            >
              {feature.image && (
                <img
                  src={feature.image}
                  alt={feature.title || "Ayurvedic Consultation"}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
              {feature.title && (
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {feature.title}
                </h3>
              )}
              {feature.description && (
                <p className="text-gray-600 text-sm">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Banner Section */}
      <div className="relative ">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-[590px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2
            className="text-2xl lg:text-4xl font-bold mb-4 text-center text-yellow-50"
            style={{
              fontWeight: "500",
              fontSize: "64px",
              lineHeight: "82.43px",
              textAlign: "center",
            }}
          >
            Ready to restore harmony in
            <br />
            your mind, body and spirit?
          </h2>
          <button className="bg-customgreen text-white px-6 py-2 rounded-lg mt-12">
            Book a consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default AyurvedicConsultation;

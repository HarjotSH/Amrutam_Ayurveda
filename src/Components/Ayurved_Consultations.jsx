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
      title: null,
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
      <div className="bg-[#faf4e7] py-8 px-4 lg:px-16">
        {/* Centering the heading using flex */}
        <div className="flex justify-center items-center mb-6 mt-6">
          <h2
            className="text-customgreen font-bold border-b-4 border-s-emerald-200"
            style={{
              fontSize: "36px",
              lineHeight: "40px",
            }}
          >
            What sets Ayurvedic consultations apart?
          </h2>
        </div>

        {/* Main Grid Container */}
        <div
          className="relative mx-auto mb-24"
          style={{
            width: "1000px",
            height: "500px",
            top: "50px", // Reduced top margin
            left: "50px",
            gap: "12px",
          }}
        >
          {/* First Row */}
          <div
            className="grid grid-cols-3 gap-4 mb-4"
            style={{ gridTemplateColumns: "1.5fr 1fr 1fr" }}
          >
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg rounded-lg flex flex-col items-center text-center ${
                  feature.image ? "h-60" : "p-8 h-60 border-t-[4px] border-t-customgreen"
                }`}
              >
                {feature.image && (
                  <img
                    src={feature.image}
                    alt="Ayurvedic Consultation Image"
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
                {feature.title && (
                  <h3 className="text-lg font-semibold text-customgreen mb-2 text-justify">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg rounded-lg flex flex-col items-center text-center ${
                  feature.image ? "h-60" : "p-3 pt-8 h-60 border-t-[4px] border-t-customgreen text-justify"
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
                  <h3 className="text-lg font-semibold text-customgreen mb-2 text-justify">
                    {feature.title}
                  </h3>
                )}
                {feature.description && (
                  <p className="text-gray-600 text-sm text-justify">{feature.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2
            className="text-xl lg:text-3xl font-bold mb-4 text-center text-yellow-50"
            style={{
              fontWeight: "500",
              fontSize: "48px",
              lineHeight: "70px",
              textAlign: "center",
            }}
          >
            Ready to restore harmony in
            <br />
            your mind, body, and spirit?
          </h2>
          <button className="bg-customgreen text-white px-5 py-2 rounded-lg mt-8 text-justify">
            Book a consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default AyurvedicConsultation;

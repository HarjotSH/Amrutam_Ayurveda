import React from "react";

const AyurvedicApproach = () => {
  const steps = [
    {
      number: "1",
      title: "Make Appointment",
      description:
        "You must make an appointment in advance, to choose the service and date.",
    },
    {
      number: "2",
      title: "Consultations",
      description:
        "The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
      number: "3",
      title: "Treatment Planning",
      description:
        "The Ayurvedic practitioner creates a personalized treatment plan for you.",
    },
    {
      number: "4",
      title: "Maintenance",
      description:
        "These visits allow for assessment of progress, adjustments to the treatment.",
    },
  ];

  return (
    <div className="py-12 px-6 lg:px-20">
      <h2 className="inline-block text-center text-3xl lg:text-4xl font-bold text-customgreen border-s-emerald-200 border-b-4 mb-4">
        Our Ayurvedic Approach
      </h2>
      <p className="text-center text-gray-600 text-sm lg:text-base mb-8 max-w-3xl mx-auto">
        At Amrutam we follow a unique and personalized approach to healing. Our
        expert <br /> practitioners begin each treatment process by conducting a
        thorough analysis of the <br /> patient’s body type, medical history,
        and current health conditions.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              width: "290px", // Fixed width
              height: "315px", // Fixed height
              padding: "28px 20px", // Custom padding
              borderRadius: "20px 20px", // Border radius
              borderTop: "4px solid #3a643b", // Green border on top
            }}
            className="bg-white shadow-md flex flex-col items-center text-center"
          >
            <div
              style={{
                opacity: "0", // Adjust opacity as required
              }}
              className="bg-green-200 text-customgreen font-bold text-xl w-12 h-12 flex items-center justify-center rounded-full mb-4"
            >
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-customgreen mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AyurvedicApproach;

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
      <div className="flex flex-col items-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-customgreen border-b-4 border-s-emerald-200 mb-4">
          Our Ayurvedic Approach
        </h2>
        <p className="text-center text-gray-600 text-sm lg:text-base mb-8 max-w-3xl">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert <br /> practitioners begin each treatment process by
          conducting a thorough analysis of the <br /> patient’s body type,
          medical history, and current health conditions.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              width: "290px",
              height: "315px",
              padding: "28px 20px",
              borderRadius: "20px 20px",
              borderTop: "4px solid #3a643b",
            }}
            className="bg-yellow-50 shadow-md flex flex-col items-center text-center"
          >
            {/* Circle with Number */}
            <div
              style={{
                backgroundColor: "#3A643BA8", // Color of the circle
                width: "70px", // Width of the circle
                height: "70px", // Height of the circle
                borderRadius: "50%", // Make it circular
                border: " 1px solid#3a643b",
                color: "white", // Color of the number
                fontSize: "25px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "12px", // Space between circle and title
              }}
            >
              {step.number}
            </div>
            <h3 className="text-xl font-bold text-customgreen mb-2">
              {step.title}
            </h3>
            <p
              className="text-sm text-gray-600"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3, // Limit the text to 3 lines
                WebkitBoxOrient: "vertical", // Set the box's orientation
                overflow: "hidden", // Hide text overflow
                height: "60px", // Adjust height based on line height
                lineHeight: "20px", // Set line height to ensure 3 lines fit
              }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AyurvedicApproach;

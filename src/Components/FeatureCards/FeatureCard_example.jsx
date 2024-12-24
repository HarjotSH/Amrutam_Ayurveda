import React from "react";
import FeatureCard from "./FeatureCard";
const FeatureCardExample = () => {
    const features = [
      {
        icon: "https://dashboard.codeparrot.ai/api/assets/Z2aVW46CYQNjI8Iw",
        title: "Convenient Online & In-Clinic Consultations",
      },
      {
        icon: "https://dashboard.codeparrot.ai/api/assets/Z2aVW46CYQNjI8Ix",
        title: "Safe And Effective Treatment",
      },
      {
        icon: "https://dashboard.codeparrot.ai/api/assets/Z2aVW46CYQNjI8Iy",
        title: "Experienced Ayurvedic Practitioners",
      },
      {
        icon: "https://dashboard.codeparrot.ai/api/assets/Z2aVW46CYQNjI8Iz",
        title: "Personalized Treatment Plans & Guidance",
      },
    ];
  
    return (
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: "#fff7e2",
        }}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} />
        ))}
      </div>
    );
  };
  
  export default FeatureCardExample;
  
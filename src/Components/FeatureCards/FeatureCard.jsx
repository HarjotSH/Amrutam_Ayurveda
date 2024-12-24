import React from "react";

const FeatureCard = ({ icon, title }) => {
  return (
    <div
      style={{
        width: "320px",
        height: "147px",
        paddingTop: "40px",
        paddingBottom: "40px",
        paddingRight: "24px",
        paddingleft: "24px",
        left: "100px",
        top: "721px",
        backgroundColor: "#fff7e2",
        border: "3px solid #fff1cf",
        display: "flex",
        alignItems: "center",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            width: "70px",
            height: "70px",
          }}
        >
          <img
            src={icon}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <h3
          style={{
            margin: 0,
            fontFamily: "DINPro-Bold, sans-serif",
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "140%",
            color: "#3a643b",
            textTransform: "capitalize",
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

FeatureCard.defaultProps = {
  icon: "https://dashboard.codeparrot.ai/api/assets/Z2aVW46CYQNjI8Iw",
  title: "Convenient Online & In-Clinic Consultations",
};

export default FeatureCard;
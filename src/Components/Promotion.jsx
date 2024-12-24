import React from 'react';
import mock from "../Images/App_mockup.png"
import App from "../Images/App_store.png"

const AppPromotion = () => {
  return (
    <div className="bg-yellow-50 flex items-center justify-between px-16 py-12">
      {/* Text Section */}
      <div className="w-1/2">
        <h1 className="text-customgreen text-3xl font-bold mb-4">Amrutam Home App</h1>
        <p className="text-gray-700 mb-6">
          The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant
          characteristics of our website, this app offers a wide range of additional features.
        </p>
        <p className="text-black font-semibold text-xl mb-6">
          Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe
        </p>
        <p className="text-black text-lg font-bold mb-4">Get The App Now</p>
        <div className="flex gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="w-36"
          />
          <img
            src={App}
            alt="App Store"
            className="w-36"
          />
        </div>
      </div>
      {/* Image Section */}
      <div className="relative w-1/2 flex justify-center">
        <img
          src={mock}
          alt="App Mockup"
          className="w-2/3"
        />
      </div>
    </div>
  );
};

export default AppPromotion;
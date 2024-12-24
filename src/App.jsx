import HeroSection from "./Components/Hero_section";
import "./App.css";
import WellnessSection from "./Components/Wellness";
import AyurvedicConsultation from "./Components/Ayurved_Consultations";
import AyurvedicApproach from "./Components/Approach";
import CustomerStories from "./Components/Stories";
import AyurvedaExperts from "./Components/Experts";
import AppPromotion from "./Components/Promotion";
import InformationSection from "./Components/Information";


function App() {
  return (
    <>
      <HeroSection />
      <WellnessSection/>
      <AyurvedicConsultation/>
      <AyurvedicApproach/>
      <CustomerStories/>
      <AyurvedaExperts/>
      <AppPromotion/>
      <InformationSection/>
    </>
  );
}

export default App;

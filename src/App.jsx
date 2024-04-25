import React from "react";
import "./App.css";
import TopSection from "./components/TopSection";
import Discover from "./components/Discover";
import Consultation from "./components/Consultation";
import Ready from "./components/Ready";
import SliderBox from "./components/SliderBox";
import HomeApp from "./components/HomeApp";
import Footer from "./components/Footer";
import Experts from "./components/Experts";
import Stories from "./components/Stories";

const App = () => {
  return (
    <>
      <TopSection />
      <Discover />
      <Consultation />
      <Ready />
      <SliderBox />
      <Stories />
      <Experts />
      <HomeApp />
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import Navbar from "../Navbar/Navbar";
import SubHero from "../Reusable/SubHero";
import ServiceSection from "./ServiceSection";
import Footer from "../Reusable/Footer";
import CTA from "../Reusable/CTA";
import { Home1, Home5, Home7 } from "../../assets";

const Service = () => {
  return (
    <>
      <Navbar />
      <SubHero
        title='Our Services'
        subtitle='Dedicated to Your Well-being and Daily Success'
        backgroundImage={Home1}
      />
      <ServiceSection />
      <CTA />
      <Footer />
    </>
  );
};

export default Service;

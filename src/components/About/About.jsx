import { Home4 } from "../../assets";
import ServiceSlider from "../Home/ServiceSlider";
import WhyChooseUs from "../Home/WhyHome";
import Navbar from "../Navbar/Navbar";
import CTA from "../Reusable/CTA";
import Footer from "../Reusable/Footer";
import SubHero from "../Reusable/SubHero";
import AboutSection from "./AboutSection";

const About = () => {
  return (
    <>
      <Navbar />
      <SubHero
        title='About Us'
        subtitle='Empowering Independence with Care and Compassion.'
        backgroundImage={Home4}
      />
      <AboutSection />
      <ServiceSlider/>
      <WhyChooseUs />
      <CTA />
      <Footer />
    </>
  );
};

export default About;

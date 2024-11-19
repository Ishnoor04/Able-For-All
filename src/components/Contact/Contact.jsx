import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import SubHero from "../Reusable/SubHero";
import Footer from "../Reusable/Footer";
import { Home6 } from "../../assets";
import ContactForm from "./ContactForm";
const ContactPage = () => {

  return (
    <>
      <Navbar />
      <SubHero
        title='Contact Us'
        subtitle="Supporting Every Step Toward a Better Tomorrow"
        backgroundImage={Home6}
      />
     
      <ContactForm />
      {/* <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418336.6394685321!2d138.281520775722!3d-35.000321410756804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab735c7c526b33f%3A0x4033654628ec640!2sAdelaide%20SA%2C%20Australia!5e0!3m2!1sen!2sin!4v1731238638140!5m2!1sen!2sin'
        className='w-full h-[450px] p-8 '
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe> */}
      <Footer />
    </>
  );
};

export default ContactPage;

import React from 'react'
import SubHero from '../Reusable/SubHero'
import Navbar from '../Navbar/Navbar'
import CTA from '../Reusable/CTA'
import Footer from '../Reusable/Footer'
import ServiceDetails from './ServiceDetails'

const SubService = ({serviceDetails}) => {
  return (
    <>
    <Navbar/>
    <SubHero title={serviceDetails.name} backgroundImage={serviceDetails.img}/>
    <ServiceDetails serviceDetails={serviceDetails}/>
    <CTA/>
    <Footer/>
    </>
  )
}

export default SubService
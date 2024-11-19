import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from './Hero'
import AboutHome from './AboutHome'
import ServiceSlider from './ServiceSlider'
import CTA from '../Reusable/CTA'
import Footer from '../Reusable/Footer'
import WhyChooseUs from './WhyHome'
import { Home1, Home4, Home6 } from '../../assets'
const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <WhyChooseUs />
        <ServiceSlider/>
        <AboutHome />
        <CTA/>
        <Footer/>
        <div className='hidden'>
          <img src={Home4} alt="" />
          <img src={Home1} alt="" />
          <img src={Home6} alt="" />

        </div>
    </>
  )
}

export default Home

// import { motion } from 'framer-motion';

// const HomeSection = () => {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
//       {/* Hero Section */}
//       <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//               Empowering Lives Through
//               <span className="text-blue-600"> Personalized Care</span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//               Registered NDIS provider delivering quality support services to help you achieve your goals and live life to the fullest.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
//               >
//                 Get Started
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
//               >
//                 Contact Us
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Key Features */}
//       <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "NDIS Registered",
//                 description: "Fully registered and compliant with NDIS quality and safeguards standards",
//                 icon: "🏆"
//               },
//               {
//                 title: "Personalized Support",
//                 description: "Tailored care plans designed to meet your individual needs and goals",
//                 icon: "👥"
//               },
//               {
//                 title: "24/7 Support",
//                 description: "Round-the-clock assistance and support when you need it most",
//                 icon: "⏰"
//               }
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors"
//               >
//                 <div className="text-4xl mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Services Overview */}
//       <div className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Our Support Services
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We offer a comprehensive range of NDIS support services to help you achieve your goals and enhance your quality of life.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Daily Living Support",
//                 description: "Assistance with personal care, household tasks, and daily activities",
//                 icon: "🏠"
//               },
//               {
//                 title: "Community Participation",
//                 description: "Support to engage in social and community activities",
//                 icon: "🌟"
//               },
//               {
//                 title: "Allied Health Services",
//                 description: "Access to professional therapeutic services",
//                 icon: "⚕️"
//               },
//               {
//                 title: "Transport Assistance",
//                 description: "Help with transportation to appointments and activities",
//                 icon: "🚗"
//               },
//               {
//                 title: "Skill Development",
//                 description: "Programs to build independence and life skills",
//                 icon: "📚"
//               },
//               {
//                 title: "Support Coordination",
//                 description: "Help to coordinate and manage your NDIS plan",
//                 icon: "📋"
//               }
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
//               >
//                 <div className="text-4xl mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-white"
//           >
//             <h2 className="text-3xl font-bold mb-4">
//               Ready to Get Started?
//             </h2>
//             <p className="mb-8 text-blue-100">
//               Contact us today to learn more about how we can support you on your NDIS journey.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
//             >
//               Book a Consultation
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeSection;
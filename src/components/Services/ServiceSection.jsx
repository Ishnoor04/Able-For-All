import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { serviceSliderData } from "../../constant";
import styles from "../../style";

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    key={index}
    className='group relative overflow-hidden rounded-2xl bg-[#ece5fb]'
  >
    {/* Gradient Border */}
    <div
      className={`absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
    />

    {/* Card Content */}
      <img src={service.img} alt={service.name} className="mb-4" />
    <div className='relative bg-[#ece5fb] rounded-3xl p-6 h-full'>
      {/* Icon Container */}


      {/* Title */}
      <h3 className={`${styles.heading4} mb-2`}>{service.name}</h3>

      {/* Description */}
      <p className={`${styles.paragraph} text-gray-600 mb-4`}>
        {service.content}
      </p>
    </div>
    <Link to={`/services${service.link}`}>
      <div className='absolute -bottom-2  cursor-pointer right-0 w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-white'>
        <div className='bg-[white] w-12 h-12 rounded-full flex items-center justify-center text-black -rotate-45'>
          <span className='text-2xl'>→</span>
        </div>
      </div>
    </Link>
  </motion.div>
);

const ServiceSection = () => {
  return (
    <div className='min-h-screen py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-20'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${styles.heading2} mb-3`}
          >
            Support Services
          </motion.h1>
        </div>

        {/* Service Categories */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {serviceSliderData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

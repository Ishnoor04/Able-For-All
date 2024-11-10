import { useState } from "react";
import { motion } from "framer-motion";
import { serviceSliderData } from "../../constant";
import styles from "../../style";
import { Link } from "react-router-dom";

const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % serviceSliderData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + serviceSliderData.length) % serviceSliderData.length
    );
  };

  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} bg-[#ece5fb] overflow-hidden`}
    >
      <div className='text-center mx-auto px-4'>
        <p className={`${styles.paragraph2}`}>OUR SERVICES</p>
        <h2 className={`${styles.heading2} my-2 capitalize`}>
          Empowering people living with a disability
        </h2>
        <p className={`${styles.paragraph2} w-[85%] mx-auto`}>
          We offer a range of compassionate, client-centered services designed
          to enhance well-being, independence, and connection to the community.
          Each service is tailored to meet the unique needs of our clients,
          delivered by a caring and professional team.
        </p>
      </div>
      <div className='relative min-h-[550px] flex items-center justify-center px-4'>
        <div className='absolute w-full max-w-6xl mx-auto flex items-center justify-center'>
          {serviceSliderData.map((service, index) => {
            let position = index - currentIndex;

            return (
              <motion.div
                key={service.id}
                style={{
                  position: "absolute",
                  width: "400px", // Reduced width for circular design
                  height: "400px", // Added height to make it circular
                  backgroundImage: `url(${service.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%", // Make it circular
                  overflow: "hidden", // Ensure content stays within circle
                }}
                animate={{
                  x: position * 450, // Adjusted spacing
                  scale: position === 0 ? 1 : 0.7,
                  opacity: position === 0 ? 1 : 0.8,
                  zIndex: position === 0 ? 10 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className='cursor-pointer shadow-lg'
              >
                <motion.div
                  className={`
          w-full h-full
          ${position === 0 ? "bg-white/90 " : ""}
          transition-colors duration-300
          flex flex-col items-center justify-center
        `}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: position === 0 ? 1 : 0,
                    padding: position === 0 ? "10px" : "0px",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className='text-center px-6'
                  >
                    <h3 className={`${styles.heading4} my-2`}>
                      {service.name}
                    </h3>
                    <p className={`${styles.paragraph}`}>
                      {service.content.slice(0, 100)}...
                    </p>
                    <Link to={`/services${service.link}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            mt-4 px-6 py-2.5
                            rounded-full
                            bg-[#653e98]
                            text-white font-semibold text-sm
                            border border-white/20
                            shadow-[0_0_15px_rgba(0,0,0,0.1)]
                            hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]
                            hover:border-white/40
                            transition-all duration-300
                            relative
                            overflow-hidden
                            group
                        `}
                      >
                        <span className='relative z-10 flex items-center justify-center gap-2'>
                          Learn More
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 transform group-hover:translate-x-1 transition-transform'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M13 7l5 5m0 0l-5 5m5-5H6'
                            />
                          </svg>
                        </span>
                        <div className='absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-300' />
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className='absolute -left-5 sm:left-4 md:left-8 z-20 bg-gray-100 hover:bg-gray-200 sm:p-3 p-1 rounded-full shadow-md transition-all'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className='absolute -right-5 sm:right-4 md:right-8 z-20 bg-gray-100 hover:bg-gray-200 sm:p-3 p-1 rounded-full shadow-md transition-all'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>

        {/* Progress Dots */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2'>
          {serviceSliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
              transition-all duration-300 rounded-full
              ${
                index === currentIndex
                  ? "w-8 h-2 bg-gray-800"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;

import React from "react";
import styles from "../../style";
import { motion } from "framer-motion";
import { Why1, Why2, Why3, Why4, Why5, Why6 } from "../../assets";
const reasonCards = [
  {
    title: "Expert Care",
    description:
      "Our team of certified professionals brings extensive experience in personalized support services, ensuring high-quality care tailored to each client.",
    icon: Why1,
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Tailored Support",
    description:
      "We design customized care plans based on individual needs, preferences, and goals, empowering clients to lead fulfilling lives.",
    icon: Why2,
    gradient: "from-purple-400 to-purple-600",
  },
  {
    title: "Innovative Approach",
    description:
      "Our services incorporate the latest in care techniques and technology, offering a modern and effective approach to client support.",
    icon: Why3,
    gradient: "from-teal-400 to-teal-600",
  },
  {
    title: "Compassionate Team",
    description:
      "Our team is committed to treating every client with respect, empathy, and understanding, fostering a warm and welcoming environment.",
    icon: Why4,
    gradient: "from-pink-400 to-pink-600",
  },
  {
    title: "Reliable Assistance",
    description:
      "We provide consistent, dependable support services that clients and their families can count on, ensuring peace of mind every day.",
    icon: Why5,
    gradient: "from-green-400 to-green-600",
  },
  {
    title: "Community Integration",
    description:
      "Our services are designed to help clients stay connected to their communities, enhancing social connections and promoting independence.",
    icon: Why6,
    gradient: "from-orange-400 to-orange-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className={`flex flex-col items-center py-20 ${styles.paddingX} w-full`}
    >
      {/* Header */}
      <div className='text-center mb-16 flex md:flex-row flex-col items-center justify-start gap-4 w-full'>
        <div className='md:w-1/2 flex flex-col items-start justify-start w-full'>
          <h2 className={`${styles.paragraph2} uppercase text-`}>Why Choose Us</h2>
          <h2 className={`${styles.heading2} !text-left `}>
            Building an inclusive society together
          </h2>
        </div>
        <div className='md:w-1/2'>
          <p className={`${styles.paragraph2} !text-left`}>
            Choosing us means selecting a partner in care who values your
            comfort, independence, and well-being. Our experienced,
            compassionate team is dedicated to providing customized support
            services that truly make a difference. We prioritize building
            genuine connections, listening to your needs, and tailoring our
            approach to empower you every step of the way.
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4 w-full'>
        {reasonCards.map((card, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            key={index}
            className='group relative overflow-hidden rounded-2xl bg-[#f5f5f5] p-1'
          >
            {/* Gradient Border */}
            <div
              className={`absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
            />

            {/* Card Content */}
            <div className='relative bg-[#f5f5f5] rounded-3xl p-6 h-full'>
              {/* Icon Container */}
              <div className='flex flex-row items-center justify-start gap-2 mb-2'>
                <div
                  className={`sm:w-9 sm:h-9 w-6 h-6 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <img src={card.icon} alt={card.title} className=""/>
                </div>

                {/* Title */}
                <h3 className={`${styles.heading4} !font-normal`}>
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className={`${styles.paragraph} mb-4`}>{card.description}</p>
            </div>
            {/* <div className='absolute -bottom-2 bg-[#f5f5f5] right-0 w-24 h-24  rounded-3xl flex items-center justify-center text-white'>
              <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center text-black'>
                <span className='text-2xl'>→</span>
              </div>
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

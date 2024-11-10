import React from "react";
import styles from "../../style";

const AboutSection = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY}`}>
      {/* Changed from grid to flex */}
      <div className='flex flex-col-reverse md:flex-row-reverse md:items-center md:gap-12 xl:gap-32'>
        {/* Image Section */}
        <div className='flex-shrink-0 md:w-1/2 max-md:mt-6 '>
          <div className='flex flex-col items-end max-sm:gap-4'>
            <div className='flex flex-col ss:flex-row bg-[#ebe3fa] pt-4 px-8 rounded-lg pb-8'>
              <div className='ss:w-1/4'>
                <h1 className={`${styles.heading4}`}>Vision</h1>
              </div>
              <div className='ss:w-3/4'>
                <p className={`${styles.paragraph2}`}>
                  We envision a world where everyone has access to compassionate
                  and reliable support, empowering them to lead fulfilling and
                  independent lives within their communities.
                </p>
              </div>
            </div>
            <div className='flex flex-col ss:flex-row bg-[#f1edfa] sm:w-[90%] pt-4 px-8 rounded-lg pb-8 sm:mt-[-10px]'>
              <div className='ss:w-1/4'>
                <h1 className={`${styles.heading4}`}>Mission</h1>
              </div>
              <div className='ss:w-3/4'>
                <p className={`${styles.paragraph2}`}>
                  Our mission is to deliver personalized care solutions that
                  prioritize well-being, respect, and comfort for every
                  individual we support, fostering a sense of community and
                  security.
                </p>
              </div>
            </div>
            <div className='flex flex-col ss:flex-row bg-[#ece5fb] sm:w-[80%] pt-4 px-8 rounded-lg pb-8 sm:mt-[-10px]'>
              <div className='ss:w-1/4'>
                <h1 className={`${styles.heading4}`}>Promise</h1>
              </div>
              <div className='ss:w-3/4'>
                <p className={`${styles.paragraph2}`}>
                  We promise to listen, understand, and adapt our support to
                  meet your unique needs, continuously enhancing our approach
                  with compassion and professional expertise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='flex-1 mt-5 md:mt-0'>
          <div className='flex flex-col gap-6 sm:gap-8'>
            {/* Heading and Description */}
            <div className='flex flex-col gap-2 md:gap-4'>
              <h2 className={`${styles.heading2}`}>
                Empowering Lives Through Compassionate Support
              </h2>
              <p className={`${styles.paragraph2}`}>
                Our team is dedicated to enriching lives through quality care
                that adapts to each individual. We work hand-in-hand with our
                clients, providing reliable and empathetic support to help them
                thrive with confidence.
              </p>
            </div>

            {/* Features List */}
            <ul className='flex flex-col gap-2 sm:gap-4'>
              {/* Feature 1 */}
              <li className='flex items-start gap-x-3'>
                <span className='mt-0.5 flex-shrink-0 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500'>
                  <svg
                    className='shrink-0 size-3.5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <polyline points='20 6 9 17 4 12' />
                  </svg>
                </span>
                <div className='flex-1'>
                  <span className={`${styles.paragraph2}`}>
                    <span className='font-bold'>Flexible & responsive</span>{" "}
                    support solutions.
                  </span>
                </div>
              </li>

              {/* Feature 2 */}
              <li className='flex items-start gap-x-3'>
                <span className='mt-0.5 flex-shrink-0 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500'>
                  <svg
                    className='shrink-0 size-3.5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <polyline points='20 6 9 17 4 12' />
                  </svg>
                </span>
                <div className='flex-1'>
                  <span className={`${styles.paragraph2}`}>
                    Innovative{" "}
                    <span className='font-bold'>care techniques</span> tailored
                    to your needs.
                  </span>
                </div>
              </li>

              {/* Feature 3 */}
              <li className='flex items-start gap-x-3'>
                <span className='mt-0.5 flex-shrink-0 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500'>
                  <svg
                    className='shrink-0 size-3.5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <polyline points='20 6 9 17 4 12' />
                  </svg>
                </span>
                <div className='flex-1'>
                  <span className={`${styles.paragraph2}`}>
                    Enhanced <span className='font-bold'>user experience</span>{" "}
                    through compassionate care.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

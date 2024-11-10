import React from "react";
import styles from "../../style";
import { Home2 } from "../../assets";

const AboutHome = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY}`}>
      <div className='md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32'>
        <div>
          <img
            className='rounded-xl md:h-[500px] sm:h-[300px] h-unset w-full object-cover'
            src={Home2}
            alt='Support Services Image'
          />
        </div>

        <div className='mt-5 sm:mt-10 lg:mt-0'>
          <div className='space-y-6 sm:space-y-8'>
            <div className='space-y-2 md:space-y-4'>
              <p className={`${styles.paragraph2}`}>ABOUT US</p>
              <h2 className={`${styles.heading2}`}>
                Dedicated to Empowering Your Independence
              </h2>
              <p className={`${styles.paragraph2}`}>
                Our mission is to provide compassionate, individualized support
                services that prioritize the well-being, comfort, and
                independence of each client. Through our tailored approach, we
                aim to enhance quality of life, foster meaningful connections,
                and empower every client to thrive within their community.
              </p>
            </div>

            <ul className='space-y-2 sm:space-y-4'>
              <li className='flex gap-x-3'>
                <span className='mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500'>
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
                <div className='grow'>
                  <span className={`${styles.paragraph2}`}>
                    <span className='font-bold'>Personalized Care</span>{" "}
                    designed around each client’s unique needs
                  </span>
                </div>
              </li>

              <li className='flex gap-x-3'>
                <span className='mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500'>
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
                <div className='grow'>
                  <span className={`${styles.paragraph2}`}>
                    <span className='font-bold'>Compassionate Team</span>{" "}
                    committed to respect and empathy
                  </span>
                </div>
              </li>

              <li className='flex gap-x-3'>
                <span className='mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500'>
                  <svg
                    className='shrink-0 size-3.5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <polyline points='20 6 9 17 4 12' />
                  </svg>
                </span>
                <div className='grow'>
                  <span className={`${styles.paragraph2}`}>
                    <span className='font-bold'>Ongoing Support</span> to help
                    clients thrive in their communities
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

export default AboutHome;

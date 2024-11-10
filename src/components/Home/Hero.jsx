import { Home1, Home7 } from "../../assets";
import styles from "../../style";
import Button from "../Reusable/Button";

const Hero = () => {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row-reverse mt-2 mb-8 lg:py-0 bg-[#ece5fb] ${styles.marginX} rounded-[40px]`}
    >
      {/* Image container */}
      <div className='flex w-full lg:w-1/2'>
        <img
          className='w-full h-[400px] lg:h-full object-cover  md:rounded-[25%_5%_5%_25%_/25%_5%_5%_25%] shadow-lg lg:shadow-none'
          src={Home7}
          alt='Hero image'
        />
      </div>
      {/* Content container */}
      <div className='flex flex-col w-full lg:w-1/2 px-4 lg:px-8 '>
        <div className='flex flex-col my-8 lg:my-40 justify-start items-center gap-8'>
          <h2 className={`${styles.heading2} text-prime w-[85%] mx-auto`}>
            Looking for Support Services?
          </h2>
          <p className={`${styles.paragraph2} w-[85%] mx-auto`}>
            Our team provides personalized support services that prioritize
            client well-being, comfort, and independence. By listening to each
            individual&apos;s needs, we create tailored care solutions that
            enhance quality of life. With compassion and professionalism, we&apos;re
            here to support you on your journey to a fulfilling life within the
            community.
          </p>
          <div className='flex justify-start items-center w-[85%] mx-auto'>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

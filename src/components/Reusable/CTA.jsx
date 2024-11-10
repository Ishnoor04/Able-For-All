import { Home3 } from "../../assets";
import styles from "../../style";
import Button from "./Button";

const CTA = () => {
  return (
    <div
      className={`bg-[#ece5fb] sm:px-8 sm:py-6 px-4 py-3 font-[sans-serif] sm:w-[75%] w-[85%] flex mx-auto ${styles.paddingY} ${styles.marginY}`}
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-12'>
        <div className='text-center md:text-left'>
          <h2 className={`${styles.heading3} mb-6 !text-black`}>
            Take the First Step Toward Personalized Care
          </h2>
          <p className={`${styles.paragraph2} text-black mb-6`}>
            Ready to enhance your independence and well-being with tailored
            disability support? Contact us today to explore how we can help you
            achieve your goals.
          </p>
          <Button />
        </div>
        <div className='text-center'>
          <img
            src={Home3}
            alt='Premium Benefits'
            className='w-full mx-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;

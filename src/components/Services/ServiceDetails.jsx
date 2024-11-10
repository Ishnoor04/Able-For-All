

import styles from '../../style';
const ServiceCard = ({ index, title, img, content }) => (
    <div
      className={`${
        index % 2 === 0
        ? "flex md:flex-row flex-col rounded-full"
        : "flex md:flex-row-reverse flex-col   rounded-full"
    } items-center justify-between  ${styles.padding} ${styles.marginX} gap-6`}
    >
      <div className={`  md:w-1/2 flex items-center justify-center relative`}>
        <img src={img} alt="" className=" rounded-2xl w-[580px] m-6 md:m-0" />
      </div>
      <div className={` md:w-1/2 flex items-center flex-col justify-center`}>
        <h1
          className={`${styles.heading3} mb-2`}
        >
          {title}
        </h1>

        <p
          className={`${styles.paragraph2}`}
        >
          {content}
        </p>
      </div>
    </div>
  );
  
  const ServiceDetails = ({serviceDetails}) => {
    return (
      <div className={``}>
       
        <div
          className={`${styles.paddingX} flex flex-col text-center items-center mt-6`}
        >
          <h1
            className={`${styles.paragraph2} mb-8 mt-4 w-[80%]`}
          >
            {serviceDetails.content}
          </h1>

          <h1 className={`${styles.heading2}`}>What We Provide</h1>
        </div>
        <div>
        {serviceDetails.whatWeProvide.map((mainService, index) => (
            <ServiceCard key={mainService.id} {...mainService} index={index} />
          ))}
        </div>
      </div>
    );
  };

export default ServiceDetails
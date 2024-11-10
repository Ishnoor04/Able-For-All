const styles = {
    boxWidth: " w-full",
  
    heading2:
      "font-yeseva text-prime font-semibold xs:text-[36px] md:text-[56px] text-[22px] xl:text-[64px] text-navy md:leading-[66.8px] xs:leading-[46.8px]",
    heading3:
      " font-yeseva text-prime font-semibold xs:text-[30px] md:text-[35px] lg:text-[40px] text-[22px] text-navy xs:leading-[46.8px] leading-[26.8px]",
    heading4:
      " font-semibold text-prime font-yeseva xs:text-[22px] md:text-[28px] text-[18px] text-navy xs:leading-[36.8px] leading-[16.8px]",
    paragraph:
      "font-roboto font-normal ss:text-[15px] lg:text-[18px] text-[13px]  md:leading-[24.8px] ss:leading-[20px] leading-[16px]",
    paragraph2:
      "font-roboto ss:text-[18px] lg:text-[20px] text-[15px]  md:leading-[30.8px] ss:leading-[24px] leading-[20px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-2`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;
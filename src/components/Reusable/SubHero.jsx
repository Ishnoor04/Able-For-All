import { motion } from 'framer-motion';
import styles from '../../style';

const SubHero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  overlayColor = 'from-black/70 to-black/40',
  height = 'h-[70vh]',
  margin = 'mx-4 my-8', // default margin
  children 
}) => {
  return (
    <div className={`${styles.marginX}`}>
      <div 
        className={`
          relative ${height} w-full overflow-hidden
          rounded-[2rem] md:rounded-[3rem]
          border border-white/10
        `}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Glass Morphism Effect */}
        <div className={`
          absolute inset-0 bg-gradient-to-b ${overlayColor}
          backdrop-blur-xs
        `} />

        {/* Content Container */}
        <div className="absolute inset-0 container mx-auto px-5 md:px-6">
          <div className="h-full flex flex-col justify-end gap-4 py-8">
            {/* Title Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`${styles.heading2} !text-white`}
            >
              {title}
            </motion.h1>

            {/* Subtitle Animation */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${styles.heading3} !text-white max-w-[80%]`}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Optional additional content */}
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6"
              >
                {children}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
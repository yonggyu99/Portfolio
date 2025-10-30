import { motion, Variants } from 'framer-motion';

const HeroSection = () => {
  // 공통 스타일
  const baseTextStyle =
    'text-primary text-xs md:text-sm lg:text-sm xl:text-2xl';
  const highlightStyle =
    'text-secondary font-bold text-sm md:text-base lg:text-base xl:text-3xl';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 1.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  return (
    <div className="text-center w-full max-w-6xl px-4 md:px-8 h-screen flex items-center justify-center -mt-16 md:-mt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="leading-normal tracking-wider"
      >
        <motion.div
          variants={itemVariants}
          className="text-primary text-base md:text-xl lg:text-2xl xl:text-5xl mb-1 md:mb-2 lg:mb-3 xl:mb-4"
        >
          안녕하세요
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-secondary text-lg md:text-2xl lg:text-3xl xl:text-6xl mb-1 md:mb-2 lg:mb-3 xl:mb-4"
        >
          Frontend Developer
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-white font-bold text-xl md:text-3xl lg:text-4xl xl:text-7xl mb-2 md:mb-4 lg:mb-6 xl:mb-8"
        >
          박용규 입니다.
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={`${baseTextStyle} mb-2 md:mb-3 lg:mb-4 xl:mb-6`}
        >
          사람들이 <span className={highlightStyle}>편하게</span> 다가갈 수 있는
          <br />
          서비스를 제공하기 위해 노력하고 있습니다.
        </motion.div>

        <motion.p
          variants={itemVariants}
          className={`${baseTextStyle} leading-normal tracking-wider`}
        >
          끊임없는 <span className={highlightStyle}>도전</span>과{' '}
          <span className={highlightStyle}>배움</span>을 통해{' '}
          <span className={highlightStyle}>한 단계씩</span>{' '}
          <span className={highlightStyle}>성장</span>
          하며,
          <br />더 나은 서비스와 경험을 만들어가고 있습니다.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroSection;

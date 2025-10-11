import { motion, Variants } from 'framer-motion';

const HeroSection = () => {
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
    <div className="text-center w-full max-w-6xl px-4 md:px-8 h-screen flex items-center justify-center -mt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          variants={itemVariants}
          className="leading-normal tracking-wider"
        >
          <div className="text-primary text-lg md:text-4xl lg:text-5xl mb-1 md:mb-4">
            안녕하세요
          </div>
          <div className="text-secondary text-xl md:text-5xl lg:text-6xl mb-1 md:mb-4">
            Frontend Developer
          </div>
          <div className="text-white font-bold text-2xl md:text-6xl lg:text-7xl mb-2 md:mb-8">
            박용규 입니다.
          </div>
          <div className="text-primary text-xs md:text-2xl mb-2 md:mb-6">
            사람들이{' '}
            <span className="text-secondary font-bold text-sm md:text-3xl">
              편하게
            </span>{' '}
            다가갈 수 있는
            <br />
            서비스를 제공하기 위해 노력하고 있습니다.
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-primary text-xs md:text-2xl leading-normal tracking-wider"
        >
          끊임없는{' '}
          <span className="text-secondary font-bold text-sm md:text-3xl">
            도전
          </span>
          과{' '}
          <span className="text-secondary font-bold text-sm md:text-3xl">
            배움
          </span>
          을 통해{' '}
          <span className="text-secondary font-bold text-sm md:text-3xl">
            한 단계씩
          </span>{' '}
          <span className="text-secondary font-bold text-sm md:text-3xl">
            성장
          </span>
          하며,
          <br />더 나은 서비스와 경험을 만들어가고 있습니다.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroSection;

import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="text-left w-full max-w-6xl px-4 md:px-8 h-screen flex items-center justify-center -mt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.p
          variants={itemVariants}
          className="text-primary mb-3 md:mb-4 lg:mb-5 text-lg md:text-xl leading-[3] tracking-wider"
        >
          안녕하세요, 저는 Frontend Developer
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-white font-bold mb-4 md:mb-5 lg:mb-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[3] tracking-wider"
        >
          박용규 입니다.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-primary mb-5 md:mb-7 lg:mb-9 text-xl leading-normal sm:text-2xl sm:leading-normal md:text-3xl md:leading-normal lg:text-4xl lg:leading-normal xl:text-5xl xl:leading-normal tracking-wider"
        >
          사람들이 편하게 다가갈 수 있는 웹을 만드는
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          개발자가 되기 위해 노력하고 있습니다.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-secondary text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-normal tracking-wider"
        >
          <span className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">끊임없는 도전</span>과 <span className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">배움</span>을 통해 한 단계씩 <span className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">성장</span>하며,
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          더 나은 서비스와 경험을 만들어가고 있습니다.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroSection;

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
          className="text-primary mb-2 text-lg md:text-xl"
        >
          안녕하세요, 저는 Frontend Developer
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-white font-bold mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          박용규 입니다.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-primary mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight"
        >
          사람들이 편하게 다가갈 수 있는 웹을 만드는
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          개발자가 되기 위해 노력하고 있습니다.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-secondary text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
        >
          끊임없는 도전과 배움을 통해 한 단계씩 성장하며,
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          더 나은 서비스와 경험을 만들어가고 있습니다.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroSection;

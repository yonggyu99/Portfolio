import { motion, Variants } from 'framer-motion';
import { FaGithub, FaBlog } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const ContactSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: 'easeInOut' },
    },
  };

  return (
    <section
      id="contact"
      data-section="contact"
      className="min-h-screen flex items-center justify-center px-4 md:px-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center"
      >
        {/* 상단 장식 라인 */}
        <motion.div
          variants={lineVariants}
          className="w-32 h-0.5 bg-primary mx-auto mb-8"
        />

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12"
        >
          Contact
        </motion.h2>

        {/* 연락처 정보 */}
        <div className="space-y-6 md:space-y-8">
          {/* 전화번호 */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-3 md:space-x-4"
          >
            <MdPhone className="text-primary text-xl md:text-2xl" />
            <span className="text-white text-lg md:text-xl lg:text-2xl">
              010-1234-5678
            </span>
          </motion.div>

          {/* 이메일 */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-3 md:space-x-4"
          >
            <MdEmail className="text-primary text-xl md:text-2xl" />
            <a
              href="mailto:yoyo5411@naver.com"
              className="text-white text-lg md:text-xl lg:text-2xl hover:text-primary transition-colors duration-300"
            >
              yoyo5411@naver.com
            </a>
          </motion.div>

          {/* 소셜 링크 */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-6 md:space-x-8 mt-8 md:mt-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <FaGithub className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a
              href="https://blog.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <FaBlog className="w-8 h-8 md:w-10 md:h-10" />
            </a>
          </motion.div>
        </div>

        {/* 하단 장식 라인 */}
        <motion.div
          variants={lineVariants}
          className="w-32 h-0.5 bg-primary mx-auto mt-12"
        />
      </motion.div>
    </section>
  );
};

export default ContactSection;

import { motion, Variants } from 'framer-motion';
import { FaGithub, FaBlog } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { useState, useEffect } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // ContactSection이 화면에 거의 완전히 보일 때만 true
      const isFullyVisible =
        rect.top <= windowHeight * 0.05 && rect.bottom >= windowHeight * 0.95;
      setIsVisible(isFullyVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 체크

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
      className="min-h-screen w-full flex items-center justify-center px-4 md:px-8 relative"
    >
      {/* 배경 파티클 */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center relative z-10"
      >
        {/* 상단 장식 라인 */}
        <motion.div
          variants={lineVariants}
          className="w-full max-w-sm h-0.5 bg-primary mx-auto mb-8"
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
              010-8939-2456
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
              href="https://github.com/yonggyu99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <FaGithub className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a
              href="https://roasted-tracker-413.notion.site/18141649166a80cdac33c190cff77ae1?v=18141649166a81e59798000cb13fe287&source=copy_link"
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
          className="w-full max-w-sm h-0.5 bg-primary mx-auto mt-12"
        />
      </motion.div>
    </section>
  );
};

export default ContactSection;

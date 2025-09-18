import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const contactSection = document.querySelector('[data-section="contact"]');
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 hidden md:block">
      {/* 왼쪽: GitHub + 세로라인 */}
      <motion.div
        animate={{ opacity: isContactVisible ? 0 : 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute bottom-0 left-8 flex flex-col items-center"
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-secondary transition-colors duration-300 mb-6"
        >
          <FaGithub size={40} />
        </a>
        <div className="w-0.5 h-52 bg-white"></div>
      </motion.div>

      {/* 오른쪽: 이메일 + 세로라인 */}
      <motion.div
        animate={{ opacity: isContactVisible ? 0 : 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute bottom-0 right-8 flex flex-col items-center"
      >
        <div className="writing-mode-vertical text-white text-xl tracking-wider mb-6">
          yoyo5411@naver.com
        </div>
        <div className="w-0.5 h-40 bg-white"></div>
      </motion.div>
    </footer>
  );
};

export default Footer;

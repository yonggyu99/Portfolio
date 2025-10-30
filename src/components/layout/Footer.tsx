import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

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

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('yoyo5411@naver.com');
      toast.success('이메일이 복사되었습니다!', {
        duration: 2000,
        position: 'bottom-right',
        style: {
          background: '#00c9a7',
          color: '#0a192f',
          fontWeight: '500',
        },
      });
    } catch (err) {
      console.error('Failed to copy email:', err);
      toast.error('복사에 실패했습니다.');
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 hidden md:block">
      {/* iPad: 우측 하단에 가로 배치 (768px ~ 1279px) */}
      <motion.div
        animate={{ opacity: isContactVisible ? 0 : 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute bottom-6 right-6 flex gap-4 xl:hidden"
      >
        <a
          href="https://github.com/yonggyu99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-secondary transition-colors duration-300"
        >
          <FaGithub size={32} />
        </a>
        <button
          onClick={handleEmailCopy}
          className="text-white hover:text-secondary transition-colors duration-300 focus:outline-none"
          aria-label="Copy email address"
        >
          <MdEmail size={32} />
        </button>
      </motion.div>

      {/* 노트북: 양쪽 배치 (1280px 이상) */}
      {/* 왼쪽: GitHub + 세로라인 */}
      <motion.div
        animate={{ opacity: isContactVisible ? 0 : 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute bottom-0 left-6 hidden xl:flex flex-col items-center"
      >
        <a
          href="https://github.com/yonggyu99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-secondary transition-colors duration-300 mb-4"
        >
          <FaGithub size={28} />
        </a>
        <div className="w-0.5 h-36 bg-white"></div>
      </motion.div>

      {/* 오른쪽: 이메일 + 세로라인 */}
      <motion.div
        animate={{ opacity: isContactVisible ? 0 : 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute bottom-0 right-6 hidden xl:flex flex-col items-center"
      >
        <button
          onClick={handleEmailCopy}
          className="writing-mode-vertical text-white hover:text-secondary transition-colors duration-300 text-base tracking-wider mb-4 cursor-pointer focus:outline-none"
          aria-label="Copy email address"
        >
          yoyo5411@naver.com
        </button>
        <div className="w-0.5 h-28 bg-white"></div>
      </motion.div>
    </footer>
  );
};

export default Footer;

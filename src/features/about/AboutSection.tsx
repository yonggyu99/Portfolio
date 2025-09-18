import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { hashtags } from './data/aboutData';

const AboutSection = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [clickingHashtag, setClickingHashtag] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const handleHashtagClick = (hashtagId: string) => {
    if (isMobile) {
      setIsModalOpen(hashtagId);
    } else {
      setFlippedCard(flippedCard === hashtagId ? null : hashtagId);
    }
  };

  // 뷰포트 진입 시 한 번만 랜덤 선택
  const handleHashtagsInView = () => {
    if (clickingHashtag === null) {
      const randomIndex =
        Math.random() < 0.8
          ? Math.floor(Math.random() * hashtags.length)
          : null;
      setClickingHashtag(randomIndex);
    }
  };

  return (
    <motion.div
      id="about"
      className="w-full max-w-6xl px-4 md:px-8 min-h-screen flex flex-col justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Section Title */}
      <div className="mb-16 md:mb-28 text-left">
        <h2 className="text-primary text-2xl md:text-4xl font-bold mb-4">
          <span className="text-secondary">01. </span>
          About Me
          <div className="inline-block ml-4 md:ml-8 w-32 md:w-72 h-0.5 bg-line align-middle"></div>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-28">
        {/* Profile Image */}
        <div className="flex-shrink-0 order-1 lg:order-none">
          <div
            className="relative w-[260px] h-[260px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            {/* 카드 컨테이너 - 뒤집기 애니메이션 */}
            <motion.div
              className="w-[260px] h-[260px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] z-10"
              animate={{ rotateY: !isMobile && flippedCard ? 180 : 0 }}
              transition={{ duration: 0.8 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 앞면 - 프로필 이미지 */}
              <motion.div
                className="absolute w-full h-full rounded-full overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
                animate={{
                  opacity: flippedCard ? 0 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </motion.div>

              {/* 뒷면 - 설명 텍스트 */}
              <motion.div
                className="absolute w-full h-full rounded-full bg-slate-800 flex items-center justify-center p-6 md:p-8 lg:p-10"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
                animate={{
                  opacity: flippedCard ? 1 : 0,
                }}
                transition={{ duration: 0.4, delay: flippedCard ? 0.4 : 0 }}
              >
                {/* 뒤로 가기 버튼 */}
                <motion.button
                  className="absolute top-2 right-2 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-secondary text-primary font-bold text-sm md:text-lg hover:bg-white transition-colors duration-200 z-20"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlippedCard(null);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: flippedCard ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  ←
                </motion.button>

                <motion.div
                  className="text-center"
                  key={flippedCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-secondary text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                    {flippedCard &&
                      hashtags.find((h) => h.id === flippedCard)?.text}
                  </h3>
                  <p className="text-primary text-xs md:text-sm lg:text-lg leading-relaxed">
                    {flippedCard &&
                      hashtags.find((h) => h.id === flippedCard)?.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-xl space-y-8 md:space-y-16 text-left order-2 lg:order-none">
          {/* 학력 Section */}
          <div className="flex">
            <div className="w-0.5 bg-line mr-4 md:mr-8 flex-shrink-0 self-stretch"></div>
            <div className="flex-1">
              <h3 className="text-secondary text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-6">
                학력
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h4 className="text-primary text-base md:text-lg lg:text-xl font-semibold">
                    부경대학교 전자공학과 학사
                  </h4>
                  <p className="text-line text-sm md:text-base lg:text-lg">
                    2018.03~2025.02
                  </p>
                </div>
                <div>
                  <h4 className="text-primary text-base md:text-lg lg:text-xl font-semibold">
                    LG U+ 유레카 프론트엔드 과정
                  </h4>
                  <p className="text-line text-sm md:text-base lg:text-lg">
                    2025.01~2025.08
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 수상 Section */}
          <div className="flex">
            <div className="w-0.5 bg-line mr-4 md:mr-8 flex-shrink-0 self-stretch"></div>
            <div className="flex-1">
              <h3 className="text-secondary text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-6">
                수상
              </h3>
              <div>
                <h4 className="text-primary text-base md:text-lg lg:text-xl font-semibold">
                  LG U+ 유레카 최종 융합프로젝트
                </h4>
                <p className="text-line text-sm md:text-base lg:text-lg">
                  우수상(IT-PLACE) 2025.08.12
                </p>
              </div>
            </div>
          </div>

          {/* 자격증 Section */}
          <div className="flex">
            <div className="w-0.5 bg-line mr-4 md:mr-8 flex-shrink-0 self-stretch"></div>
            <div className="flex-1">
              <h3 className="text-secondary text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-6">
                자격증
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h4 className="text-primary text-base md:text-lg lg:text-xl font-semibold">
                    정보처리기사
                  </h4>
                  <p className="text-line text-sm md:text-base lg:text-lg">
                    2024.06.18
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hashtags */}
      <motion.div
        className="mt-16 md:mt-32 grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap gap-4 md:gap-8 lg:gap-12 justify-center lg:justify-between w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        onViewportEnter={handleHashtagsInView}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              duration: 0.6,
            },
          },
        }}
      >
        {hashtags.map((hashtag, index) => (
          <motion.div
            key={hashtag.id}
            className="relative cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => handleHashtagClick(hashtag.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className={`text-lg md:text-2xl lg:text-3xl transition-colors duration-200 ${
                flippedCard === hashtag.id ? 'text-primary' : 'text-secondary'
              }`}
            >
              {hashtag.text}
            </motion.span>

            {/* 랜덤하게 나타나는 Click me! 텍스트 */}
            {clickingHashtag === index && (
              <motion.span
                className="absolute -top-3 md:-top-4 lg:-top-5 inset-x-0 flex justify-center text-xs md:text-xs lg:text-sm text-primary font-bold whitespace-nowrap"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Click&nbsp;me!
              </motion.span>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* 모바일 모달 */}
      {isMobile && isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(null)}
        >
          <motion.div
            className="bg-slate-800 rounded-2xl p-6 max-w-sm w-full max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-secondary text-xl font-bold">
                {hashtags.find((h) => h.id === isModalOpen)?.text}
              </h3>
              <button
                onClick={() => setIsModalOpen(null)}
                className="w-8 h-8 rounded-full bg-secondary text-primary font-bold hover:bg-white transition-colors duration-200"
              >
                ×
              </button>
            </div>
            <p className="text-primary text-sm leading-relaxed">
              {hashtags.find((h) => h.id === isModalOpen)?.description}
            </p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AboutSection;

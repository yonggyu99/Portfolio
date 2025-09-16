import { motion } from 'framer-motion';
import { useState } from 'react';
import { hashtags } from './data/aboutData';

const AboutSection = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const handleHashtagClick = (hashtagId: string) => {
    setFlippedCard(flippedCard === hashtagId ? null : hashtagId);
  };

  return (
    <motion.div
      id="about"
      className="w-full max-w-6xl px-8 min-h-screen flex flex-col justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Section Title */}
      <div className="mb-28 text-left">
        <h2 className="text-primary text-4xl font-bold mb-4">
          <span className="text-secondary">01. </span>
          About Me
          <div className="inline-block ml-8 w-72 h-0.5 bg-line align-middle"></div>
        </h2>
      </div>

      <div className="flex items-center justify-center gap-28">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div
            className="relative w-[520px] h-[520px] flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            {/* 오른쪽 아래로 살짝 이동된 민트색 원 */}
            <div className="absolute w-[520px] h-[520px] border-4 border-secondary rounded-full translate-x-2 translate-y-2"></div>

            {/* 카드 컨테이너 - 뒤집기 애니메이션 */}
            <motion.div
              className="absolute w-[520px] h-[520px] z-10 -translate-x-2 -translate-y-2"
              animate={{ rotateY: flippedCard ? 180 : 0 }}
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
                />
              </motion.div>

              {/* 뒷면 - 설명 텍스트 */}
              <motion.div
                className="absolute w-full h-full rounded-full bg-slate-800 flex items-center justify-center p-8"
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
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary text-primary font-bold text-lg hover:bg-white transition-colors duration-200 z-20"
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
                  <h3 className="text-secondary text-2xl font-bold mb-4">
                    {flippedCard &&
                      hashtags.find((h) => h.id === flippedCard)?.text}
                  </h3>
                  <p className="text-primary text-lg leading-relaxed">
                    {flippedCard &&
                      hashtags.find((h) => h.id === flippedCard)?.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-xl space-y-16 text-left">
          {/* 학력 Section */}
          <div className="flex">
            <div className="w-0.5 bg-line mr-8 flex-shrink-0 self-stretch"></div>
            <div className="flex-1">
              <h3 className="text-secondary text-4xl font-bold mb-6">학력</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-primary text-2xl font-semibold">
                    부경대학교 전자공학과
                  </h4>
                  <p className="text-line text-xl">2018.03~2025.02</p>
                </div>
                <div>
                  <h4 className="text-primary text-2xl font-semibold">
                    LG U+ 유레카 프론트엔드 과정
                  </h4>
                  <p className="text-line text-xl">2018.03~2025.02</p>
                </div>
              </div>
            </div>
          </div>

          {/* 수상 Section */}
          <div className="flex">
            <div className="w-0.5 bg-line mr-8 flex-shrink-0 self-stretch"></div>
            <div className="flex-1">
              <h3 className="text-secondary text-4xl font-bold mb-6">수상</h3>
              <div>
                <h4 className="text-primary text-2xl font-semibold">
                  LG U+ 유레카 최종 융합프로젝트
                </h4>
                <p className="text-line text-xl">우수상(IT-PLACE)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hashtags */}
      <motion.div
        className="mt-32 flex flex-wrap gap-12 justify-between w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.8 }}
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
        {hashtags.map((hashtag) => (
          <motion.span
            key={hashtag.id}
            className={`text-3xl cursor-pointer transition-colors duration-200 ${
              flippedCard === hashtag.id ? 'text-primary' : 'text-secondary'
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => handleHashtagClick(hashtag.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {hashtag.text}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;

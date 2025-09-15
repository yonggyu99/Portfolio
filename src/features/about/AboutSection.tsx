import { motion } from 'framer-motion';

const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      id="about"
      className="w-full max-w-6xl px-8 min-h-screen flex flex-col justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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
          <div className="relative w-[520px] h-[520px] flex items-center justify-center">
            {/* 오른쪽 아래로 살짝 이동된 민트색 원 */}
            <div className="absolute w-[520px] h-[520px] border-4 border-secondary rounded-full translate-x-2 translate-y-2"></div>

            {/* 프로필 이미지 - 왼쪽 위 원 위치 */}
            <div className="absolute w-[520px] h-[520px] rounded-full overflow-hidden z-10 -translate-x-2 -translate-y-2">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
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
        viewport={{ once: true, amount: 0.8 }}
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
        <motion.span
          className="text-secondary text-3xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          #도전적
        </motion.span>
        <motion.span
          className="text-secondary text-3xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          #사용자 중심
        </motion.span>
        <motion.span
          className="text-secondary text-3xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          #배움의 즐거움
        </motion.span>
        <motion.span
          className="text-secondary text-3xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          #끈기
        </motion.span>
        <motion.span
          className="text-secondary text-3xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          #함께 성장
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;

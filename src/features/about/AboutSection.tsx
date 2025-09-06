const AboutSection = () => {
  return (
    <div
      id="about"
      className="w-full max-w-6xl px-8 min-h-screen flex flex-col justify-center"
    >
      {/* Section Title */}
      <div className="mb-28 text-left">
        <h2
          className="text-primary text-4xl font-bold mb-4">
          <span className="text-secondary">01. </span>
          About Me
          <div
            className="inline-block ml-8 w-72 h-0.5 bg-line align-middle"
          ></div>
        </h2>
      </div>

      <div
        className="flex items-center justify-center gap-28"
      >
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
            <h3
              className="text-secondary text-4xl font-bold mb-6"
            >
              학력
            </h3>
            <div className="space-y-4">
              <div>
                <h4
                  className="text-primary text-2xl font-semibold"
                >
                  부경대학교 전자공학과
                </h4>
                <p
                  className="text-line text-xl"
                >
                  2018.03~2025.02
                </p>
              </div>
              <div>
                <h4
                  className="text-primary text-2xl font-semibold"
                >
                  LG U+ 유레카 프론트엔드 과정
                </h4>
                <p
                  className="text-line text-xl"
                >
                  2018.03~2025.02
                </p>
              </div>
            </div>
            </div>
          </div>

          {/* 수상 Section */}
          <div className="flex">
            <div className="w-0.5 bg-line mr-8 flex-shrink-0 self-stretch"></div>
            <div className="flex-1">
            <h3
              className="text-secondary text-4xl font-bold mb-6"
            >
              수상
            </h3>
            <div>
              <h4
                className="text-primary text-2xl font-semibold"
              >
                LG U+ 유레카 최종 융합프로젝트
              </h4>
              <p
                className="text-line text-xl"
              >
                우수상(IT-PLACE)
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hashtags */}
      <div className="mt-32 flex flex-wrap gap-12 justify-between w-full">
        <span
          className="text-secondary text-3xl"
        >
          #도전적
        </span>
        <span className="text-secondary text-3xl">#사용자 중심</span>
        <span className="text-secondary text-3xl">#배움의 즐거움</span>
        <span
          className="text-secondary text-3xl"
        >
          #끈기
        </span>
        <span className="text-secondary text-3xl">#함께 성장</span>
      </div>
    </div>
  );
};

export default AboutSection;

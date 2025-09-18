import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [showContent, setShowContent] = useState(true);
  const circleRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // 1. 원 그리기 애니메이션 (반시계 방향)
    if (circleRef.current) {
      const circle = circleRef.current;
      const circumference = 2 * Math.PI * 500; // radius 500 (더 큰 원)

      gsap.set(circle, {
        strokeDasharray: circumference,
        strokeDashoffset: circumference,
        rotation: -90, // 12시 방향에서 시작
        transformOrigin: 'center',
        scaleX: -1, // X축 뒤집어서 시계방향으로 그리기
      });

      timeline.to(circle, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.out',
      });
    }

    // 2. 원의 색상 변화를 선 그리기와 동일한 방향으로
    // 그라디언트를 사용해서 색상이 선을 따라 변하는 효과
    timeline.call(
      () => {
        if (circleRef.current) {
          // SVG 그라디언트 생성
          const svg = circleRef.current.closest('svg');
          if (svg) {
            const defs = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'defs'
            );
            const gradient = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'linearGradient'
            );
            gradient.id = 'strokeGradient';
            gradient.setAttribute('gradientUnits', 'userSpaceOnUse');
            gradient.setAttribute('x1', '525'); // 중심점
            gradient.setAttribute('y1', '25'); // 12시 방향
            gradient.setAttribute('x2', '525');
            gradient.setAttribute('y2', '1025'); // 6시 방향

            const stop1 = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'stop'
            );
            stop1.setAttribute('offset', '0%');
            stop1.setAttribute('stop-color', '#A7C7E7'); // 파스텔 블루

            const stop2 = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'stop'
            );
            stop2.setAttribute('offset', '100%');
            stop2.setAttribute('stop-color', '#e6f7ff');

            gradient.appendChild(stop1);
            gradient.appendChild(stop2);
            defs.appendChild(gradient);
            svg.appendChild(defs);

            // 그라디언트 회전으로 색상 변화 효과
            gsap.fromTo(
              gradient,
              { rotation: 0, transformOrigin: '525px 525px' },
              {
                rotation: 360,
                duration: 2,
                ease: 'power2.out',
                onStart: () => {
                  circleRef.current!.setAttribute(
                    'stroke',
                    'url(#strokeGradient)'
                  );
                },
              }
            );
          }
        }
      },
      [],
      '+=0.5'
    );

    // 3. 원 선 분해 및 흩어지기
    timeline.call(
      () => {
        createCircleDisintegration();
      },
      [],
      '+=0.3'
    );

    // 4. 전체 페이드아웃 (더 긴 유지 시간)
    timeline.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 1.2,
        ease: 'power2.inOut',
        onComplete: () => {
          setShowContent(false);
          setTimeout(onComplete, 100);
        },
      },
      '+=2.5'
    ); // 파티클 효과를 더 오래 볼 수 있도록 딜레이 증가

    return () => {
      timeline.kill();
    };
  }, [onComplete]);

  const createCircleDisintegration = () => {
    if (!particlesRef.current) return;

    // 화면 크기에 따른 반응형 설정
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;

    // 원의 둘레를 따라 선 세그먼트 생성
    const numSegments = isMobile ? 60 : isTablet ? 80 : 100; // 화면 크기에 따라 세그먼트 수 조정
    const radius = isMobile ? 150 : isTablet ? 300 : 500; // 화면 크기에 따라 반지름 조정

    for (let i = 0; i < numSegments; i++) {
      const segment = document.createElement('div');
      const angle = (i / numSegments) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      segment.className = 'absolute';
      segment.style.backgroundColor = '#A7C7E7'; // 파스텔 블루
      segment.style.width = isMobile ? '2px' : '4px';
      segment.style.height = isMobile ? '6px' : '10px';
      segment.style.left = '50%';
      segment.style.top = '50%';
      segment.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle + Math.PI / 2}rad)`;
      segment.style.transformOrigin = 'center';
      segment.style.borderRadius = '2px';
      segment.style.opacity = '0'; // 처음에 보이지 않게

      particlesRef.current.appendChild(segment);

      // 반시계 방향으로 흩어지면서 점점 사라지기
      const spreadAngle = angle - Math.PI * 0.2; // 반시계 방향으로 변경
      const baseSpreadDistance = isMobile ? 200 : isTablet ? 300 : 400;
      const spreadDistance =
        baseSpreadDistance +
        Math.random() * (isMobile ? 200 : isTablet ? 300 : 500);
      const spreadX = Math.cos(spreadAngle) * spreadDistance;
      const spreadY = Math.sin(spreadAngle) * spreadDistance;

      gsap.fromTo(
        segment,
        {
          opacity: 0,
        },
        {
          x: spreadX,
          y: spreadY,
          opacity: 1,
          scale: Math.random() * 1.5 + 0.5,
          rotation: `+=${Math.random() * 360}`,
          duration: 3.5, // 퍼지는 시간 더 길게
          ease: 'power2.out',
          delay: (i / numSegments) * 1.2, // 퍼지는 딜레이도 더 길게
        }
      );

      // 동시에 페이드아웃 애니메이션 (퍼지면서 사라지기)
      gsap.to(segment, {
        opacity: 0,
        duration: 2.5, // 사라지는 시간도 더 길게
        delay: (i / numSegments) * 1.2 + 1.0, // 더 오래 보이다가 사라지기
        ease: 'power2.out',
      });
    }

    // 원래 원 숨기기
    gsap.to(circleRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
    });
  };

  if (!showContent) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      {/* 배경 별들 */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 text-center">
        {/* SVG 원 */}
        <svg
          width="350"
          height="350"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[600px] md:h-[600px] lg:w-[1050px] lg:h-[1050px]"
          viewBox="0 0 1050 1050"
        >
          <circle
            ref={circleRef}
            cx="525"
            cy="525"
            r="500"
            fill="none"
            stroke="#e6f7ff"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        {/* 파티클 컨테이너 */}
        <div
          ref={particlesRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* 텍스트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-4 tracking-wide">
            Thank you
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary/80 font-light tracking-wider">
            for visiting my portfolio
          </p>
        </motion.div>

        {/* 하단 로딩 애니메이션 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary/60 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeScreen;

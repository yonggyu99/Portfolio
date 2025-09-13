export interface Skill {
  name: string;
  description: string;
  icon?: string;
  color?: string;
}

export interface SkillCategory {
  [key: string]: Skill[];
}

export const skillsData: SkillCategory = {
  Language: [
    {
      name: 'JavaScript',
      description:
        'ES6+ 문법을 활용하여 프론트엔드 및 백엔드 개발이 가능하며, 비동기 처리와 DOM 조작에 능숙합니다.',
      icon: 'siJavascript',
      color: '#F7DF1E',
    },
    {
      name: 'TypeScript',
      description:
        '타입 안전성을 보장하는 코드 작성이 가능하며, 인터페이스와 제네릭을 활용한 프론트엔드 개발 경험이 있습니다.',
      icon: 'siTypescript',
      color: '#3178C6',
    },
    {
      name: 'C',
      description:
        '시스템 프로그래밍과 자료구조 알고리즘 구현에 활용하며, 메모리 관리와 포인터 개념에 대한 이해가 있습니다.',
      icon: 'siC',
      color: '#A8B9CC',
    },
    {
      name: 'Python',
      description:
        'TensorFlow와 PyTorch를 활용한 딥러닝 모델 개발 경험이 있으며, 특히 LSGAN(Least Squares GAN) 모델의 손실함수 최적화를 통해 생성 이미지의 품질과 학습 안정성을 개선한 경험이 있습니다.',
      icon: 'siPython',
      color: '#3776AB',
    },
    {
      name: 'HTML5',
      description:
        '시맨틱 태그와 웹 표준을 준수한 마크업 구조를 작성할 수 있습니다.',
      icon: 'siHtml5',
      color: '#E34F26',
    },
    {
      name: 'CSS3',
      description:
        'Flexbox, Grid 레이아웃과 반응형 웹 디자인을 구현할 수 있으며, SCSS를 활용한 스타일 관리가 가능합니다.',
      icon: 'siCss',
      color: '#1572B6',
    },
  ],
  Frontend: [
    {
      name: 'React',
      description:
        '함수형 컴포넌트와 Hooks(useState, useEffect, useCallback, useReducer)를 활용한 다수의 프로젝트 개발 경험이 있습니다.',
      icon: 'siReact',
      color: '#61DAFB',
    },
    {
      name: 'React Router',
      description: 'SPA 라우팅 시스템 구축과 동적 라우팅을 구현할 수 있습니다.',
      icon: 'siReactrouter',
      color: '#CA4245',
    },
    {
      name: 'Redux Toolkit',
      description:
        '전역 상태 관리와 비동기 액션 처리를 통한 복잡한 상태 로직 관리가 가능합니다.',
      icon: 'siRedux',
      color: '#764ABC',
    },
    {
      name: 'React Query',
      description:
        '서버 상태 관리와 캐싱을 통한 효율적인 데이터 페칭이 가능합니다.',
      icon: 'siReactquery',
      color: '#FF4154',
    },
    {
      name: 'Axios',
      description:
        'HTTP 클라이언트를 활용한 API 통신과 인터셉터를 이용한 요청/응답 처리가 가능합니다.',
      icon: 'siAxios',
      color: '#5A29E4',
    },
    {
      name: 'Vite',
      description:
        '빠른 개발 서버와 번들링을 위한 모던 빌드 툴 활용 경험이 있습니다.',
      icon: 'siVite',
      color: '#646CFF',
    },
    {
      name: 'Bootstrap',
      description:
        '반응형 UI 컴포넌트와 그리드 시스템을 활용한 빠른 프로토타이핑이 가능합니다.',
      icon: 'siBootstrap',
      color: '#7952B3',
    },
    {
      name: 'TailwindCSS',
      description:
        '유틸리티 우선 CSS 프레임워크로 커스텀 디자인 시스템 구축 경험이 있습니다.',
      icon: 'siTailwindcss',
      color: '#06B6D4',
    },
    {
      name: 'GSAP',
      description: '고급 웹 애니메이션과 인터랙티브 UI 효과 구현이 가능합니다.',
      icon: 'siGsap',
      color: '#88CE02',
    },
    {
      name: 'Framer Motion',
      description:
        'React 기반 애니메이션 라이브러리를 활용한 부드러운 페이지 전환 효과 구현이 가능합니다.',
      icon: 'siFramer',
      color: '#0055FF',
    },
    {
      name: 'Recharts',
      description:
        'React 기반 차트 라이브러리를 활용한 데이터 시각화 구현이 가능합니다.',
      icon: 'siChartdotjs',
      color: '#FF6384',
    },
    {
      name: 'Swiper',
      description: '터치 슬라이더와 캐러셀 컴포넌트 구현 경험이 있습니다.',
      icon: 'siSwiper',
      color: '#6332F6',
    },
  ],
  Backend: [
    {
      name: 'Node.js',
      description:
        'Express 프레임워크를 활용한 RESTful API 서버 구축과 미들웨어 개발 경험이 있습니다.',
      icon: 'siNodedotjs',
      color: '#339933',
    },
    {
      name: 'Express',
      description:
        '라우팅, 미들웨어, 세션 관리를 포함한 웹 서버 개발이 가능합니다.',
      icon: 'siExpress',
      color: '#000000',
    },
    {
      name: 'Socket.io',
      description:
        '실시간 양방향 통신을 위한 WebSocket 기반 채팅 시스템 구현 경험이 있습니다.',
      icon: 'siSocketdotio',
      color: '#010101',
    },
    {
      name: 'JWT',
      description:
        '토큰 기반 인증 시스템과 사용자 인가 로직 구현이 가능합니다.',
      icon: 'siJsonwebtokens',
      color: '#000000',
    },
  ],
  Database: [
    {
      name: 'MongoDB',
      description:
        'NoSQL 데이터베이스 설계와 Mongoose ODM을 활용한 스키마 모델링 경험이 있습니다.',
      icon: 'siMongodb',
      color: '#47A248',
    },
    {
      name: 'Mongoose',
      description:
        'MongoDB와의 연동을 위한 스키마 정의, 유효성 검증, 관계 설정이 가능합니다.',
      icon: 'siMongoose',
      color: '#880000',
    },
  ],
  ETC: [
    {
      name: 'GitHub',
      description:
        '버전 관리, 브랜치 전략, Pull Request를 통한 협업 개발 경험이 있습니다.',
      icon: 'siGithub',
      color: '#181717',
    },
    {
      name: 'Vercel',
      description:
        'React 애플리케이션의 자동 배포와 CI/CD 파이프라인 구축 경험이 있습니다.',
      icon: 'siVercel',
      color: '#000000',
    },
    {
      name: 'Netlify',
      description: '정적 사이트 호스팅과 자동 배포 설정이 가능합니다.',
      icon: 'siNetlify',
      color: '#00C7B7',
    },
  ],
};

export const categories = Object.keys(skillsData);

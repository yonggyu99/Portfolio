export interface Skill {
  name: string;
  description: string;
  icon?: string;
}

export interface SkillCategory {
  [key: string]: Skill[];
}

export const skillsData: SkillCategory = {
  Language: [
    {
      name: 'JavaScript',
      description: 'ES6+ 문법을 활용하여 프론트엔드 및 백엔드 개발이 가능하며, 비동기 처리와 DOM 조작에 능숙합니다.',
    },
    {
      name: 'TypeScript',
      description: '타입 안전성을 보장하는 코드 작성이 가능하며, 인터페이스와 제네릭을 활용한 프론트엔드 개발 경험이 있습니다.',
    },
    {
      name: 'HTML5',
      description: '시맨틱 태그와 웹 표준을 준수한 마크업 구조를 작성할 수 있습니다.',
    },
    {
      name: 'CSS3',
      description: 'Flexbox, Grid 레이아웃과 반응형 웹 디자인을 구현할 수 있으며, SCSS를 활용한 스타일 관리가 가능합니다.',
    },
  ],
  Frontend: [
    {
      name: 'React',
      description: '함수형 컴포넌트와 Hooks(useState, useEffect, useCallback, useReducer)를 활용한 다수의 프로젝트 개발 경험이 있습니다.',
    },
    {
      name: 'React Router',
      description: 'SPA 라우팅 시스템 구축과 동적 라우팅을 구현할 수 있습니다.',
    },
    {
      name: 'Redux Toolkit',
      description: '전역 상태 관리와 비동기 액션 처리를 통한 복잡한 상태 로직 관리가 가능합니다.',
    },
    {
      name: 'React Query',
      description: '서버 상태 관리와 캐싱을 통한 효율적인 데이터 페칭이 가능합니다.',
    },
    {
      name: 'Axios',
      description: 'HTTP 클라이언트를 활용한 API 통신과 인터셉터를 이용한 요청/응답 처리가 가능합니다.',
    },
    {
      name: 'Vite',
      description: '빠른 개발 서버와 번들링을 위한 모던 빌드 툴 활용 경험이 있습니다.',
    },
    {
      name: 'Bootstrap',
      description: '반응형 UI 컴포넌트와 그리드 시스템을 활용한 빠른 프로토타이핑이 가능합니다.',
    },
    {
      name: 'TailwindCSS',
      description: '유틸리티 우선 CSS 프레임워크로 커스텀 디자인 시스템 구축 경험이 있습니다.',
    },
    {
      name: 'GSAP',
      description: '고급 웹 애니메이션과 인터랙티브 UI 효과 구현이 가능합니다.',
    },
    {
      name: 'Framer Motion',
      description: 'React 기반 애니메이션 라이브러리를 활용한 부드러운 페이지 전환 효과 구현이 가능합니다.',
    },
    {
      name: 'Recharts',
      description: 'React 기반 차트 라이브러리를 활용한 데이터 시각화 구현이 가능합니다.',
    },
    {
      name: 'Swiper',
      description: '터치 슬라이더와 캐러셀 컴포넌트 구현 경험이 있습니다.',
    },
    {
      name: 'TossPayments',
      description: '결제 시스템 연동과 전자상거래 기능 구현 경험이 있습니다.',
    },
  ],
  Backend: [
    {
      name: 'Node.js',
      description: 'Express 프레임워크를 활용한 RESTful API 서버 구축과 미들웨어 개발 경험이 있습니다.',
    },
    {
      name: 'Express',
      description: '라우팅, 미들웨어, 세션 관리를 포함한 웹 서버 개발이 가능합니다.',
    },
    {
      name: 'Socket.io',
      description: '실시간 양방향 통신을 위한 WebSocket 기반 채팅 시스템 구현 경험이 있습니다.',
    },
    {
      name: 'JWT',
      description: '토큰 기반 인증 시스템과 사용자 인가 로직 구현이 가능합니다.',
    },
    {
      name: 'bcrypt',
      description: '패스워드 암호화와 보안성 강화를 위한 해시 처리 경험이 있습니다.',
    },
    {
      name: 'Multer',
      description: '파일 업로드와 이미지 처리를 위한 미들웨어 활용이 가능합니다.',
    },
    {
      name: 'CORS',
      description: 'Cross-Origin 요청 처리와 보안 정책 설정 경험이 있습니다.',
    },
    {
      name: 'OpenAI API',
      description: 'AI 챗봇과 자연어 처리 기능을 활용한 서비스 개발 경험이 있습니다.',
    },
  ],
  Database: [
    {
      name: 'MongoDB',
      description: 'NoSQL 데이터베이스 설계와 Mongoose ODM을 활용한 스키마 모델링 경험이 있습니다.',
    },
    {
      name: 'Mongoose',
      description: 'MongoDB와의 연동을 위한 스키마 정의, 유효성 검증, 관계 설정이 가능합니다.',
    },
  ],
  ETC: [
    {
      name: 'GitHub',
      description: '버전 관리, 브랜치 전략, Pull Request를 통한 협업 개발 경험이 있습니다.',
    },
    {
      name: 'Vercel',
      description: 'React 애플리케이션의 자동 배포와 CI/CD 파이프라인 구축 경험이 있습니다.',
    },
    {
      name: 'Netlify',
      description: '정적 사이트 호스팅과 자동 배포 설정이 가능합니다.',
    },
    {
      name: 'ESLint',
      description: '코드 품질 관리와 일관된 코딩 스타일 유지를 위한 린팅 도구 활용이 가능합니다.',
    },
    {
      name: 'Prettier',
      description: '자동 코드 포맷팅을 통한 팀 단위 코드 스타일 통일 경험이 있습니다.',
    },
  ],
};

export const categories = Object.keys(skillsData);

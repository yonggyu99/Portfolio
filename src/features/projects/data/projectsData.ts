export interface Project {
  category: string;
  title: string;
  period: string;
  description: string;
  images: string[];
  githubUrl: string;
  notionPageId?: string;
  technologies: string[];
}

export const projectsData: Project[] = [
  {
    category: 'Team Projects',
    title: 'IT:PLACE',
    period: '2025.06.30~2025.08.08',
    description:
      'ItPlace는 사용자의 위치를 기반으로 주변 가맹점의 멤버십 혜택을 실시간으로 제공하는 지도 플랫폼입니다. 카카오맵 API와 AI 추천 시스템을 활용하여 개인 맞춤형 혜택을 제공하고, 복잡한 상태 관리와 최적화된 UX/UI를 통해 직관적인 사용자 경험을 제공합니다.',
    images: [
      '/projectpng/ITPLACE1.png',
      '/projectpng/ITPLACE2.png',
      '/projectpng/ITPLACE3.png',
      '/projectpng/ITPLACE4.png',
      '/projectpng/ITPLACE5.png',
      '/projectpng/ITPLACE6.png',
    ],
    githubUrl: 'https://github.com/yonggyu99/itplace-front',
    notionPageId: '26341649-166a-80ab-9138-c2c1839564a0',
    technologies: ['React', 'TypeScript', 'Spring Boot', 'MySQL', 'WebRTC'],
  },
  {
    category: 'Team Projects',
    title: 'UPlusPick',
    period: '2025.06.09~2025.06.27',
    description:
      'U+Pick은 LG U+ 고객들을 위한 맞춤형 통신 요금제 추천 및 결합 매칭 플랫폼입니다. AI 챗봇을 통한 개인별 요금제 상담, 타인과의 결합 그룹 자동 매칭, 멤버십 혜택 지도 등을 제공하는 종합적인 통신 서비스 플랫폼입니다.',
    images: [
      '/projectpng/UPlusPick1.png',
      '/projectpng/UPlusPick2.png',
      '/projectpng/UPlusPick3.png',
      '/projectpng/UPlusPick4.png',
      '/projectpng/UPlusPick5.png',
      '/projectpng/UPlusPick6.png',
      '/projectpng/UPlusPick7.png',
    ],
    githubUrl: 'https://github.com/yonggyu99/Pick_Front',
    notionPageId: '26241649-166a-8071-a020-e248a9e85d57',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Team Projects',
    title: 'GitPulse',
    period: '2025.05.07~2025.05.20',
    description:
      'GitPulse는 GitHub 활동을 시각적으로 분석하고 개발자 성과를 추적할 수 있는 웹 플랫폼입니다. GitHub OAuth를 통한 인증, 실시간 커밋 분석, 개발 챌린지 시스템 등을 제공하는 종합적인 개발자 대시보드입니다.',
    images: [
      '/projectpng/GitPulse1.png',
      '/projectpng/GitPulse2.png',
      '/projectpng/GitPulse3.png',
      '/projectpng/GitPulse4.png',
      '/projectpng/GitPulse5.png',
      '/projectpng/GitPulse6.png',
      '/projectpng/GitPulse7.png',
    ],
    githubUrl: 'https://github.com/yonggyu99/Gitpulse_distribute',
    notionPageId: '26241649-166a-8013-8453-d87c3e20bc4f',
    technologies: ['Vue.js', 'Node.js', 'Express', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Team Projects',
    title: 'ChillLog',
    period: '2025.03.13~2025.03.21',
    description:
      'ChillLog는 개인 블로그 플랫폼으로, 사용자가 게시글을 작성하고 공유할 수 있는 Velog 클론 프로젝트입니다. 7조 Pat&Mat 팀이 개발한 풀스택 웹 애플리케이션입니다.',
    images: [
      '/projectpng/Chillog1.png',
      '/projectpng/Chillog2.png',
      '/projectpng/Chillog3.png',
    ],
    githubUrl: 'https://github.com/yonggyu99/UrecaMiniProject_Front',
    notionPageId: '26041649-166a-8067-95aa-c5e75272eb4f',
    technologies: ['Vue.js', 'Node.js', 'Express', 'PostgreSQL', 'Redis'],
  },
];

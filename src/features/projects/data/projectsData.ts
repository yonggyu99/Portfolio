export interface Project {
  category: string;
  title: string;
  period: string;
  description: string;
  images: string[];
  githubUrl: string;
  technologies: string[];
}

export const projectsData: Project[] = [
  {
    category: "Team Projects",
    title: "IT:PLACE",
    period: "2025.07.28~2025.08.12",
    description: "IT 분야 취업을 준비하는 사람들을 위한 종합 플랫폼입니다. 면접 질문, 기술 스택 정보, 스터디 그룹 매칭 등 다양한 기능을 제공하여 취업 준비생들의 성공적인 취업을 돕습니다. React와 Spring Boot를 사용하여 개발했으며, 실시간 채팅과 화상 면접 기능도 포함되어 있습니다.",
    images: [
      "/images/projects/itplace1.png",
      "/images/projects/itplace2.png",
      "/images/projects/itplace3.png"
    ],
    githubUrl: "https://github.com/username/itplace",
    technologies: ["React", "TypeScript", "Spring Boot", "MySQL", "WebRTC"]
  },
  {
    category: "Personal Projects",
    title: "Portfolio Website",
    period: "2025.08.01~2025.08.15",
    description: "개인 포트폴리오 웹사이트입니다. React와 TypeScript를 활용하여 반응형으로 제작했으며, 다양한 애니메이션과 인터랙션을 통해 사용자 경험을 향상시켰습니다. Skills, Projects, About 등의 섹션으로 구성되어 있으며, 다크모드와 라이트모드를 지원합니다.",
    images: [
      "/images/projects/portfolio1.png",
      "/images/projects/portfolio2.png"
    ],
    githubUrl: "https://github.com/username/portfolio",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"]
  },
  {
    category: "Team Projects",
    title: "E-Commerce Platform",
    period: "2025.06.01~2025.07.20",
    description: "온라인 쇼핑몰 플랫폼입니다. 상품 관리, 주문 처리, 결제 시스템, 회원 관리 등의 핵심 기능을 구현했습니다. 관리자 페이지와 사용자 페이지를 분리하여 개발했으며, RESTful API 설계와 데이터베이스 최적화에 중점을 두었습니다.",
    images: [
      "/images/projects/ecommerce1.png",
      "/images/projects/ecommerce2.png",
      "/images/projects/ecommerce3.png",
      "/images/projects/ecommerce4.png"
    ],
    githubUrl: "https://github.com/username/ecommerce",
    technologies: ["Vue.js", "Node.js", "Express", "PostgreSQL", "Redis"]
  }
];
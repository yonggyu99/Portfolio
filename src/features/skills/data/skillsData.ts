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
      name: 'HTML5',
      description:
        '웹 표준을 준수하여 구조적이고 의미있는 마크업을 작성할 수 있습니다.',
    },
    {
      name: 'CSS3',
      description: '반응형 디자인과모던한 스타일링을 구현할 수 있습니다.',
    },
    {
      name: 'JavaScript',
      description:
        'ES6+ 문법을 활용하여동적인 웹 애플리케이션을 개발할 수 있습니다.',
    },
    {
      name: 'JavaScript',
      description:
        'ES6+ 문법을 활용하여동적인 웹 애플리케이션을 개발할 수 있습니다.',
    },
    {
      name: 'JavaScript',
      description:
        'ES6+ 문법을 활용하여동적인 웹 애플리케이션을 개발할 수 있습니다.',
    },
    {
      name: 'JavaScript',
      description:
        'ES6+ 문법을 활용하여동적인 웹 애플리케이션을 개발할 수 있습니다.',
    },
    
  ],
  Frontend: [
    {
      name: 'React',
      description:
        '컴포넌트 기반 개발과 상태 관리를 통해 효율적인 UI를 구현할 수 있습니다.',
    },
    {
      name: 'TypeScript',
      description:
        '타입 안정성을 보장하여 더 안정적인 코드를 작성할 수 있습니다.',
    },
  ],
  Backend: [
    {
      name: 'Node.js',
      description: '서버사이드 JavaScript로 백엔드 API를 개발할 수 있습니다.',
    },
  ],
  Database: [
    {
      name: 'MySQL',
      description: '관계형 데이터베이스 설계와 쿼리 최적화를 할 수 있습니다.',
    },
  ],
  Etc: [
    {
      name: 'Git',
      description: '버전 관리와 협업을 위한 Git을 능숙하게 사용할 수 있습니다.',
    },
  ],
};

export const categories = Object.keys(skillsData);

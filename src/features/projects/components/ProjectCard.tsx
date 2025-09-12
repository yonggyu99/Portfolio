import { useState } from 'react';
import { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
  isReversed?: boolean;
}

const ProjectCard = ({ project, isReversed = false }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const leftContent = (
    <div className="h-96 flex flex-col justify-between">
      <div>
        {/* 상단 정보들 - 왼쪽 정렬 */}
        <div className="text-left mb-4">
          {/* 카테고리 */}
          <p className="text-secondary text-lg mb-2">{project.category}</p>

          {/* 프로젝트 제목 */}
          <h3 className="text-primary text-3xl font-bold mb-2">
            {project.title}
          </h3>

          {/* 기간 */}
          <p className="text-line text-base mb-4">{project.period}</p>
        </div>

        {/* 설명 박스 - 독립적인 박스 */}
        <div className="border border-secondary rounded-md p-6 mb-4">
          <p className="text-primary text-base leading-relaxed text-left">
            {project.description}
          </p>
        </div>
      </div>

      {/* 버튼들 - 아래쪽 우측에 가로 배치 */}
      <div className="flex items-center justify-end gap-6">
        {/* GitHub 링크 */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 transition-all duration-300"
        >
          <svg
            className="w-8 h-8 text-secondary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        {/* 자세히 보기 버튼 */}
        <button
          className="px-4 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 text-base rounded"
          onClick={() => {
            // 모달 오픈 로직 (나중에 구현)
            console.log('자세히 보기 클릭:', project.title);
          }}
        >
          자세히 보기
        </button>
      </div>
    </div>
  );

  const rightContent = (
    <div className="relative h-96">
      {/* 이미지 컨테이너 */}
      <div className="w-full h-full border border-secondary rounded-md overflow-hidden bg-primary">
        {project.images.length > 0 && (
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} 이미지 ${currentImageIndex + 1}`}
            className="w-full h-full object-contain"
          />
        )}
      </div>

      {/* 좌우 화살표 */}
      {project.images.length > 1 && (
        <>
          {/* 왼쪽 화살표 */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-secondary hover:text-primary hover:bg-secondary rounded-full transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* 오른쪽 화살표 */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-secondary hover:text-primary hover:bg-secondary rounded-full transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* 이미지 인디케이터 */}
      {project.images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {project.images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex ? 'bg-secondary' : 'bg-line'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`flex gap-16 items-start ${isReversed ? 'flex-row-reverse' : ''}`}
    >
      {/* 왼쪽 콘텐츠 */}
      <div className="flex-1">{leftContent}</div>

      {/* 오른쪽 이미지 */}
      <div className="flex-1">{rightContent}</div>
    </div>
  );
};

export default ProjectCard;

import { useState } from 'react';
import {
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
  isReversed?: boolean;
  onDetailClick?: () => void;
}

const ProjectCard = ({
  project,
  isReversed = false,
  onDetailClick,
}: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

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
    <div className="h-auto lg:h-96 flex flex-col justify-between">
      <div>
        {/* 상단 정보들 - 왼쪽 정렬 */}
        <div className="text-left mb-4 md:mb-6">
          {/* 카테고리 */}
          <p className="text-secondary text-base md:text-lg mb-2">
            {project.category}
          </p>

          {/* 프로젝트 제목 */}
          <h3 className="text-primary text-2xl md:text-3xl font-bold mb-2">
            {project.title}
          </h3>

          {/* 기간 */}
          <p className="text-line text-sm md:text-base mb-4">
            {project.period}
          </p>
        </div>

        {/* 설명 박스 - 독립적인 박스 */}
        <div className="border border-secondary rounded-md p-4 md:p-6 mb-4 md:mb-6">
          <p className="text-primary text-sm md:text-base leading-relaxed text-left">
            {project.description}
          </p>
        </div>
      </div>

      {/* 버튼들 - 아래쪽 우측에 가로 배치 */}
      <div className="flex items-center justify-end gap-4 md:gap-6 mt-4 lg:mt-0">
        {/* GitHub 링크 */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 md:w-11 md:h-11 transition-all duration-300"
        >
          <FaGithub className="w-8 h-8 md:w-14 md:h-14 text-secondary hover:text-primary transition-colors duration-300" />
        </a>

        {/* 자세히 보기 버튼 */}
        <button
          className="px-3 py-2 md:px-4 md:py-2 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 text-sm md:text-base rounded"
          onClick={onDetailClick}
        >
          자세히 보기
        </button>
      </div>
    </div>
  );

  const rightContent = (
    <div className="relative h-64 md:h-80 lg:h-96">
      {/* 이미지 컨테이너 */}
      <div
        className="w-full h-full rounded-md overflow-hidden bg-primary cursor-pointer"
        onClick={() => setIsImageModalOpen(true)}
      >
        {project.images.length > 0 && (
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={`${project.title} 이미지 ${currentImageIndex + 1}`}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(event, info) => {
              const threshold = 50;
              if (info.offset.x > threshold && project.images.length > 1) {
                prevImage();
              } else if (info.offset.x < -threshold && project.images.length > 1) {
                nextImage();
              }
            }}
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </div>

      {/* 좌우 화살표 */}
      {project.images.length > 1 && (
        <>
          {/* 왼쪽 화살표 */}
          <button
            onClick={prevImage}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-secondary hover:text-primary hover:bg-secondary rounded-full transition-all duration-300"
          >
            <FaChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          {/* 오른쪽 화살표 */}
          <button
            onClick={nextImage}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-secondary hover:text-primary hover:bg-secondary rounded-full transition-all duration-300"
          >
            <FaChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </>
      )}

      {/* 이미지 인디케이터 */}
      {project.images.length > 1 && (
        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 md:gap-2">
          {project.images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                index === currentImageIndex ? 'bg-secondary' : 'bg-line'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <div
        className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${
          isReversed ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* 콘텐츠 - 모바일에서는 위에, 데스크톱에서는 왼쪽/오른쪽 */}
        <div className="flex-1 order-1">{leftContent}</div>

        {/* 이미지 - 모바일에서는 아래(마지막), 데스크톱에서는 왼쪽/오른쪽 */}
        <div className="flex-1 order-2">{rightContent}</div>
      </div>

      {/* 이미지 모달 */}
      {isImageModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsImageModalOpen(false)}
        >
          <motion.div
            className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* 큰 이미지 */}
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={`${project.title} 이미지 ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(event, info) => {
                const threshold = 50;
                if (info.offset.x > threshold && project.images.length > 1) {
                  prevImage();
                } else if (info.offset.x < -threshold && project.images.length > 1) {
                  nextImage();
                }
              }}
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* 좌우 네비게이션 (이미지가 여러 개일 때만) */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-300"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-300"
                >
                  <FaChevronRight className="w-6 h-6" />
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
                      index === currentImageIndex
                        ? 'bg-white'
                        : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;

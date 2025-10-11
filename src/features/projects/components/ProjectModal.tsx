import Modal from 'react-modal';
import { Project } from '../data/projectsData';
import NotionRenderer from '../../../components/common/NotionRenderer';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

// 접근성을 위해 앱 루트 요소 설정
if (typeof window !== 'undefined') {
  Modal.setAppElement('#root');
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      position: 'relative' as const,
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
      border: 'none',
      borderRadius: '8px',
      padding: '0',
      width: '90vw',
      height: '85vh',
      maxWidth: '70vw',
      backgroundColor: '#ffffff',
      overflow: 'hidden',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      {/* 헤더 */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold text-gray-800 ml-2">
            {project.title}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-all duration-200"
        >
          ✕
        </button>
      </div>

      {/* Notion 렌더링 영역 */}
      <div className="w-full h-[calc(100%-4rem)] overflow-auto bg-white p-6">
        {project.notionPageId ? (
          <NotionRenderer
            pageId={project.notionPageId}
            className="w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            노션 페이지를 준비 중입니다...
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal;

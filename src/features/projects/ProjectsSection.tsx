import { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { projectsData, Project } from './data/projectsData';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <div
      id="projects"
      className="w-full max-w-6xl px-8 min-h-screen flex flex-col"
    >
      {/* Section Title */}
      <div className="mb-28 text-left pt-24">
        <h2 className="text-primary text-4xl font-bold mb-4">
          <span className="text-secondary">03. </span>
          Projects
          <div className="inline-block ml-8 w-72 h-0.5 bg-line align-middle"></div>
        </h2>
      </div>

      {/* Projects List */}
      <div className="space-y-56">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isReversed={index % 2 === 1}
            onDetailClick={() => openModal(project)}
          />
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProjectsSection;
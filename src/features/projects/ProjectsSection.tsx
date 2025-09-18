import { useState } from 'react';
import { motion } from 'framer-motion';
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
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div
      id="projects"
      className="w-full max-w-6xl px-4 md:px-8 py-16 md:py-24 relative z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={sectionVariants}
    >
      {/* Section Title */}
      <motion.div
        className="mb-16 md:mb-28 text-left pt-16 md:pt-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h2 className="text-primary text-2xl md:text-4xl font-bold mb-4">
          <span className="text-secondary">03. </span>
          Projects
          <div className="hidden md:inline-block ml-4 md:ml-8 w-32 md:w-72 h-0.5 bg-line align-middle"></div>
        </h2>
        {/* 모바일용 하단 선 */}
        <div className="block md:hidden w-full h-0.5 bg-line mt-2"></div>
      </motion.div>

      {/* Projects List */}
      <div className="space-y-24 md:space-y-32 lg:space-y-56">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <ProjectCard
              project={project}
              isReversed={index % 2 === 1}
              onDetailClick={() => openModal(project)}
            />
          </motion.div>
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
    </motion.div>
  );
};

export default ProjectsSection;
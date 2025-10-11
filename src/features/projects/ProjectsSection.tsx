import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { projectsData, Project } from './data/projectsData';
import SectionTitle from '../../components/ui/SectionTitle';
import { sectionVariants } from '../../utils/animations';

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
        className="pt-16 md:pt-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <SectionTitle number="03" title="Projects" />
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

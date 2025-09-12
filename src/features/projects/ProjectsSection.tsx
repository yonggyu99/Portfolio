import ProjectCard from './components/ProjectCard';
import { projectsData } from './data/projectsData';

const ProjectsSection = () => {
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
      <div className="space-y-32">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../features/hero/HeroSection';
import AboutSection from '../features/about/AboutSection';
import SkillsSection from '../features/skills/SkillsSection';
import ProjectsSection from '../features/projects/ProjectsSection';

const Main = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </MainLayout>
  );
};

export default Main;

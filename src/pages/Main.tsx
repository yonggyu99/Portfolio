import MainLayout from '../layouts/MainLayout';
import HeroSection from '../features/hero/HeroSection';
import AboutSection from '../features/about/AboutSection';
import SkillsSection from '../features/skills/SkillsSection';
import ProjectsSection from '../features/projects/ProjectsSection';
import ContactSection from '../features/contact/ContactSection';

const Main = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Main;

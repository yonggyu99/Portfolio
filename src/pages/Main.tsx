import MainLayout from '../layouts/MainLayout';
import HeroSection from '../features/hero/HeroSection';
import AboutSection from '../features/about/AboutSection';
import SkillsSection from '../features/skills/SkillsSection';

const Main = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </MainLayout>
  );
};

export default Main;

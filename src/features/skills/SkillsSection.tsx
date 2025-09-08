import { useState } from 'react';
import SkillCard from './components/SkillCard';
import { skillsData, categories } from './data/skillsData';

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Language');

  const handleCategoryClick = (category: string) => {
    const currentScrollY = window.scrollY;
    setSelectedCategory(category);
    setTimeout(() => window.scrollTo(0, currentScrollY), 0);
  };

  return (
    <div
      id="skills"
      className="w-full max-w-6xl px-8 min-h-screen flex flex-col"
    >
      {/* Section Title */}
      <div className="mb-28 text-left pt-24">
        <h2 className="text-primary text-4xl font-bold mb-4">
          <span className="text-secondary">02. </span>
          Skills
          <div className="inline-block ml-8 w-72 h-0.5 bg-line align-middle"></div>
        </h2>
      </div>

      <div className="flex gap-24">
        {/* Left Category Tabs */}
        <div className="flex">
          <div className="relative flex flex-col space-y-6 min-w-[200px]">
            {/* Background line - only spans the height of the buttons */}
            <div
              className="absolute left-0 w-0.5 bg-line"
              style={{
                top: '0px',
                height: `${categories.length * 60 + (categories.length - 1) * 24}px`,
              }}
            ></div>

            {categories.map((category) => (
              <div key={category} className="relative">
                {/* Highlight bar for selected item */}
                {selectedCategory === category && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary transition-all duration-300"></div>
                )}

                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`text-left text-xl px-6 py-3 ml-8 transition-all duration-300 ${
                    selectedCategory === category
                      ? 'text-secondary'
                      : 'text-line hover:text-secondary'
                  }`}
                >
                  {category}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Skills Grid */}
        <div className="flex-1 space-y-8 min-h-[600px]">
          {skillsData[selectedCategory]?.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

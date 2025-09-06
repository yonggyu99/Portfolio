import { useState } from 'react';
import SkillCard from './components/SkillCard';
import { skillsData, categories } from './data/skillsData';

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Language');

  return (
    <div
      id="skills"
      className="w-full max-w-6xl px-8 min-h-screen flex flex-col justify-center"
    >
      {/* Section Title */}
      <div className="mb-28 text-left">
        <h2 className="text-primary text-4xl font-bold mb-4">
          <span className="text-secondary">02. </span>
          Skills
          <div className="inline-block ml-8 w-72 h-0.5 bg-line align-middle"></div>
        </h2>
      </div>

      <div className="flex gap-24">
        {/* Left Category Tabs */}
        <div className="flex">
          <div className="w-0.5 bg-line mr-8 flex-shrink-0 self-stretch"></div>
          
          <div className="flex flex-col space-y-6 min-w-[200px]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-left text-xl px-6 py-3 transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-secondary bg-secondary bg-opacity-10'
                    : 'text-line hover:text-secondary hover:bg-secondary hover:bg-opacity-5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Right Skills Grid */}
        <div className="flex-1 space-y-8">
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

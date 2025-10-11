import { useState } from 'react';
import { motion } from 'framer-motion';
import SkillCard from './components/SkillCard';
import { skillsData, categories } from './data/skillsData';
import SectionTitle from '../../components/ui/SectionTitle';
import {
  sectionVariants,
  skillContainerVariants,
  listItemVariants,
} from '../../utils/animations';

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Language');

  return (
    <motion.div
      id="skills"
      className="w-full max-w-6xl px-4 md:px-8 min-h-screen flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Section Title */}
      <motion.div className="pt-16 md:pt-24" variants={listItemVariants}>
        <SectionTitle number="02" title="Skills" />
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row gap-8 lg:gap-24"
        variants={skillContainerVariants}
      >
        {/* Category Tabs - Mobile: Horizontal, Desktop: Vertical */}
        <motion.div className="flex lg:block" variants={listItemVariants}>
          {/* Mobile Horizontal Layout */}
          <div className="lg:hidden w-full mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm md:text-base transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-secondary text-primary'
                      : 'bg-slate-800 text-line hover:text-secondary hover:bg-slate-700'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Desktop Vertical Layout */}
          <div className="hidden lg:block relative flex flex-col space-y-6 min-w-[200px]">
            {/* Background line - only spans the height of the buttons */}
            <div
              className="absolute left-0 w-0.5 bg-line"
              style={{
                top: '0px',
                height: `${categories.length * 60 + (categories.length - 1) * 24}px`,
              }}
            ></div>

            {categories.map((category, index) => (
              <motion.div
                key={category}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: false }}
              >
                {/* Highlight bar for selected item */}
                {selectedCategory === category && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"
                    layoutId="highlight"
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                )}

                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`text-left text-xl px-6 py-3 ml-2 transition-all duration-300 ${
                    selectedCategory === category
                      ? 'text-secondary'
                      : 'text-line hover:text-secondary'
                  }`}
                >
                  {category}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="flex-1 space-y-6 md:space-y-8 lg:space-y-12 min-h-[400px] md:min-h-[600px]"
          variants={listItemVariants}
        >
          {skillsData[selectedCategory]?.map((skill, index) => (
            <motion.div
              key={`${selectedCategory}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <SkillCard
                name={skill.name}
                description={skill.description}
                icon={skill.icon}
                color={skill.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;

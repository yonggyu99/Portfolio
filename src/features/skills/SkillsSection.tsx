import { useState } from 'react';
import { motion } from 'framer-motion';
import SkillCard from './components/SkillCard';
import { skillsData, categories } from './data/skillsData';

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Language');

  const handleCategoryClick = (category: string) => {
    const currentScrollY = window.scrollY;
    setSelectedCategory(category);
    setTimeout(() => window.scrollTo(0, currentScrollY), 0);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      id="skills"
      className="w-full max-w-6xl px-8 min-h-screen flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Section Title */}
      <motion.div className="mb-28 text-left pt-24" variants={itemVariants}>
        <h2 className="text-primary text-4xl font-bold mb-4">
          <span className="text-secondary">02. </span>
          Skills
          <div className="inline-block ml-8 w-72 h-0.5 bg-line align-middle"></div>
        </h2>
      </motion.div>

      <motion.div className="flex gap-24" variants={containerVariants}>
        {/* Left Category Tabs */}
        <motion.div className="flex" variants={itemVariants}>
          <div className="relative flex flex-col space-y-6 min-w-[200px]">
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
                  onClick={() => handleCategoryClick(category)}
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

        {/* Right Skills Grid */}
        <motion.div
          className="flex-1 space-y-12 min-h-[600px]"
          variants={itemVariants}
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

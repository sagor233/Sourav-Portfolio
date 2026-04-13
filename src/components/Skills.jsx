import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillsData } from '../assets/data/skills';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-card">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white dark:bg-dark-bg rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative group"
                    >
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-dark-card dark:to-dark-hover p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <div 
                            className="p-3 rounded-lg"
                            style={{ backgroundColor: `${skill.color}20` }}
                          >
                            <IconComponent 
                              size={32} 
                              style={{ color: skill.color }}
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 dark:text-white">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {skill.level}%
                            </p>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="relative h-2 bg-gray-200 dark:bg-dark-bg rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className="absolute top-0 left-0 h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
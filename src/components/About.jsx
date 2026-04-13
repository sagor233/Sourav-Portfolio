import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-bg">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white dark:bg-dark-card p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Full Stack Developer with a Passion for Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  I'm a Computer Science & Engineering student at Northern University Bangladesh, 
                  currently undergoing intensive training at CodersTrust Bangladesh. My journey in 
                  web development started with a curiosity about how things work on the internet, 
                  and it has evolved into a passion for creating impactful digital solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Specializing in the MERN stack, I build responsive, user-friendly applications 
                  that solve real-world problems. Beyond coding, I'm deeply committed to community 
                  service, having organized blood donation drives and volunteered in various social 
                  initiatives.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  When I'm not coding, you'll find me participating in hackathons, exploring new 
                  technologies, or contributing to open-source projects. I believe in continuous 
                  learning and pushing the boundaries of what's possible with code.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '10+', label: 'Projects Completed' },
                { number: '5+', label: 'Technologies Mastered' },
                { number: '2nd', label: 'Programming Contest' },
                { number: 'Top 10', label: 'Hackathon Finalist' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-dark-card dark:to-dark-hover p-6 rounded-xl text-center shadow-lg"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-2xl text-white shadow-xl">
              <h4 className="text-xl font-bold mb-4">Education & Training</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">B.Sc. in Computer Science & Engineering</p>
                    <p className="text-sm opacity-90">North Western University.Khulna Bangladesh • 2022 - 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">Full Stack Web Development</p>
                    <p className="text-sm opacity-90">CodersTrust Bangladesh • July 2025 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Code, Server, Package, GitBranch, Boxes, Container, Braces, FileCode } from 'lucide-react';

const TechStack = () => {
  const skills = {
    languages: [
      { name: 'JavaScript', icon: Braces, color: '#A8D4DC' },
      { name: 'Python', icon: FileCode, color: '#959BB9' },
      { name: 'Java', icon: Code, color: '#73617B' },
      { name: 'SQL', icon: Database, color: '#A8D4DC' }
    ],
    frameworks: [
      { name: 'React', icon: Package, color: '#73617B' },
      { name: 'Next.js', icon: Code, color: '#959BB9' },
      { name: 'Django', icon: Server, color: '#A8D4DC' },
      { name: 'Flask', icon: Server, color: '#73617B' }
    ],
    cloud: [
      { name: 'AWS', icon: Cloud, color: '#A8D4DC' },
      { name: 'Azure', icon: Cloud, color: '#959BB9' },
      { name: 'Docker', icon: Container, color: '#73617B' },
      { name: 'Kubernetes', icon: Boxes, color: '#A8D4DC' },
      { name: 'Jenkins', icon: GitBranch, color: '#959BB9' }
    ],
    databases: [
      { name: 'MySQL', icon: Database, color: '#73617B' },
      { name: 'MongoDB', icon: Database, color: '#A8D4DC' }
    ]
  };

  const SkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" 
           style={{ background: `linear-gradient(135deg, ${skill.color}40, transparent)` }} />
      
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="p-3 rounded-lg bg-background border border-border group-hover:border-[#73617B] transition-colors">
          <skill.icon className="w-8 h-8" style={{ color: skill.color }} />
        </div>
        <span className="font-semibold text-center">{skill.name}</span>
      </div>
    </motion.div>
  );

  return (
    <section id="resume" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  transition={{ staggerChildren: 0.08 }}
  className="space-y-12"
>

          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Tech Stack</h2>
            <p className="text-muted-foreground text-lg">Technologies I work with</p>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.languages.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Frameworks</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.frameworks.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Cloud & DevOps</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {skills.cloud.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Databases</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.databases.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Blending art and technology, I enjoy building digital experiences where creative 
              thinking meets solid engineering. My work focuses on the intersection of Cloud and AI, 
              with an emphasis on projects that are practical, scalable, and thoughtfully designed.
            </p>
            <p>
              I approach technology as both a problem-solving tool and a creative medium—building 
              systems that address real needs while leaving space for curiosity, exploration, and 
              new ideas.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-[#73617B] pl-6 py-2">
                <h4 className="text-xl font-semibold">GLA University, Mathura</h4>
                <p className="text-muted-foreground">B.Tech Computer Science (Cloud Computing & Virtualization Engineering)</p>
                <p className="text-sm text-muted-foreground">2023 - 2027 | CGPA: 7.3</p>
              </div>
              <div className="border-l-4 border-[#959BB9] pl-6 py-2">
                <h4 className="text-xl font-semibold">Convent of Jesus and Mary School, New Delhi</h4>
                <p className="text-sm text-muted-foreground">Class 10: 87% | Class 12: 82%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
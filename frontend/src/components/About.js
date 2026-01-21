import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <motion.div variants={fadeUp}>
            <SectionHeading>About Me</SectionHeading>
          </motion.div>

          <motion.div
            variants={container}
            className="space-y-4 text-lg leading-relaxed text-neutral-800 dark:text-muted-foreground"
          >
            <motion.p variants={fadeUp}>
              Blending art and technology, I enjoy building digital experiences where creative
              thinking meets solid engineering. My work focuses on the intersection of Cloud and AI,
              with an emphasis on projects that are practical, scalable, and thoughtfully designed.
            </motion.p>

            <motion.p variants={fadeUp}>
              I approach technology as both a problem-solving tool and a creative medium—building
              systems that address real needs while leaving space for curiosity, exploration, and
              new ideas.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeUp} className="pt-6 space-y-6">
            <motion.h3
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="text-2xl font-semibold flex items-center gap-3 text-neutral-900 dark:text-foreground"
            >
              <span className="w-2 h-2 rounded-full bg-[#73617B]" />
              Education
            </motion.h3>

            <div className="space-y-4">
              <div className="border-l-4 border-[#73617B] pl-6 py-2">
                <h4 className="text-xl font-semibold text-neutral-900 dark:text-foreground">
                  GLA University, Mathura
                </h4>
                <p className="text-neutral-700 dark:text-muted-foreground">
                  B.Tech Computer Science (Cloud Computing & Virtualization Engineering)
                </p>
                <p className="text-sm text-neutral-600 dark:text-muted-foreground">
                  2023 – 2027
                </p>
              </div>

              <div className="border-l-4 border-[#959BB9] pl-6 py-2">
                <h4 className="text-xl font-semibold">
                  Convent of Jesus and Mary School, New Delhi
                </h4>
                <p className="text-sm text-muted-foreground">
                  Class 10: 87% | Class 12: 72%
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

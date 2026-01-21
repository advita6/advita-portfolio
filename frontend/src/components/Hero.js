import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeSide = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
});

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-24 pb-40"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeSide("left")}
            initial="hidden"
            animate="show"
            className="space-y-8 md:pl-12"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-2"
            >
              {/* NAME */}
              <motion.h1
                variants={fadeUp}
                className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight transition-colors duration-300 hover:text-primary"
              >
                ADVITA
              </motion.h1>

              <motion.h1
                variants={fadeUp}
                className="
                  text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight
                  text-neutral-700 dark:text-muted-foreground
                  transition-colors duration-300
                  hover:text-neutral-900
                  dark:hover:text-primary
                "
              >
                SINGH
              </motion.h1>

              {/* TAGLINE */}
              <motion.p
                variants={fadeUp}
                className="text-xl md:text-2xl font-light text-muted-foreground max-w-xl pt-4"
              >
                Bridging the gap between human expression and digital power.
              </motion.p>

              {/* COURSE INFO */}
              <motion.div variants={fadeUp} className="pt-4 space-y-1">
                <p className="text-lg font-medium">
                  B.Tech Computer Science & Engineering
                </p>
                <p className="text-muted-foreground">
                  Cloud Computing & Virtualization Engineering
                </p>
                <p className="text-muted-foreground">
                  GLA University, Mathura (2023–2027)
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeSide("right")}
            initial="hidden"
            animate="show"
            className="relative flex justify-center items-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-md aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#A8D4DC] via-[#959BB9] to-[#73617B] rounded-full blur-3xl opacity-30" />

              <img
                src="https://customer-assets.emergentagent.com/job_8f34bef6-cbb5-4a52-a0ab-9cd22bf0a366/artifacts/0h055p6e_WhatsApp%20Image%202026-01-18%20at%2012.49.24.jpeg"
                alt="Advita Singh"
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

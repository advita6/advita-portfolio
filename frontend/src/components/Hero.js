import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                ADVITA
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                SINGH
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Mixing art and technology to empower the world.
            </p>

            <div className="pt-4">
              <p className="text-lg font-medium">3rd Year B.Tech CSE</p>
              <p className="text-muted-foreground">Cloud Computing & Virtualization Engineering</p>
              <p className="text-muted-foreground">GLA University, Mathura (2023–2027)</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A8D4DC] via-[#959BB9] to-[#73617B] rounded-full blur-3xl opacity-30" />
              <img
                src="https://customer-assets.emergentagent.com/job_8f34bef6-cbb5-4a52-a0ab-9cd22bf0a366/artifacts/0h055p6e_WhatsApp%20Image%202026-01-18%20at%2012.49.24.jpeg"
                alt="Advita Singh"
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
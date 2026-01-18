import { motion } from "framer-motion";

const SectionHeading = ({ children }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="
        relative inline-block
        text-4xl md:text-5xl font-bold
        cursor-default
        tracking-tight
        transition-all duration-300
      "
    >
      <span
        className="
          bg-gradient-to-r from-[#73617B] via-[#959BB9] to-[#A8D4DC]
          bg-[length:200%_200%]
          bg-clip-text text-transparent
          animate-gradient-x
        "
      >
        {children}
      </span>

      {/* underline */}
      <span
        className="
          absolute left-0 -bottom-2
          h-[3px] w-0
          bg-gradient-to-r from-[#73617B] to-[#A8D4DC]
          transition-all duration-500
          group-hover:w-full
        "
      />
    </motion.h2>
  );
};

export default SectionHeading;

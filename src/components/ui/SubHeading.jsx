import { motion } from "framer-motion";

const SubHeading = ({ children }) => {
  return (
    <motion.h3
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ x: 6 }}
      className="relative text-2xl font-semibold cursor-default"
    >
      <span className="relative z-10">{children}</span>

      {/* underline */}
      <span
        className="
          absolute left-0 -bottom-1 w-full h-[2px]
          bg-gradient-to-r from-[#73617B] to-[#A8D4DC]
          scale-x-0 origin-left
          transition-transform duration-300
          group-hover:scale-x-100
        "
      />
    </motion.h3>
  );
};

export default SubHeading;

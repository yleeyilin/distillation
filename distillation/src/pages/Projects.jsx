import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-center">
          projects coming soon...
        </div>

        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center w-full max-w-4xl px-6"
          >
            <div className="relative w-full max-w-lg h-[320px] md:h-[420px] flex items-center justify-center">
            {/* Floating orbs and shapes */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateZ: [0, 5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-linear-to-r from-cyan-800 to-cyan-400 border border-accent-cyan/20 backdrop-blur-sm shadow-xl shadow-accent-cyan/10 opacity-40"
              style={{ left: "15%", top: "20%" }}
            />
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotateZ: [0, -3, 0],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full bg-linear-to-r from-pink-700 to-purple-400 border border-accent-purple/20 shadow-lg shadow-accent-purple/10 opacity-60"
              style={{ right: "20%", top: "15%" }}
            />
            
            <motion.div
              animate={{ 
                y: [0, -12, 0],
                x: [0, 8, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute w-40 h-40 md:w-52 md:h-52 rounded-3xl bg-linear-to-r to-cyan-500 from-purple-400 border border-accent-cyan/15 backdrop-blur-sm shadow-2xl opacity-40"
              style={{ left: "30%", top: "35%" }}
            />
            
            <motion.div
              animate={{ 
                y: [0, 18, 0],
                rotateZ: [0, -8, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className=" absolute w-16 h-16 md:w-20 md:h-20 rounded-xl bg-linear-to-r from-pink-300 to-cyan-400 border border-accent-pink/20 shadow-lg opacity-40"
              style={{ right: "25%", bottom: "25%" }}
            />
          </div>
        </motion.div>
    </section>
  );
};

export default Projects;

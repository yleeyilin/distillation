import { motion } from "framer-motion";

export default function PageTransition({ children, direction }) {
  const variants = {
    forward: {
      initial: { y: 300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -300, opacity: 0 },
    },
    backward: {
      initial: { y: -300, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 300, opacity: 0 },
    },
  };

  const currentVariant = variants[direction] || variants.forward;

  return (
    <motion.div
      initial={currentVariant.initial}
      animate={currentVariant.animate}
      exit={currentVariant.exit}
      transition={{ 
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
     }}
    >
      {children}
    </motion.div>
  );
}

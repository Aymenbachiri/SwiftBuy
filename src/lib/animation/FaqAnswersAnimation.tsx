"use client";
import { motion } from "framer-motion";

export default function FaqAnswersAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }} // Initial state for the answer
      animate={{ opacity: 1, y: 0 }} // Animate to this state when opened
      exit={{ opacity: 0, y: 20 }} // Animate to this state when closed
      transition={{ duration: 0.3 }} // Animation duration
    >
      {children}
    </motion.p>
  );
}

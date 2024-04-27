"use client";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const FadeFromSide = ({ children, direction = "left", duration = 1 }) => {
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      x: direction === "left" ? "-190px" : "50px",
    },
  };

  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        >
          {children}
        </motion.div>
      )}
    </VisibilitySensor>
  );
};

export default FadeFromSide;

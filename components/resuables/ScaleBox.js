import React, { useMemo, useContext } from "react";
import { motion } from "framer-motion";

import { IntersectionContext } from "./IntersectionObserver";
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
} from "./AnimateFunctions";

export const ScaleBox = ({
  children,
  delayOrder, // order of appearance
  duration = 0.4,
  easing = [0.42, 0, 0.58, 1], // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
  action,
}) => {
  const { inView } = useContext(IntersectionContext);
  const transition = useMemo(
    () => ({
      duration,
      delay: delayOrder / 5,
      ease: easing,
    }),
    [duration, delayOrder, easing]
  );

  let variants =
    action === "fadeInUp"
      ? fadeInUp()
      : action === "fadeInDown"
      ? fadeInDown()
      : action === "fadeInLeft"
      ? fadeInLeft()
      : action === "fadeInRight"
      ? fadeInRight()
      : {
          hidden: {
            scale: 0,
            opacity: 0,
            transition,
          },
          show: {
            scale: 1,
            opacity: 1,
            transition,
          },
        };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

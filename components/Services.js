import React from "react";
import { motion } from "framer-motion";

import { IntersectionObserver } from "./resuables/IntersectionObserver";
import { ScaleBox } from "./resuables/ScaleBox";

import { stagger } from "./resuables/AnimateFunctions.js";

const Services = () => {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      className="services"
      id="services"
    >
      <div className="container">
        <div className="section-heading">
          <h1>Services</h1>
          <h6>What i can do for you</h6>
        </div>
        <motion.div variants={stagger} className="my-skills">
          <IntersectionObserver>
            <ScaleBox>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="skill"
              >
                <div className="icon-container">
                  <i className="fas fa-layer-group"></i>
                </div>
                <h1>Web Development</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores quidem soluta provident sequi fugit aliquid
                  voluptate animi suscipit earum similique.
                </p>
              </motion.div>
            </ScaleBox>
          </IntersectionObserver>
          <IntersectionObserver>
            <ScaleBox>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="skill"
              >
                <div className="icon-container">
                  <i className="fas fa-code"></i>
                </div>
                <h1>Android Applications</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores quidem soluta provident sequi fugit aliquid
                  voluptate animi suscipit earum similique.
                </p>
              </motion.div>
            </ScaleBox>
          </IntersectionObserver>
          <IntersectionObserver>
            <ScaleBox>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="skill"
              >
                <div className="icon-container">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h1>iOS Applications</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores quidem soluta provident sequi fugit aliquid
                  voluptate animi suscipit earum similique.
                </p>
              </motion.div>
            </ScaleBox>
          </IntersectionObserver>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;

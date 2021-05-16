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
          <h1>Process</h1>
          <h6>What methodology do i follow</h6>
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
                  <i className="">
                    <img src="/images/designer.svg" />
                  </i>
                </div>
                <h1>Designer</h1>
                <p>I will design and create an interactive prototype.</p>
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
                  <i className="">
                    <img src="/images/tester.svg" />
                  </i>
                </div>
                <h1>Tester</h1>
                <p>
                  I will analyze the prototype with real users in order to
                  optimize and validate the solution.
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
                  <i className="">
                    <img src="/images/deployer.svg" />
                  </i>
                </div>
                <h1>Deployer</h1>
                <p>
                  Once the prototype has been validated. We can develop, launch
                  the product.
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

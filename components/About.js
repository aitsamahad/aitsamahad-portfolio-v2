import React, { useState } from "react";
import Social from "./Social.js";
import { motion } from "framer-motion";
import { IntersectionObserver } from "./resuables/IntersectionObserver";
import { ScaleBox } from "./resuables/ScaleBox.js";

import {
  fadeInUp,
  stagger,
  fadeInLeft,
  fadeInRight,
} from "./resuables/AnimateFunctions.js";

// aniimate: defines animation
// initial: defines initial state or animation starting point
// exit: defines animation when component exits

const About = () => {
  return (
    <div className="about_design">
      <motion.div
        className="about"
        id="about"
        initial="initial"
        animate="animate"
      >
        <div className="container">
          {/* <motion.div variants={stagger}>
          <motion.div variants={fadeInUp} className="profile-img">
            <img src="/images/aitsam.jpg" alt="Aitsam Ahad" />
          </motion.div>
        </motion.div> */}
          <IntersectionObserver>
            <ScaleBox action="fadeInLeft">
              <div className="profile-img">
                <img src="/images/aitsam.jpg" alt="Aitsam Ahad" />
              </div>
            </ScaleBox>
          </IntersectionObserver>
          <div className="about-details">
            <div className="about-heading">
              <h1>About</h1>
              <h6>Myself</h6>
            </div>
            <IntersectionObserver>
              <ScaleBox action="fadeInRight">
                <p>
                  Hello! I'm Aitsam, a software engineer based in Islamabad, Web
                  Developer with 4 years of experience in designing and
                  developing user interfaces, testing, debugging, and eCommerce
                  technologies. Proven ability in optimizing web functionality
                  that improve data retrieval and workflow efficiencies using
                  modern backends. <br />
                  <br /> Currently i am in last semester of my bachelors from
                  Virtual University of Pakistan, I am also working as a full
                  stack engineer at iDevelopStudio where I work on a wide
                  variety of interesting and meaningful projects on a daily
                  basis.
                </p>
                <br />
                <p>
                  Here are a few technologies I've been working with recently:
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5 & (S)CSS3</li>
                  <li>ReactJS</li>
                  <li>React Native</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>WebSockets</li>
                  <li>SQL/NOSQL</li>
                  <li>Mongo/MySQL</li>
                  <li>Sequelize/Mongoose</li>
                  <li>PHP</li>
                  <li>SLIM for PHP</li>
                  <li>RESTful API(s)</li>
                </p>
                <Social />
              </ScaleBox>
            </IntersectionObserver>
          </div>
        </div>
        <IntersectionObserver>
          <div className="about_btns">
            <ScaleBox action="fadeInDown">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="get-in-touch"
              >
                <a href="mailto:aitsama.ahad@gmail.com">Get In Touch</a>
              </motion.div>
              <ScaleBox action="fadeInUp">
                <a href="#" className="custom_btn btn_primary resume">
                  Download Resume!
                </a>
              </ScaleBox>
            </ScaleBox>
          </div>
        </IntersectionObserver>
      </motion.div>
    </div>
  );
};

export default About;

import React from "react";
import styles from "./hero.module.css";

import HeroLottie from "./lottie/HeroLottie";
import Wave from "./Wave";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroGroup}>
        <div className={styles.heroLeftRightSection}>
          <div className={styles.heroGroupLeft}>
            <h1>Hi there, Welcome to my Scraps!</h1>
            <h2>A place where i share all of my ideas.</h2>
            <p>
              Want to Hire me? Check my profile <br />{" "}
              <a href="https://aitsamahad.dev">here! &rarr;</a>
            </p>
          </div>
          <div className={styles.heroGroupRight}>
            <HeroLottie />
          </div>
        </div>
        <div className={styles.skills}>
          <img
            className={styles.skill}
            src="/images/logo-react.png"
            alt="ReactJs skill"
            width="50"
          />
          <img
            className={styles.skill}
            src="/images/expo.png"
            alt="react native expo skill"
            width="50"
          />
          <img
            className={styles.skill}
            src="/images/node-logo.png"
            alt="NodeJS skill"
            width="50"
          />
          <img
            className={styles.skill}
            src="/images/react-native.svg"
            alt="React Native Skills"
            width="50"
          />
          <img
            className={styles.skill}
            src="/images/typescript.png"
            alt="TypeScript Skill"
            width="50"
          />
          <img
            className={styles.skill}
            src="/images/mongodb-logo.png"
            alt="MongoDB skill"
            width="50"
          />
        </div>
        <div className={styles.wave}>
          <Wave color="#f0f3f5" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

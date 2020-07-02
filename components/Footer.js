import React from "react";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <footer className="copyright">
      <div className="up" id="up" onClick={() => scroll.scrollToTop()}>
        <i className="fas fa-chevron-up"></i>
      </div>
      <p>
        &copy; 2020 - Designed with{" "}
        <span style={{ color: "var(--pastel-accent-border)" }}>&hearts;</span>{" "}
        By Aitsam Ahad | MERN Full Stack - Cross Platform Application Developer.
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";
import styles from "./footer.module.css";

const Footer = ({ home }) => {
  return (
    <div
      className={`${
        home ? styles.footer_container : styles.footer_container_post
      }`}
    >
      <div className={styles.footer}>
        <p>
          With a commitment to quality content for the design and developers
          community.
        </p>
        <p>Developed & Founded by Aitsam Ahad. 2020.</p>
        <p>
          Developed on{" "}
          <a href="https://nextjs.org" rel="noopener norefer nofollow">
            NextJS
          </a>{" "}
          React Framework.
        </p>
        <p>
          Scraps is proudly running on{" "}
          <a href="https://www.vercel.com" rel="noopener norefer nofollow">
            Vercel
          </a>
          .
        </p>
        <div className={styles.footer_links}>
          <span>Hire Me!</span>
          <span>Home</span>
          <span>About</span>
          <span>Sitemap</span>
          <span>Resources</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

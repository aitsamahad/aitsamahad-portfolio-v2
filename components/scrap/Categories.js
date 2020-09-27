import React from "react";
import styles from "./categories.module.css";

const Categories = () => {
  return (
    <div className={styles.categories_container}>
      <div className={styles.categories}>
        <span className={styles.category}>WordPress</span>
        <span className={styles.category}>ReactJS</span>
        <span className={styles.category}>PHP</span>
        <span className={styles.category}>TypeScript</span>
        <span className={styles.category}>Slim</span>
        <span className={styles.category}>Angular</span>
        <span className={styles.category}>JavaScript</span>
        <span className={styles.category}>HTML</span>
        <span className={styles.category}>CSS</span>
        <span className={styles.category}>MongoDB</span>
        <span className={styles.category}>Sequlize</span>
        <span className={styles.category}>RestAPI</span>
        <span className={styles.category}>MYSQL</span>
        <span className={styles.category}>GraphQL</span>
        <span className={styles.category}>Java</span>
        <span className={styles.category}>GO</span>
        <span className={styles.category}>Flutter</span>
        <span className={styles.category}>Kotlin</span>
      </div>
      <form action="" className={styles.categoryForm}>
        <input
          className={(styles.input, styles.search_input)}
          inputMode="search"
          type="search"
          name="q"
          id="js-search-input"
          autoComplete="off"
          placeholder="Search articles..."
          aria-label="Search articles"
        ></input>
      </form>
    </div>
  );
};

export default Categories;

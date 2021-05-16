import React from "react";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img_container}>
        <div className={styles.card_img}>
          <img src="https://p97.f4.n0.cdn.getcloudapp.com/items/12uNYgEZ/card.png?v=a848c246dc9f1936d25c7cb9ff179e49" />
        </div>
        <h1 className={styles.card_title}>
          Make a Website using React in 30 mins
        </h1>
      </div>
      <div className={styles.author_section}>
        <span className={styles.author}>By Aitsam Ahad</span>
        <span className={styles.date}>17 July 2020</span>
      </div>
      <p className={styles.summary}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
        repellat, magnam quae voluptates deleniti accusantium sint corporis et
        maiores recusandae optio consectetur obcaecati perspiciatis at
        aspernatur nihil libero, quod autem.
      </p>
      <div className={styles.tag_list}>
        <span className={styles.tag}>#NodeJS </span>
        <span className={styles.tag}>#ReactJS </span>
        <span className={styles.tag}>#MongoDB </span>
      </div>
      <span className={styles.readmore}>&rarr;</span>
    </div>
  );
};

export default Card;

import React from "react";
import styles from "./newsletter.module.css";

const NewsLetter = () => {
  return (
    <div className={styles.newsletter_container}>
      <div className={styles.newsLetter}>
        <h1>Email Newsletter</h1>
        <p>
          Every two weeks I send out a newsletter containing lots of interesting
          stuff for the modern JS developer. Expect quick tips & tricks,
          interesting tutorials, opinions and packages. Because I work with
          ReactJS every day there is an emphasis on that framework.
        </p>
        <form action="" className={styles.home_form}>
          <input
            id="website_url_input"
            className={styles.home_form_field}
            placeholder="Enter your Email address…"
            name="website_url"
          />
          <button
            id="start_now_btn"
            type="submit"
            className={styles.home_form_item}
          >
            <i className="icon icon-google"></i> Subscribe
          </button>
        </form>
        <p>
          Rest assured that I will only use your email address to send you the
          newsletter and will not use it for any other purposes.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;

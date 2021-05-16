import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

const Header = ({ home }) => {
  return (
    <div className={styles.header}>
      <div className={`${home ? styles.headerGroup : styles.headerGroupPost}`}>
        <Link href="/scraps">
          <a>
            <img
              className={styles.logo}
              src="/images/by-aitsam.png"
              alt="by Aitsam Ahad"
            />
          </a>
        </Link>
        <Link href="/create-a-website">
          <a>Create a Website</a>
        </Link>
        <Link href="/blogging">
          <a>Blogging</a>
        </Link>
        <Link href="/resources">
          <a>Resources</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;

// {!home && ()}

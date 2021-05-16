import React from "react";
import styles from "./index.module.css";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { getConfig, getAllPosts } from "../../scraps-api/index";

import Hero from "../../components/scrap/Hero";
import Header from "../../components/scrap/Header";
import Wave from "../../components/scrap/Wave";
import Card from "../../components/scrap/Card";
import Categories from "../../components/scrap/Categories";
import NewsLetter from "../../components/scrap/newsLetter";
import Footer from "../../components/scrap/Footer";

const index = props => {
  // console.log(props.data[0]);
  const router = useRouter();
  const params = router.query;
  console.log(params);
  return (
    <div style={{ position: "relative", background: "#f0f3f5" }}>
      <Header home />
      <Hero />
      <div className={styles.categories_section}>
        <h2>Categories</h2>
        <Categories />
      </div>
      <div className={styles.latestNewsSection}>
        <span className={styles.slogan}>
          Everything you need to grow as a Developer
        </span>
        <br />
        <span className={styles.latestNews}>Don't miss the latest news!</span>
      </div>
      <div className={styles.featured_articles_container}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <NewsLetter />
      <Footer home />
    </div>
  );
};

export default index;

// export async function getStaticProps() {
//   const config = await getConfig();
//   const allPosts = await getAllPosts();
//   return {
//     props: {
//       posts: allPosts,
//       title: config.title,
//       description: config.description,
//     },
//   };
// }

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  // const res = await fetch(`${process.env.BASE_API_URL}?_limit=4&_sort=id:DESC`);
  const res = await fetch(
    `${process.env.CATEGORY_BASE_URL}/single?title_eq=React`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

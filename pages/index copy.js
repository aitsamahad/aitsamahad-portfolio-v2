import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import { getSortedPortfolioData } from "../lib/portfolio";
import Layout, { siteTitle } from "../components/layout";

import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData, allPortfolioData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            // <li className={utilStyles.listItem} key={id}>
            //   {title}
            //   <br />
            //   {id}
            //   <br />
            //   {date}
            // </li>
            <li key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <section>
        <h2>Portfolio</h2>
        <ul>
          {allPortfolioData.map(({ id, date, title }) => (
            // <li className={utilStyles.listItem} key={id}>
            //   {title}
            //   <br />
            //   {id}
            //   <br />
            //   {date}
            // </li>
            <li key={id}>
              <Link href="/portfolio/[id]" as={`/portfolio/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // For Posts
  const allPostsData = getSortedPostsData();
  // For Portfolio
  const allPortfolioData = getSortedPortfolioData();

  return {
    props: {
      allPostsData,
      allPortfolioData,
    },
  };
}

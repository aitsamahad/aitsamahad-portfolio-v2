import { getSortedPostsData } from "../lib/posts";
import { getSortedPortfolioData } from "../lib/portfolio";
import { getSortedExperienceData } from "../lib/experience";
// import Layout, { siteTitle } from "../components/layout";
// import utilStyles from "../styles/utils.module.css";

import Link from "next/link";
import Date from "../components/date";
import Header from "../components/Header";
import Meta from "../components/resuables/Meta";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SocialSticky from "../components/resuables/SocialSticky";
import EmailSticky from "../components/resuables/EmailSticky";
import PStyle from "../components/resuables/PStyle";

export default function Home({ experienceTabData, allPortfolioData }) {
  return (
    <>
      <Meta title="Aitsam Ahad" />
      <Header />
      <PStyle />
      <About />
      <Services />
      <Portfolio data={allPortfolioData} />
      <Experience tabs={experienceTabData} />
      <Contact />
      <SocialSticky />
      <EmailSticky />
      <Footer />
    </>
    // <Layout home>
    //   <Head>
    //     <title>{siteTitle}</title>
    //   </Head>
    //   <section className={utilStyles.headingMd}>
    //     <p>[Your Self Introduction]</p>
    //     <p>
    //       (This is a sample website - you’ll be building a site like this on{" "}
    //       <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
    //     </p>
    //   </section>
    //   <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    //     <h2 className={utilStyles.headingLg}>Blog</h2>
    //     <ul className={utilStyles.list}>
    //       {allPostsData.map(({ id, date, title }) => (
    //         // <li className={utilStyles.listItem} key={id}>
    //         //   {title}
    //         //   <br />
    //         //   {id}
    //         //   <br />
    //         //   {date}
    //         // </li>
    //         <li className={utilStyles.listItem} key={id}>
    //           <Link href="/posts/[id]" as={`/posts/${id}`}>
    //             <a>{title}</a>
    //           </Link>
    //           <br />
    //           <small className={utilStyles.lightText}>
    //             <Date dateString={date} />
    //           </small>
    //         </li>
    //       ))}
    //     </ul>
    //   </section>
    //   <hr />
    //   <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    //     <h2 className={utilStyles.headingLg}>Portfolio</h2>
    //     <ul className={utilStyles.list}>
    //       {allPortfolioData.map(({ id, date, title }) => (
    //         // <li className={utilStyles.listItem} key={id}>
    //         //   {title}
    //         //   <br />
    //         //   {id}
    //         //   <br />
    //         //   {date}
    //         // </li>
    //         <li className={utilStyles.listItem} key={id}>
    //           <Link href="/portfolio/[id]" as={`/portfolio/${id}`}>
    //             <a>{title}</a>
    //           </Link>
    //           <br />
    //           <small className={utilStyles.lightText}>
    //             <Date dateString={date} />
    //           </small>
    //         </li>
    //       ))}
    //     </ul>
    //   </section>
    // </Layout>
  );
}

export async function getStaticProps() {
  // For Posts
  const allPostsData = getSortedPostsData();
  // For Portfolio
  const allPortfolioData = getSortedPortfolioData();
  // For Experience
  const experienceTabData = getSortedExperienceData();
  // const allExperienceIds = getAllExperienceIds();

  return {
    props: {
      allPostsData,
      allPortfolioData,
      experienceTabData,
    },
  };
}

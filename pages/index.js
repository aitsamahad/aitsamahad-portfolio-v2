import { getSortedPostsData } from "../lib/posts";
import { getSortedPortfolioData } from "../lib/portfolio";
import { getSortedExperienceData } from "../lib/experience";

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

import Layout from "../../components/layout";
import Head from "next/head";
import { getAllPortfolioIds, getPortfolioData } from "../../lib/portfolio";
import Date from "../../components/date";

// import utilStyles from "../../styles/utils.module.css";

export default function Post({ portfolioData }) {
  return (
    <Layout>
      <Head>
        <title>{portfolioData.title}</title>
      </Head>
      <article>
        <h1>{portfolioData.title}</h1>
        <div>{/* <Date dateString={portfolioData.date} /> */}</div>
        <div dangerouslySetInnerHTML={{ __html: portfolioData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPortfolioIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolioData = await getPortfolioData(params.id);
  return {
    props: {
      portfolioData,
    },
  };
}

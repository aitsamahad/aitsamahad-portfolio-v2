import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "./scrap.module.css";

import Header from "../../components/scrap/Header.js";
import Footer from "../../components/scrap/Footer.js";

const scrap = () => {
  const router = useRouter();
  const { slug } = router.query;

  const fetcher = url => fetch(url).then(r => r.json());
  const { data, error } = useSWR(
    `http://localhost:1337/scraps?slug=${slug}`,
    fetcher
  );
  console.log(data);

  if (data && data.length > 0) {
    return (
      <div
        style={{
          position: "relative",
          background: "#f0f3f5",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <div className={styles.blog_page_container}>
          <div className={styles.left_container}>
            <div className={styles.post_image_container}>
              <img
                src="https://p97.f4.n0.cdn.getcloudapp.com/items/12uNYgEZ/card.png"
                alt="5 Easy Steps to Creating a Sitemap For a Website"
              />
            </div>
            <div className={styles.post_header}>
              <h1 className={styles.post_title}>{data[0].title}</h1>
              <small className={styles.post_date}>
                Published on JANUARY 23, 2019
              </small>
            </div>
            <div className={styles.post_desc}>
              <h3>
                EVERYTHING YOU NEED FOR CREATING AND SUBMITTING A SITEMAP FOR
                YOUR WEBSITE
              </h3>
              <p>
                When it comes to getting your website ranked, you need to take
                advantage of as many SEO hacks as possible. Creating a sitemap
                is one technique that will definitely help improve your SEO
                strategy.
              </p>
              <h2>What is a sitemap?</h2>
              <p>
                Some of you may be more familiar with this than others. I’ll
                give you a quick crash course on the basics of sitemaps before I
                show you how to build a website sitemap on your own. Simply put,
                a sitemap, or XML sitemap, is a list of different pages on a
                website. XML is short for “extensible markup language,” which is
                a way to display information on a site. I’ve consulted with so
                many website owners who are intimidated by this concept because
                sitemaps are considered a technical component of SEO. But in all
                reality, you don’t need to be a tech wizard or have a tech
                background to create a sitemap. As you’ll learn shortly, it’s
                really not that difficult.
              </p>
              <img
                src="https://p97.f4.n0.cdn.getcloudapp.com/items/12uNYgEZ/card.png"
                alt="5 Easy Steps to Creating a Sitemap For a Website"
              />
              <h2>Why do you need a sitemap?</h2>
              <p>
                Search engines like Google are committed to displaying the most
                relevant results to people for any given search query. In order
                do this effectively, they use site crawlers to read, organize,
                and index information on the Internet. XML sitemaps make it
                easier for search engine crawlers to read the content on your
                site and index the pages accordingly. As a result, this
                increases your chances of boosting the SEO ranking of your
                website. Your sitemap will tell search engines the location of a
                page on your website, when it was updated, the updating
                frequency, and the importance of the page as it’s related to
                other pages on your site. Without a proper sitemap, Google bots
                might think that your site has duplicate content, which will
                actually hurt your SEO ranking. If you’re ready for your website
                to get indexed faster by search engines, just follow these five
                easy steps to create a sitemap.
              </p>
              <h4>Step 1: Review the structure of your pages</h4>
              <p>
                The first thing you need to do is look at the existing content
                on your website and see how everything is structured. Look at a
                sitemap template and figure out how your pages would be
                displayed on the table.
              </p>
              <h4>Other Guides That You May Like</h4>
              <ul>
                <li>
                  <a href="https://github.com/">How to Start a Blog</a>
                </li>
                <li>
                  <a href="https://github.com/">Best E-commerce Platforms</a>
                </li>
                <li>
                  <a href="https://github.com/">Best Web Hosting</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.right_container}>
            <div className={styles.sidebar_widget}>
              <h5>About Scraps</h5>
              <p>
                We’re here to help you grow your business online and get more
                traffic. We’ve put together our best tips on how to create a
                website, finding the best web hosting provider, and in-depth
                digital marketing guides.
              </p>
              <p>Learn more about our story here.</p>
            </div>
            <div className={styles.getting_started}>
              <h5>Getting Started</h5>
              <p>
                Make sure to create your site the right way. It'll make your
                life so much easier as you build your business. Here's how we
                build sites:
              </p>
              <ul className={styles.important_links}>
                <li>
                  <a href="https://github.com/">How to Create a Website</a>
                </li>
                <li>
                  <a href="https://github.com/">
                    How to Create an Ecommerce Website
                  </a>
                </li>
                <li>
                  <a href="https://github.com/">How to Start an Online Store</a>
                </li>
                <li>
                  <a href="https://github.com/">How to Start a Blog</a>
                </li>
                <li>
                  <a href="https://github.com/">How to Make Money Blogging</a>
                </li>
                <li>
                  <a href="https://github.com/">How to Buy a Domain Name</a>
                </li>
              </ul>
            </div>
            <div className={styles.categories_list}>
              <h5>Categories</h5>
              <p>
                A list of diverse programing categories that we specialize in:
              </p>
              <ul className={styles.categories_links}>
                <li>
                  <a href="https://github.com/">ReactJS</a>
                </li>
                <li>
                  <a href="https://github.com/">PHP</a>
                </li>
                <li>
                  <a href="https://github.com/">Kotlin</a>
                </li>
                <li>
                  <a href="https://github.com/">React Native</a>
                </li>
                <li>
                  <a href="https://github.com/">Animations</a>
                </li>
                <li>
                  <a href="https://github.com/">Framer Motion</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.clearfix} />
        <Footer />
      </div>
    );
  } else {
    return (
      <div style={{ marginLeft: "20px", marginTop: "20px" }}>
        <h1>Not Found!</h1>
        <a href="/scraps" style={{ fontSize: "18px", color: "#df4c73" }}>
          <span> &larr; </span>Back to Scraps!
        </a>
      </div>
    );
  }
};

export default scrap;

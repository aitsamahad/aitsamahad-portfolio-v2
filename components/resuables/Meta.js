import React from "react";
import Head from "next/head";

const Meta = ({ title }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="I'm a software engineer based in Islamabad, PK building high-quality websites and applications using modern technologies and frameworks. My main focus however is in backend with RESTful APIs."
      />
      <link rel="apple-touch-icon" href="/images/logo192.png" />
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossOrigin="anonymous"
      />
      <script src="/assets/scripts.js" defer type="text/javascript"></script>
    </Head>
  );
};

export default Meta;

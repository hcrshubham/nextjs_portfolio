import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Newsletter from "../src/components/Newsletter";
import Layout from "../src/layout/Layout";

const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);


  return (
    <Layout dark>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:description" content="I'm Shubham Kumar Sharma, a passionate full-stack developer with a love for traveling and photography." />
        <meta name="theme-color" content="#EB625A" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shubham Kumar Sharma" />
        <meta property="og:site_name" content="Shubham Kumar Sharma" />
        <meta name="twitter:title" content="Shubham Kumar Sharma" />
        <meta property="twitter:domain" content="shubhamkumarsharma.com" />
        <meta name="twitter:creator" content="@hcrshubham" />
        <meta name="description" content="I'm Shubham Kumar Sharma, a passionate full-stack developer with a love for traveling and photography." />
        <meta property="og:description" content="I'm Shubham Kumar Sharma, a passionate full-stack developer with a love for traveling and photography." />
        <meta name="twitter:description" content="I'm Shubham Kumar Sharma, a passionate full-stack developer with a love for traveling and photography." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://shubhamkumarsharma.com" />
        <meta property="og:url" content="https://shubhamkumarsharma.com" />
        <meta property="twitter:url" content="https://shubhamkumarsharma.com" />
        <title>Shubham Kumar Sharma</title>
        <meta name="next-head-count" content="21" />
        <meta name="google-site-verification" content="mCNAW1QY-E0MfAdAIMeLUuSxWWRRmCYiAeskhOHE-TM" />
      </Head>
      <Home dark />
      {/* HERO */}
      {/* PROCESS */}
      <About dark />
      {/* /ABOUT */}
      {/* PORTFOLIO */}

      <Newsletter />
      <Contact />
    </Layout>
  );
};
export default Index;


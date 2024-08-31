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
        <title>Shubham Kumar Sharma</title>
        <meta name="description" content="I'm Shubham Kumar Sharma, a passionate full-stack developer with a love for traveling and photography." />
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


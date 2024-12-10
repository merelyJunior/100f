import React from "react"
import Sidebar from "/components/sidebar";
import NodesPage from '/components/NodesPage';
import Head from "next/head";
import Header from "/components/header";

const Page404 = () => {

  return(
    <>
      <Head>
        <title>Page Under Construction</title>
        <meta name="description" content="100F is the ultimate platform where crypto projects and educated investors meet. Join our public and private audiences, and explore our educational platform and marketing expertise." />
        <meta name="keywords" content="crypto, investors, education, marketing, audience, projects, cryptocurrency, 100F" />
        <meta name="author" content="100F" />
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <Header/>
      <Sidebar/>
        <NodesPage/>
    </>
  )
}

export default Page404;

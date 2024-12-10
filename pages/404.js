import React from "react"
import Sidebar from "/components/sidebar";
import ErrorPage from '/components/ErrorPage';
import Head from "next/head";
import Header from "/components/header";

const Page404 = () => {

  return(
    <>
      <Head>
        <title>404 - Page Not Found | The page you are looking for does not exist.</title>
        <meta name="description" content="100F is the ultimate platform where crypto projects and educated investors meet. Join our public and private audiences, and explore our educational platform and marketing expertise." />
        <meta name="keywords" content="crypto, investors, education, marketing, audience, projects, cryptocurrency, 100F" />
        <meta name="author" content="100F" />
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <Header/>
      <Sidebar/>
        <ErrorPage/>
    </>
  )
}

export default Page404;

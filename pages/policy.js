import React from "react"
import Sidebar from "/components/sidebar";
import Policy from "/components/policy";
import AnimatedPage from '/components/AnimatePage';
import Head from "next/head";
import Header from "/components/header";

const PolicyPage = () => {
  return(
    <>
       <Head>
        <title>Policy</title>
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <Header/>
      <Sidebar/>
      <AnimatedPage>
        <Policy/>
      </AnimatedPage>
    </>
  )
}

export default PolicyPage;
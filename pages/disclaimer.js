import React from "react"
import Sidebar from "/components/sidebar";
import Disclaimer from "/components/disclaimer";
import AnimatedPage from '/components/AnimatePage';
import Head from "next/head";
import Header from "/components/header";

const DisclaimerPage = () => {
  return(
    <>
       <Head>
        <title>disclaimer</title>
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <Header/>
      <Sidebar/>
      <AnimatedPage >
        <Disclaimer/>
      </AnimatedPage>
    </>
  )
}

export default DisclaimerPage;
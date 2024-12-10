import React from 'react';
import Sidebar from "/components/sidebar";
import { getAllPosts, getValidToken } from '/lib/api';
import Blog from '/components/blog';
import AnimatedPage from '/components/AnimatePage';
const readingTime = require('reading-time');
import Head from "next/head";
import Header from "/components/header";
import Script from 'next/script';
const BlogPage = ({ blogData }) => {
  
  return(
    <>
      <Head>
          <title>100F Blog | Product Updates, Partnerships, and Announcements</title>
          <meta name="description" content="Stay updated with the latest product updates, partnerships, and announcements from CoinMarketCap and our contributors. Explore a variety of articles on crypto and investment topics." />
          <meta name="keywords" content="crypto blog, CoinMarketCap, product updates, partnerships, announcements, cryptocurrency news, investment articles" />
          <meta name="author" content="100F" />
          <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <Header/>
      <Sidebar/>
      <AnimatedPage>
      <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-M4EMMRL0TY"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M4EMMRL0TY');
            `,
          }}
        />
        <Blog data={blogData}/>
      </AnimatedPage>
    </>
  )
};

export async function getStaticProps() {
  const token = await getValidToken();

  const allPosts = await getAllPosts(token);


  const updatedPosts = allPosts.map(post => {
    const stats = readingTime(post.content.rendered);
    const mins = Math.ceil(stats.minutes); 
    return {
      ...post,
      readingTime: mins
    };
  });
  const blogData = {
    // blogPages:[],
    allPosts:updatedPosts,
    // popularPosts:[]
  };
  return {
    props: {
      blogData
    },
    revalidate: 60,
  };
}


export default BlogPage;
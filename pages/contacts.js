import React from "react"
import Sidebar from "/components/sidebar";
import Contacts from "/components/contacts";
import AnimatedPage from '/components/AnimatePage';
import Head from "next/head";
import Header from "/components/header";
import Script from 'next/script';

const ContactsPage = () => {
  return(
    <>
    <Head>
      <title>Submit a Project or Invest with 100F | Let&apos;s Talk!</title>
      <meta name="description" content="Are you interested in submitting a project or investing in one? Let's talk! We select projects with potential for market development and opportunities for joint returns. Complete the form to request a consultation with our crypto experts." />
      <meta name="keywords" content="crypto projects, investing, submit a project, market development, joint returns, crypto consultation, 100F" />
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
        <Contacts/>
      </AnimatedPage>
    </>
  )
}

export default ContactsPage;
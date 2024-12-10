import React from 'react';
import styles from './index.module.css';
import Form from '../sections/contacts';
import Footer from '../footer';
import CoinsPlugin from '../coinsPlugin';

const Contacts = () => {
 
  return (
    <>
      <section className={styles['first-screen-card']}>
          <div className={styles['first-screen-card-container']}>
              <CoinsPlugin/>
              <div className={styles.inner}>
                  <h1 className="main-title">Have a crypto project or want to get early-stage access?<br/><span className={`title-span ${styles['contacts-span']}`}>Let&#39;s talk!</span></h1>
                  <p className={styles.subtitle}>Whether you&apos;re interested in submitting your own project or participating in a crypto project early stages, we have a solution for you. Fill out the form, and let&apos;s talk!</p>
              </div>
          </div>
      </section>
      <Form contacts={true}/>
      <Footer/>
    </>
  );
};

export default Contacts;
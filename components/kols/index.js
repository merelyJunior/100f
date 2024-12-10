import React from 'react';
import styles from './index.module.css';
import Form from '../sections/contacts';
import Footer from '../footer';
import CoinsPlugin from '../coinsPlugin';


const Kols = () => {
 
  return (
    <div>
      <section className={styles['first-screen-card']}>
        <div className={styles['first-screen-card__container']}>
            <CoinsPlugin/>
          <div className={styles.inner}>
          <h1 className="main-title"><span className='title-span'>The unified crypto platform </span>connecting qualified projected with educated audience</h1>
              <p className={styles.subtitle}>By collaborating with crypto projects, we provide them with powerful promotion based on strong marketing and native traffic from KOLs</p>
              <div className={styles.advantages} >
                  <div className={styles['advantages-list']}>
                    <div className={styles['advantages-list-item']}>
                      <h3 className={styles['goal-title']}>
                          Audience asset
                      </h3>
                      <span className={styles['goal-line']}></span>
                      <strong className={styles['asset-list-value']}>189</strong>
                      <strong className={styles['asset-list-title']}>Investment Influencers</strong>
                      <strong className={styles['asset-list-value']}>104</strong>
                      <strong className={styles['asset-list-title']}>Private Investors</strong>
                      <strong className={styles['asset-list-value']}>10M+</strong>
                      <strong className={styles['asset-list-title']}>Audience Coverage</strong>
                    </div>  
                  </div>  
                  <div className={styles['advantages-list']}>
                      <div className={styles['advantages-list-item']}>
                          <h3 className={styles['expertise-title']}>
                              Marketing expertise
                          </h3>
                          <span className={styles['asset-line']}></span>
                          <strong className={styles['asset-list-value']}>17</strong>
                          <strong className={styles['asset-list-title']}>Projects launch models</strong>
                          <strong className={styles['asset-list-value']}>14</strong>
                          <strong className={styles['asset-list-title']}>Models of community dev.</strong>
                          <strong className={styles['asset-list-value']}>9</strong>
                          <strong className={styles['asset-list-title']}>Models of audience acquisitions</strong>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
      <section className={styles['our-actions']}>
        <h2 className={`secondary-title ${styles['our-actions-title']}`}>All our actions are aimed at attracting an audience to crypto projects and educating them on investing</h2>
        <div className={styles['advantages-card']}>
          <div className={styles['advantages-card-item']}></div>
          <div className={styles['advantages-card-item']}></div>
          <div className={styles['advantages-card-item']} >
              <p className={styles['card-title']}>The goal of any environmentally friendly project on WEB3</p>
              <p className={styles['card-desc']}>Make a positive impact on the world. It involves creating new solutions to problems, spreading the right messages, empowering people to achieve their full potential, and providing financial independence</p>
          </div>
          <div className={styles['advantages-card-item']}>
              <p className={styles['card-title']}>The goal of 100F</p>
              <p className={styles['card-desc']}>Select the most promising crypto projects and help them overcome the noise of projects seeking hype for quick profits over long-term growth</p>
          </div>
        </div>
      </section>
      <Form/>
      <Footer/>
    </div>
  );
};

export default Kols;
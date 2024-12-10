import React from 'react';
import styles from './index.module.css';
import Footer from '../../footer';
import CoinsPlugin from '../../coinsPlugin';
import Image from 'next/image';

const Home = () => {

 
  return (
    <div>
      <section className={styles['first-screen-card']}>
        <div className={styles['first-screen-card-container']}>
            <CoinsPlugin/>
            <div className={styles.inner}>
                <h1 className="main-title"><span className='title-span'>One crypto space </span> where qualified projects and educated audience meet</h1>
                
                <div className={styles.advantages}>
                    <div className={styles['advantages-list']}>
                        <div className={styles['advantages-list-item']}>
                            <h3 className={styles['list-item-title']}>
                                Public audience
                            </h3>
                            <small className={styles['item-title-small']}>
                                100,000+ subscribers
                            </small>
                            <small className={styles['item-title-small']}>
                                200,000+ users in bots
                            </small>
                            <small className={styles['item-title-small']}>
                                100,000+ blog visitors
                            </small>
                        </div>  
                        <div className={styles['advantages-list-item']}>
                            <h3 className={styles['list-item-title']}>
                                Educational platform
                            </h3>
                            <small className={styles['item-title-small']}>
                                313 video lessons
                            </small>
                            <small className={styles['item-title-small']}>
                                128 step-by-step guides
                            </small>
                            <small className={styles['item-title-small']}>
                                390 mastermind sessions
                            </small>
                        </div>  
                        <div className={styles['advantages-list-item']}>
                            <h3 className={styles['list-item-title']}>
                                Private audience
                            </h3>
                            <small className={styles['item-title-small']}>
                                100M+ audience coverage
                            </small>
                            <small className={styles['item-title-small']}>
                                100+ investment influencers
                            </small>
                            <small className={styles['item-title-small']}>
                                100+ private investors
                            </small>
                        </div>  
                        <div className={styles['advantages-list-item']}>
                            <h3 className={styles['list-item-title']}>
                                MARKETING EXPERTISE
                            </h3>
                            <small className={styles['item-title-small']}>
                                17 project launch models 
                            </small>
                            <small className={styles['item-title-small']}>
                                14 models of community dev.
                            </small>
                            <small className={styles['item-title-small']}>
                                9 models of audience acquisition
                            </small>
                        </div>  
                      
                    </div>  
                </div>
                <div className={`${styles['advantages'] } ${styles['advantages-mobile'] }`}>
                    <div className={styles['advantages-list']}>
                        <div className={styles['advantages-list-item']}>
                            <h3 className={styles['list-item-title']}>
                                Public audience
                            </h3>
                            <small className={styles['item-title-small']}>
                                100,000+ subscribers
                            </small>
                            <small className={styles['item-title-small']}>
                                200,000+ users in bots
                            </small>
                            <small className={styles['item-title-small']}>
                                100,000+ blog visitors
                            </small>
                        </div> 
                        <div className={styles['advantages-list-item']}>
                          <h3 className={styles['list-item-title']}>
                              Private audience
                          </h3>
                          <small className={styles['item-title-small']}>
                              10M+ audience coverage
                          </small>
                          <small className={styles['item-title-small']}>
                              100+ investment influencers
                          </small>
                          <small className={styles['item-title-small']}>
                              100+ private investors
                          </small>
                      </div>  
                        <div className={styles['advantages-list-item']}>
                            <h3 className={styles['list-item-title']}>
                                Educational platform
                            </h3>
                            <small className={styles['item-title-small']}>
                                313 video lessons
                            </small>
                            <small className={styles['item-title-small']}>
                                128 step-by-step guides
                            </small>
                            <small className={styles['item-title-small']}>
                                390 mastermind sessions
                            </small>
                        </div>  
                          
                        <div className={styles['advantages-list-item']}>
                            <h3 className={styles['list-item-title']}>
                                MARKETING EXPERTISE
                            </h3>
                            <small className={styles['item-title-small']}>
                                17 project launch models 
                            </small>
                            <small className={styles['item-title-small']}>
                                14 models of community dev.
                            </small>
                            <small className={styles['item-title-small']}>
                                9 models of audience acquisition
                            </small>
                        </div>  
                      
                    </div>  
                </div>
            </div>
        </div>
      </section>
      <section className={styles.phone}>
        <div className={styles['phone-description']}>
            <div>
                <p className={styles['phone-title']}>Now we are on <span className={styles['phone-span']}></span></p>
                <p className={styles['phone-subtitle']}>Follow  <a className={styles['phone-subtitle-link']} href="https://twitter.com/crypto100f" target="_blank">@crypto100f</a>  to stay updated on all the news about 100 FRANKLINS</p>
            </div>
            <div className={styles['phone-image']}></div>
            <div>
                <p className={styles['phone-subtitle']}>Dive into 100F updates, ecosystem projects, breaking news, and research</p>
                <a href="https://twitter.com/crypto100f" target="_blank" className={styles['crypto-button']}><span className={styles['crypto-button-span']}></span>CRYPTO100F</a>
            </div>
        </div>
        
      </section>
      <section className={styles['partners-section']}>
        <h2 className={`secondary-title ${styles['partners-title']}`}>WE WORKED WITH</h2>
        <div className={styles.partners}>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p1.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm1.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>Noders</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p2.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm2.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>Shardeum</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p3.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm3.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>ivendPay</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p4.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm4.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>ZimaBank</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p5.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm5.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>DAO Maker</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p6.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm6.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>WePad</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p7.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm7.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>CryptoGPT</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p8.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm8.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>De.Fi</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p9.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm9.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>Patex</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p10.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm10.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>DegenZoo</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p11.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm11.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>ChainGPT</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p12.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm12.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>Tenet</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p13.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm13.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>Virtual Versions</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p14.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm14.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>The Root Network</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p15.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm15.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>.COM</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p16.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm16.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>SophiaVerse</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p17.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm17.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>Kryptonite</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p18.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm18.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>Planet</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p19.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm19.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>Zelwin</p>
            </div>
            <div className={styles['partners-elem']}>
                <Image src="/assets/img/p20.png" alt="partner img" width={130} height={130} />
                <Image src="/assets/img/pm20.png" alt="partner img" width={130} height={130} />
                <p className={styles['partners-name']}>PointPay</p>
            </div>
        </div>
      </section>
       <Footer/>
    </div>
   
  );
};

export default Home;

import React, { useRef, useEffect, useState } from 'react';
import { Link, Element,scroller   } from 'react-scroll';
import styles from './index.module.css';
import Footer from '../footer-new';
import Image from 'next/image';
import HomeSlider from '/components/sections/homeSlider'
import ReviewPlatformSlider from '/components/sections/reviewPlatformSlider'
import Contacts from '../sections/contacts-new';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { motion } from "framer-motion";
import PopupForm from '/components/sections/contacts-popup';

import NewsPlugin from '/components/newsPlugin'


const MySwal = withReactContent(Swal);

const Home = () => {
  const sectionRefs = useRef([]); // Ссылки на секции
  const [visibleSections, setVisibleSections] = useState([]); // Секции, которые уже показаны

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            if (!visibleSections.includes(index)) {
              // Добавляем секцию в список видимых
              setVisibleSections((prev) => [...prev, index]);
            }
          }
        });
      },
      {
        root: null, // Ориентируемся на окно просмотра
        rootMargin: "0px 0px -20% 0px", // Учитываем нижнюю часть экрана
        threshold: 0, // Срабатывает, как только секция появляется
      }
    );

    // Подключаем секции к наблюдателю
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      // Удаляем наблюдатель при размонтировании
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [visibleSections]);
  
  return (
    <>
      <motion.section
        ref={(el) => (sectionRefs.current[0] = el)}
        id="section-0"
        className={styles["first-screen-card"]}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: visibleSections.includes(0) ? 1 : 0, y: visibleSections.includes(0) ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles['first-screen-card-header']}>
          <p>Proven path to 100X returns: <span>See our metrics below</span></p>
        </div>
        <Image className={styles.logo} src='/assets/img/footer-logo.png' width={66} height={20}/>
        <div className={styles.content}>
            <HomeSlider/>
            <div className={styles['right-side']}>
              <h1 className={styles["main-title"]}>100 Franklins' Journey <br/>to <span className={styles['text-gradient']}>Unicorn Status</span> : Backed by Numbers,<br/> Not Promises</h1>
              <p className={styles.subtitle}>We are building a unified platform <br/>connecting qualified Web3 projects <br/>with an educated audience</p>
              <a className={styles['schedule-btn']}>Schedule Demo</a>
            </div>
            
        </div>
        <NewsPlugin/>
      </motion.section>
      <motion.section
        ref={(el) => (sectionRefs.current[1] = el)}
        id="section-1"
        className={styles["global-problem"]}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: visibleSections.includes(1) ? 1 : 0, y: visibleSections.includes(1) ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        >
        <span className={styles['section-marker']}></span>
          <svg className={styles['marker-line']} xmlns="http://www.w3.org/2000/svg" width="2" height="105" viewBox="0 0 2 105" fill="none">
          <line x1="1" y1="4.37114e-08" x2="0.999995" y2="105" stroke="#FF6054" stroke-width="2" stroke-dasharray="2 2"/>
          </svg>
        <h1 className={styles['main-title']}>GLOBAL PROBLEM</h1>
        <div  className={styles['global-problem-wrapper']}>
          
          <svg  
            className={styles['section-line']}
            xmlns="http://www.w3.org/2000/svg" width="976" height="996" viewBox="0 0 976 996" fill="none">
            <rect x="1" y="1" width="974" height="994" rx="14" stroke="url(#paint0_linear_1741_1597)" stroke-width="2" stroke-dasharray="2 2"/>
            <defs>
              <linearGradient id="paint0_linear_1741_1597" x1="488" y1="5.0518e-07" x2="496.649" y2="996.003" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF6054"/>
                <stop offset="1" stop-color="#23FFBE"/>
              </linearGradient>
            </defs>
          </svg>
          <div className={styles.content}>
            <p className={styles.subtitle}>The crypto market lacks a sustainable development mechanism, hurting both projects and investors</p>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3 className={styles['card-title']}>70% Projects Fail</h3>
                <ul className={styles['card-list']}>
                  <li className={styles['card-list-item']}>
                    Can't create quality products due to speculative pressure
                  </li>
                  <li className={styles['card-list-item']}>
                    Forced to focus on short-term hype
                  </li>
                  <li className={styles['card-list-item']}>
                    No unified platform for investor relations
                  </li>
                </ul>
              </div>
              <div className={styles.card}>
                <h3 className={styles['card-title']}>20B+ Lost in 5 years</h3>
                <ul className={styles['card-list']}>
                  <li className={styles['card-list-item']}>
                    No clear visibility into long-term earning potential
                  </li>
                  <li className={styles['card-list-item']}>
                    High risk from low-quality projects
                  </li>
                  <li className={styles['card-list-item']}>
                    Limited tools for proper evaluation
                  </li>
                </ul>
              </div>
            </div>
            <p className={styles.subtitle}>We have a comprehensive understanding of these problems, having experienced them from every perspective</p>
            <strong>
            Our extensive experience in the crypto market allows us to go beyond identifying problems—we create practical, impactful solutions
            </strong>
            <div className={styles['market-exp']}>
              <p className={styles['secondary-title']}>
                OUR MARKET EXPERTISE
              </p>
              <div className={styles['market-items']}>
                <div className={styles['market-item']}>
                  <p>
                    300+ Crypto Projects Launched
                  </p>
                  <Image className={styles['market-items-img']} src='/assets/img/cardsprjct.png' width={284} height={108}/>
                </div>
                <div className={styles['market-item']}>
                  <p>
                  Direct Access to top management of leading exchanges <span>(ByBit, Bitget, MEX-C, OKX etc)</span>
                  </p>
                </div>
                <div className={styles['market-item']}>
                  <p>
                  Partnerships with 1’000+ crypto communities & crypto influencers with a combined audience of over 1 billion followers
                  </p>
                  <Image className={styles['market-items-img']} src='/assets/img/cardsprjct3.png' width={197} height={84}/>
                </div>
              </div>
            
            </div>
          </div>
        </div>
        <svg  className={styles['marker-line']} xmlns="http://www.w3.org/2000/svg" width="2" height="105" viewBox="0 0 2 105"  fill="none">
          <line x1="1" y1="4.37114e-08" x2="0.999995" y2="105" stroke="url(#paint0_linear_1741_1916)" stroke-width="2" stroke-dasharray="2 2"/>
          <defs>
          <linearGradient id="paint0_linear_1741_1916" x1="-0.5" y1="-2.18557e-08" x2="-0.500005" y2="105" gradientUnits="userSpaceOnUse">
          <stop stop-color="#23FFBE"/>
          <stop offset="1" stop-color="#23FFBE"/>
          </linearGradient>
          </defs>
        </svg>
      </motion.section>
      <motion.section
        ref={(el) => (sectionRefs.current[2] = el)}
        id="section-2"
        className={styles["exeptional-solution"]}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: visibleSections.includes(2) ? 1 : 0, y: visibleSections.includes(2) ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
      <span className={styles['section-marker']}></span>
        <svg  className={styles['marker-line']} xmlns="http://www.w3.org/2000/svg" width="2" height="105" viewBox="0 0 2 105" fill="none">
        <line x1="1" y1="4.37114e-08" x2="0.999995" y2="105" stroke="#23FFBE" stroke-width="2" stroke-dasharray="2 2"/>
        </svg>
        <h1 className={styles['main-title']}>EXCEPTIONAL SOLUTION</h1>
        <div  className={styles['exeptional-solution-wrapper']}>
        <svg  className={styles['section-line']} xmlns="http://www.w3.org/2000/svg" width="976" height="1750" viewBox="0 0 976 1750" fill="none">
          <rect x="1" y="1" width="974" height="1748" rx="14" stroke="url(#paint0_linear_1741_1754)" stroke-width="2" stroke-dasharray="2 2"/>
          <defs>
          <linearGradient id="paint0_linear_1741_1754" x1="488" y1="0" x2="488" y2="1120.75" gradientUnits="userSpaceOnUse">
          <stop stop-color="#23FFBE"/>
          <stop offset="1" stop-color="#23FFBE" stop-opacity="0.39"/>
          </linearGradient>
          </defs>
          </svg>
          <div className={styles.content}>
            <h2 className={styles['secondary-title']}>WHAT MAKES <br></br>AN EFFECTIVE SOLUTION?</h2>
            <p className={styles.subtitle}>Over the years, we've crystallized our understanding of what the market truly needs</p>
            <strong>We've validated this by creating a manual prototype that generated $340K+ revenue in less than 12 months</strong>
            <div className={styles['card-section']}>
              <h3 className={styles['third-title']}><span>THE SOLUTION:</span> UNIFIED CRYPTO PLATFORM</h3>
              <p className={styles.subtitle}>100 Franklins connects qualified projects with an educated audience, creating conditions for sustainable development and long-term profits</p>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <h3 className={styles['card-title']}>FOR PROJECT FOUNDERS</h3>
                  <ul className={styles['card-list']}>
                    <li className={styles['card-list-item']}>
                      Attract dedicated, long-term  <br/>investors
                    </li>
                    <li className={styles['card-list-item']}>
                      Ensure stable growth without <br/> post-listing dumps
                    </li>
                    <li className={styles['card-list-item']}>
                      Build loyal investor base for sustainable development
                    </li>
                  </ul>
                </div>
                <div className={styles.card}>
                  <h3 className={styles['card-title']}>FOR INVESTORS</h3>
                  <ul className={styles['card-list']}>
                    <li className={styles['card-list-item']}>
                      Access to verified, high-quality <br/> projects
                    </li>
                    <li className={styles['card-list-item']}>
                      Reduced risk through thorough <br/> vetting
                    </li>
                    <li className={styles['card-list-item']}>
                      Long-term profit opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles['card-section']}>
              <h3 className={styles['third-title']}>WHAT WE ALREADY HAVE</h3>
              <p className={styles.subtitle}>Market-validated concept ready for technical development</p>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <span className={styles['card-header']}>Development plan</span>
                  <p className={styles['numbers-title']}>$340K+ <span>Validated Revenue</span></p>
                  <p className={styles['numbers-subtitle']}>From manual prototype operations</p>
                  <ul className={styles['card-list']}>
                    <li className={styles['card-list-item']}>
                    Development Team: <br/><span> Ready to start technical implementation</span>
                    
                    </li>
                    <li className={styles['card-list-item']}>
                    5-Year Strategy:<br/><span> Detailed development and growth roadmap</span>
                    </li>
                  </ul>
                </div>
                <div className={styles.card}>
                  <span className={styles['card-header']}>Product vision</span>
                  <p className={styles['numbers-title']}>27’000+<span>Waiting List</span></p>
                  <p className={styles['numbers-subtitle']}>Users ready for platform launch</p>
                  <ul className={styles['card-list']}>
                    <li className={styles['card-list-item']}>
                    Platform Demo: <br/><span> Detailed video mockup <br/>of the platform functionality</span>
                    
                    </li>
                    <li className={styles['card-list-item']}>
                    5 Patents Pending:<br/><span> Core technology IP protection</span>
                    </li>
                  </ul>
                </div>
              
              </div>
            </div>
            <h3 className={styles['third-title']}>REVIEW OUR VISION</h3>
            <p className={styles.subtitle}>See how we'll build the first sustainable crypto platform</p>
            <ReviewPlatformSlider/>
            <a className={styles['schedule-btn']}>Request Platform Demo</a>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="section-3"
        className={styles["consumers"]}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: visibleSections.includes(3) ? 1 : 0, y: visibleSections.includes(3) ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles['section-marker']}></span>
        <svg className={styles['marker-line']} xmlns="http://www.w3.org/2000/svg" width="2" height="164" viewBox="0 0 2 164" fill="none">
                <path d="M0.999889 0L0.999993 164" stroke="url(#paint0_linear_1741_2458)" stroke-width="2" stroke-dasharray="2 2"/>
                <defs>
                <linearGradient id="paint0_linear_1741_2458" x1="-0.5" y1="-2.18547e-08" x2="-0.500005" y2="105" gradientUnits="userSpaceOnUse">
                <stop stop-color="#23FFBE"/>
                <stop offset="1" stop-color="#FFDF2C"/>
                </linearGradient>
                </defs>
        </svg>
        <h1 className={styles['main-title']}>ENGAGED CONSUMERS</h1>
        <div  className={styles['consumers-wrapper']}>
        <svg className={styles['section-line']}xmlns="http://www.w3.org/2000/svg" width="976" height="4198" viewBox="0 0 976 4198" fill="none">
      <g clip-path="url(#clip0_1741_2330)">
      <g opacity="0.45" filter="url(#filter0_f_1741_2330)">
      <path d="M249 1892.01C249 2005.78 74.7707 1984.51 -39 1984.51C-152.771 1984.51 -245 1892.28 -245 1778.51C-245 1664.74 -101 1331.51 -39 1572.51C-39 1700.51 249 1778.24 249 1892.01Z" fill="#FFDF2C"/>
      </g>
      <g opacity="0.45" filter="url(#filter1_f_1741_2330)">
      <circle cx="1037" cy="1607" r="206" fill="#FFDF2C"/>
      </g>
      <g opacity="0.45" filter="url(#filter2_f_1741_2330)">
      <path d="M249 4215.01C249 4328.78 74.7707 4307.51 -39 4307.51C-152.771 4307.51 -245 4215.28 -245 4101.51C-245 3987.74 -101 3654.51 -39 3895.51C-39 4023.51 249 4101.24 249 4215.01Z" fill="#FFDF2C"/>
      </g>
      <g opacity="0.45" filter="url(#filter3_f_1741_2330)">
      <circle cx="1037" cy="3930" r="206" fill="#FFDF2C"/>
      </g>
      <g opacity="0.45" filter="url(#filter4_f_1741_2330)">
      <circle cx="14" cy="-17" r="106" fill="#FFDF2C"/>
      </g>
      </g>
      <rect x="1" y="1" width="974" height="4196" rx="14" stroke="url(#paint0_linear_1741_2330)" stroke-width="2" stroke-dasharray="2 2"/>
      <defs>
      <filter id="filter0_f_1741_2330" x="-445" y="1287" width="894" height="899.083" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1741_2330"/>
      </filter>
      <filter id="filter1_f_1741_2330" x="631" y="1201" width="812" height="812" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1741_2330"/>
      </filter>
      <filter id="filter2_f_1741_2330" x="-445" y="3610" width="894" height="899.083" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1741_2330"/>
      </filter>
      <filter id="filter3_f_1741_2330" x="631" y="3524" width="812" height="812" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1741_2330"/>
      </filter>
      <filter id="filter4_f_1741_2330" x="-442" y="-473" width="912" height="912" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_1741_2330"/>
      </filter>
      <linearGradient id="paint0_linear_1741_2330" x1="488" y1="0" x2="488" y2="2688.52" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFDF2C"/>
      <stop offset="1" stop-color="#FFDF2C" stop-opacity="0.39"/>
      </linearGradient>
      <clipPath id="clip0_1741_2330">
      <rect width="976" height="4198" rx="15" fill="white"/>
      </clipPath>
      </defs>
      </svg>
          <div className={styles.content}>
            <h2 className={styles['secondary-title']}>WHO WILL BUY THIS?</h2>
            <p className={styles.subtitle}>We already have access to our target audience</p>
            <div className={styles['card-section']}>
              <h3 className={styles['third-title']}>OUR WARM AUDIENCE BASE</h3>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <p className={styles['numbers-title']}>1B+ <span>Crypto Audience</span></p>
                  <ul className={styles['card-list']}>
                    <li className={styles['card-list-item']}>
                    Through 1’000+ crypto influencers & communities
                    </li>
                  </ul>
                </div>
                <div className={styles.card}>
                  <p className={styles['numbers-title']}>27K+ <span>Waiting List</span></p>
                  <ul className={styles['card-list']}>
                    <li className={styles['card-list-item']}>
                    Ready to join at launch
                    </li>
                  </ul>
                </div>
                <div className={styles.card}>
                  <p className={styles['card-title']}>Direct Access 
                  <br/>to Top Exchanges</p>
                  <ul className={styles['card-list']}>
                    <li className={styles['card-list-item']}>
                    Established relationships with top management at ByBit, Gate.io, Bitget, MEXc, and OKX
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles['card-section']}>
              <h3 className={styles['third-title']}>CONSERVATIVE PATH TO UNICORN</h3>
              <p className={styles['numbers-title']}>0.005%</p>
              <p className={styles.subtitle}>That's all we need from our existing audience base</p>
              <div className={styles['single-card']}>
                <div className={styles['calculates']}>
                  <p className={styles['numbers-title']}>50’000 <span>Users</span></p>
                  <p className={styles['numbers-title']}>х</p>
                  <p className={styles['numbers-title']}>$220<span>Monthly</span></p>
                  <p className={styles['numbers-title']}>=</p>
                  <p className={styles['numbers-title']}>$1B+ <span>Valuation</span></p>
                </div>
                <p className={styles.subtitle}>Just 0.005% conversion from our existing audience base</p>
              </div>
            </div>
            <div className={styles['card-section']}>
              <h3 className={styles['third-title']}>AND THAT’S JUST THE BEGINNING</h3>
                <p className={styles.subtitle}>After reaching unicorn status, we'll multiply our growth through additional channels</p>
                <div className={styles['cards-unicorn']}>
                <div className={styles.card}>
                  <h3 className={styles['card-title']}>GROWTH CHANNELS</h3>
                  <ul className={styles['card-list']}>
                    <li className={styles['card-list-item']}>
                      Paid Advertising
                    </li>
                    <li className={styles['card-list-item']}>
                      Conferences
                    </li>
                    <li className={styles['card-list-item']}>
                    Interviews
                    </li>
                    <li className={styles['card-list-item']}>
                    Media Coverage
                    </li>
                  </ul>
                </div>
                <div className={styles.card}>
                  <h3 className={styles['card-title']}>EXCHANGE COLLABORATIONS</h3>
                
                </div>
              </div>
            </div>
            <div className={styles['card-section']}>
              <h3 className={styles['third-title']}>MULTIPLYING <span className={styles['text-gradient']}>UNICORN</span> STATUS</h3>
              <Image className={styles.chart} src='/assets/img/chart.png' width={575} height={250}/>
                <p className={styles.subtitle}>Each new channel multiplies our reach & valuation</p>
                
            </div>
            <div  className={styles['card-section']}>
              
            </div>
            <h2 className={styles['secondary-title']}>READY TO JOIN OUR JOURNEY?</h2>
            <div  className={styles['card-section']}>
            <h2 className={styles['third-title']}>WHY INVEST NOW</h2>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <p className={styles['numbers-title']}>$340K+ <span>Revenue</span></p>
                  <ul className={styles['card-list']}>
                    <li className={styles['card-list-item']}>
                    From manual Prototype
                    </li>
                  </ul>
                </div>
                <div className={styles.card}>
                  <p className={styles['numbers-title']}>27K+ <span>Waiting List</span></p>
                  <ul className={styles['card-list']}>
                    <li className={styles['card-list-item']}>
                    Ready to join at launch
                    </li>
                  </ul>
                </div>
                <div className={styles.card}>
                  <p className={styles['numbers-title']}>100X <span>Return Potential</span></p>
                  <ul className={styles['card-list']}>
                    <li className={styles['card-list-item']}>
                    With conservative metrics 
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles['single-card']}>
                <div className={styles['calculates']}>
                  <p className={styles['numbers-title']}>50’000 <span>Users</span></p>
                  <p className={styles['numbers-title']}>х</p>
                  <p className={styles['numbers-title']}>$220<span>Monthly</span></p>
                  <p className={styles['numbers-title']}>=</p>
                  <p className={styles['numbers-title']}><em className={styles['text-gradient']}>UNICORN </em><span>Status</span></p>
                </div>
                <p className={styles.subtitle}>Just 0.005% conversion from our existing audience base</p>
              </div>
              <ul className={styles['advantages-list']}>
                <li className={styles['advantages-list-item']}>
                  Access to 1B+ Audience
                </li>
                <li className={styles['advantages-list-item']}>
                  Expert Team
                </li>
                <li className={styles['advantages-list-item']}>
                  Top Exchange Partnership
                </li>
                <li className={styles['advantages-list-item']}>
                  Working Prototype
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
      <Element name="contacts">
          <Contacts/>
      </Element>
      <Footer/>
    </>
   
  );
};

export default Home;

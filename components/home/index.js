import React, { useRef, useEffect, useState } from 'react';
import { Link, Element, scroller   } from 'react-scroll';
import styles from './index.module.css';
import Footer from '../footer-new';
import Image from 'next/image';
import HomeSlider from '/components/sections/homeSlider'
import ReviewPlatformSlider from '/components/sections/reviewPlatformSlider'
import Contacts from '../sections/contacts-new';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { motion } from "framer-motion";
import AddPopup from '/components/sections/add-popup';

import NewsPlugin from '/components/newsPlugin'
import TeamSlider from '../sections/teamSlider';


const MySwal = withReactContent(Swal);

const Home = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Если прокрутили больше чем на 100px
      if (window.scrollY > 100) {
        setIsSticky(true);
      }else {
        setIsSticky(false);
      }
      if (window.scrollY >= 500){
        setShowAdd(true);
      }else {
        setShowAdd(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Убираем слушателя при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleRemoveItem = (e, name) => {
      if(name === 'card-header'){
        const element = document.getElementById('cardHeader');
        
        if (element) {
          element.remove();
        }
      }else if(name === 'add-popup'){
        const element = document.getElementById('add');
        
        if (element) {
          element.remove();
        }
      }
  }
  const svgRef = useRef(null);
  const [animationPlayed, setAnimationPlayed] = useState(false); 
  const [animationTwoPlayed, setAnimationTwoPlayed] = useState(false); 
  const [animationThreePlayed, setAnimationThreePlayed] = useState(false); 
  const [animationFourPlayed, setAnimationFourPlayed] = useState(false); 
  const [animationFivePlayed, setAnimationFivePlayed] = useState(false); 
    
  const handleScroll = () => {
      if (svgRef.current) {
          const rect = svgRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
  
          // Проверяем, виден ли элемент и запущена ли анимация
          if (rect.top >= 0 && rect.bottom <= windowHeight && !animationPlayed) {
            
              const firstAnimation = svgRef.current.querySelector('#lineAnimation');
              
              if (svgRef.current) {
                  firstAnimation.beginElement(); 
                  setAnimationPlayed(true);
                  setTimeout(() => {
                      setAnimationTwoPlayed(true);
                      setTimeout(() => {
                          setAnimationThreePlayed(true);
                          setTimeout(() => {
                              setAnimationFourPlayed(true);
                              setTimeout(() => {
                                  setAnimationFivePlayed(true);
                              }, 4400);
                          }, 3500);
                      }, 4100);
                  }, 4000);
                  
              }
          }
      }
  };

  const addBlackAndWhiteClass = () => {
      const roadmapItems = document.querySelectorAll(`.${styles['roadmap-item']}`);
      roadmapItems.forEach(item => {
      item.classList.add(styles.blackAndWhite); 
      });
  };

  const removeBlackAndWhiteClass = () => {
      const roadmapItems = document.querySelectorAll(`.${styles['roadmap-item']}`);
      
      const delays = [0, 3900, 8000, 11500, 15900, 17400]; // Задержки для каждого элемента
  
      roadmapItems.forEach((item, index) => {
          const delay = delays[index];
          setTimeout(() => {
              item.classList.remove(styles.blackAndWhite);
          }, delay);
      });
  };

  useEffect(() => {
      // Добавляем класс при загрузке страницы
      addBlackAndWhiteClass();

      window.addEventListener('scroll', handleScroll);
      
      if (animationPlayed) {
      removeBlackAndWhiteClass();
      }

      return () => {
      window.removeEventListener('scroll', handleScroll);
      };
  }, [animationPlayed]); 


  const handleClosePopup = (close) => {
    if (close) {
      Swal.close();
    }
  }


  const handleShowPopup = () => {
    MySwal.fire({
        html: <AddPopup closePopup={handleClosePopup} />,  
        showConfirmButton: false, 
        backdrop: true, 
        showCloseButton: false, 
      });
  };



  return (
    <>
      <div id='add' className={`${styles.add} ${showAdd ? styles.show : ''}`}>
        <button onClick={(e)=>handleRemoveItem(e, 'add-popup')} className={styles['remove-btn']}></button>
       <div className={styles['add-desc']}>
        <h3 className={styles['add-title']}>INSIGHTS FROM VENTURE EXPERTS</h3>
        <button className={styles['show-add-btn']} onClick={()=>handleShowPopup()}>See what the industry legend says about us</button>
        <div className={styles['add-logos']}>
          <Image src='/assets/img/Sony_logo1.png' width={48} height={8}/>
          <Image src='/assets/img/Microsoft_logo_(2012)1.png' width={63} height={13}/>
          <Image src='/assets/img/layer1.png' width={61} height={15}/>
          <Image src='/assets/img/Verizon_2015_logo_-vector1.png' width={58} height={12}/>
        </div>
       </div>
       <Image className={styles['add-preview'] } onClick={()=>handleShowPopup()} src='/assets/img/Preview.png' width={153} height={87}/>
      </div>
      <motion.section
        className={styles["first-screen-card"]}
      >
        <div id='cardHeader' className={`${styles['first-screen-card-header']} ${isSticky ? styles.sticky : ''}`}>
          <p>Proven path to 100X returns: <Link to="invest" smooth={true} duration={700}>See our metrics below</Link></p>
           {isSticky && ( <button onClick={(e)=>handleRemoveItem(e, 'card-header')} className={styles['remove-btn']}></button>)}

        </div>
        <Image className={`${styles['logo']} ${isSticky ? styles.sticky : ''}`}src='/assets/img/footer-logo.png' width={66} height={20}/>
        <div className={styles.content}>
            <HomeSlider/>
            <div className={styles['right-side']}>
              <h1 className={styles["main-title"]}>100 Franklins&#39; Journey <br/>to <span className={styles['text-gradient']}>Unicorn Status</span>: Backed by Numbers,<br/> Not Promises</h1>
              <h1 className={`${styles["main-title"]} ${styles.mobile}`}>100 Franklins&#39; Journey <br/> to <span className={styles['text-gradient']}>Unicorn Status</span> : Backed by Numbers, Not Promises</h1>
              <p className={styles.subtitle}>We are building a unified platform <br/>connecting qualified Web3 projects <br/>with an educated audience</p>
              <Link to="contacts" smooth={true} duration={700} className={styles['schedule-btn']}>Schedule Demo</Link>
            </div>
            
        </div>
        <NewsPlugin/>
      </motion.section>
      <motion.section
      
        className={styles["global-problem"]}
      
        >
        <span className={styles['section-marker']}></span>
          <svg className={styles['marker-line']} xmlns="http://www.w3.org/2000/svg" width="2" height="105" viewBox="0 0 2 105" fill="none">
          <line x1="1" y1="4.37114e-08" x2="0.999995" y2="105" stroke="#FF6054" stroke-width="2" stroke-dasharray="2 2"/>
          </svg>
          <svg className={styles['central-marker-line']} xmlns="http://www.w3.org/2000/svg" width="2" height="522" viewBox="0 0 2 522" fill="none">
            <path d="M1 0.5L1 317.5M0.999995 522L0.999995 471" stroke="url(#paint0_linear_1_1538)" stroke-width="2" stroke-dasharray="2 2"/>
            <defs>
            <linearGradient id="paint0_linear_1_1538" x1="0.999986" y1="0.5" x2="1.00001" y2="541.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF6054"/>
            <stop offset="1" stop-color="#23FFBE"/>  
            </linearGradient>
            </defs>
          </svg>
        <h1 className={styles['main-title']}>GLOBAL PROBLEM</h1>
        <div  className={styles['global-problem-wrapper']}>
          
        <svg
            className={styles["section-line"]}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 976 996"
            preserveAspectRatio="none"
          >
            <rect
              x="1"
              y="1"
              width="974"
              height="994"
              rx="14"
              stroke="url(#paint0_linear_1741_1597)"
              strokeWidth="2"
              strokeDasharray="2 2"
              fill="none"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1741_1597"
                x1="488"
                y1="0"
                x2="496.649"
                y2="996.003"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF6054" />
                <stop offset="1" stopColor="#23FFBE" />
              </linearGradient>
            </defs>
          </svg>
          <svg
  className={`${styles["section-line"]} ${styles.mobile}`}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 358 1517"
  preserveAspectRatio="none"
  fill="none"
>
  <g clip-path="url(#clip0_1_3096)">
    <g opacity="0.45" filter="url(#filter0_f_1_3096)">
      <circle cx="401" cy="1339" r="206" fill="#FF5245" />
    </g>
    <g opacity="0.45" filter="url(#filter1_f_1_3096)">
      <path
        d="M413 1777.01C413 1890.78 238.771 1869.51 125 1869.51C11.2293 1869.51 -81 1777.28 -81 1663.51C-81 1549.74 63 1216.51 125 1457.51C125 1585.51 413 1663.24 413 1777.01Z"
        fill="#23FFBE"
      />
    </g>
  </g>
  <rect
    x="1"
    y="1"
    width="356"
    height="1515"
    rx="14"
    stroke="url(#paint0_linear_1_3096)"
    strokeWidth="2"
    strokeDasharray="2 2"
  />
  <defs>
    <filter
      id="filter0_f_1_3096"
      x="75"
      y="1013"
      width="652"
      height="652"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1_3096" />
    </filter>
    <filter
      id="filter1_f_1_3096"
      x="-201"
      y="1252"
      width="734"
      height="739.083"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1_3096" />
    </filter>
    <linearGradient
      id="paint0_linear_1_3096"
      x1="179"
      y1="0"
      x2="233.634"
      y2="1515.15"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#FF6054" />
      <stop offset="1" stopColor="#23FFBE" />
    </linearGradient>
    <clipPath id="clip0_1_3096">
      <rect width="358" height="1517" rx="15" fill="white" />
    </clipPath>
  </defs>
</svg>

          <div className={styles.content}>
            <p className={styles.subtitle}>The crypto market lacks a sustainable development mechanism, hurting both projects and investors</p>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3 className={styles['card-title']}>70% Projects Fail</h3>
                <ul className={styles['card-list']}>
                  <li className={styles['card-list-item']}>
                    Can&#39;t create quality products due to speculative pressure
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
                    100+ Crypto Projects Launched
                  </p>
                  <div className={styles['item-projects-list']}>
                      <div className={styles['animation-container']}>
                          <div className={styles['left-animation']}>
                              <div><Image src="/assets/img/Group48095533.png" alt="abc" width={95} height={35}/></div>
                              <div><Image src="/assets/img/imag17.png" alt="lbank" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095535.png" alt="bitmart" width={95} height={35}/></div>
                              <div ><Image src="/assets/img/jjf-1.png" alt="fyzon" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095532.png" alt="ton" width={95} height={35}/></div>
                          </div>  
                          <div className={styles['left-animation']}>
                              <div><Image src="/assets/img/Group48095533.png" alt="abc" width={95} height={35}/></div>
                              <div><Image src="/assets/img/imag17.png" alt="lbank" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095535.png" alt="bitmart" width={95} height={35}/></div>
                              <div ><Image src="/assets/img/jjf-1.png" alt="fyzon" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095532.png" alt="ton" width={95} height={35}/></div>
                          </div>  
                         
                      </div>
                      <div className={styles['animation-container']}>
                        <div className={styles['right-animation']}>   
                            <div><Image src="/assets/img/Group48095529.png" alt="bitgert" width={95} height={35}/></div>
                            <div><Image className={styles.private} src="/assets/img/Group48095531.png" alt="private" width={95} height={35}/></div>
                            <div ><Image src="/assets/img/Grou48095530.png" alt="ontology" width={95} height={35}/></div>
                            <div><Image src="/assets/img/Group48095537.png" alt="chainlink" width={95} height={35}/></div>
                            <div><Image src="/assets/img/image8.png" alt="metashooter" width={95} height={35}/></div>
                            <div ><Image src="/assets/img/image6.png" alt="vaiot" width={95} height={35}/></div>
                        </div>  
                        <div className={styles['right-animation']}>
                           
                            <div><Image src="/assets/img/Group48095529.png" alt="bitgert" width={95} height={35}/></div>
                            <div><Image className={styles.private} src="/assets/img/Group48095531.png" alt="private" width={95} height={35}/></div>
                            <div  ><Image src="/assets/img/Grou48095530.png" alt="ontology" width={95} height={35}/></div>
                            <div><Image src="/assets/img/Group48095537.png" alt="chainlink" width={95} height={35}/></div>
                            <div><Image src="/assets/img/image8.png" alt="metashooter" width={95} height={35}/></div>
                            <div><Image src="/assets/img/image6.png" alt="vaiot" width={95} height={35}/></div>
                        </div>  
                      </div> 
                      <div className={styles['animation-container']}>
                          <div className={styles['left-animation']}>
                              <div><Image src="/assets/img/vsbsx.png" alt="magiscan" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095528.png" alt="bitforex" width={95} height={35}/></div>
                            
                              <div><Image src="/assets/img/Group48095534.png" alt="legion" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095537.png" alt="sertik" width={95} height={35}/></div>
                              <div><Image src="/assets/img/image4r2.png" alt="floki" width={95} height={35}/></div>
                              <div><Image src="/assets/img/imageg3.png" alt="apespwap" width={95} height={35}/></div>
                          </div>  
                          <div className={styles['left-animation']}>
                              <div><Image src="/assets/img/vsbsx.png" alt="magiscan" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095528.png" alt="bitforex" width={95} height={35}/></div>
                            
                              <div><Image src="/assets/img/Group48095534.png" alt="legion" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095537.png" alt="sertik" width={95} height={35}/></div>
                              <div><Image src="/assets/img/image4r2.png" alt="floki" width={95} height={35}/></div>
                              <div><Image src="/assets/img/imageg3.png" alt="apespwap" width={95} height={35}/></div>
                          </div> 
                      </div>
                  </div>
                </div>
                <div className={styles['market-item']}>
                  <p>
                  Direct access to top exchanges and launchpads <span>(ByBit, Gate.io, Bitget, MEXc, BingX, OKX, DAO Maker, Zelwin)</span>
                  </p>
                  <div className={styles['item-projects-list']}>
                      <div className={styles['animation-container']}>
                          <div className={styles['left-animation']}>
                              <div><Image src="/assets/img/cbxx.png" alt="bing" width={60} height={20}/></div>
                              <div><Image src="/assets/img/Group48095525.png" alt="mexc" width={60} height={20}/></div>
                              <div><Image src="/assets/img/Group48095526.png" alt="bybit" width={60} height={20}/></div>
                              <div ><Image src="/assets/img/imagevdssvb.png" alt="biget" width={60} height={20}/></div>
                              <div><Image src="/assets/img/vxzvx.png" alt="okx" width={60} height={20}/></div>
                              <div><Image src="/assets/img/zv15.png" alt="gate" width={78} height={20}/></div>
                          </div>  
                          <div className={styles['left-animation']}>
                              <div><Image src="/assets/img/cbxx.png" alt="bing" width={60} height={20}/></div>
                              <div><Image src="/assets/img/Group48095525.png" alt="mexc" width={60} height={20}/></div>
                              <div><Image src="/assets/img/Group48095526.png" alt="bybit" width={60} height={20}/></div>
                              <div ><Image src="/assets/img/imagevdssvb.png" alt="biget" width={60} height={20}/></div>
                              <div><Image src="/assets/img/vxzvx.png" alt="okx" width={60} height={20}/></div>
                              <div><Image src="/assets/img/zv15.png" alt="gate" width={60} height={20}/></div>
                          </div>  
                      </div>
                      <div className={styles['animation-container']}>
                        <div className={styles['right-animation']}>   
                            <div><Image src="/assets/img/cbxx.png" alt="bing" width={60} height={20}/></div>
                            <div><Image src="/assets/img/Group48095525.png" alt="mexc" width={60} height={20}/></div>
                            <div><Image src="/assets/img/Group48095526.png" alt="bybit" width={60} height={20}/></div>
                            <div ><Image src="/assets/img/imagevdssvb.png" alt="biget" width={60} height={20}/></div>
                            <div><Image src="/assets/img/vxzvx.png" alt="okx" width={60} height={20}/></div>
                            <div><Image src="/assets/img/image6.png" alt="vaiot" width={95} height={35}/></div>
                        </div>  
                        <div className={styles['right-animation']}>   
                            <div><Image src="/assets/img/cbxx.png" alt="bing" width={60} height={20}/></div>
                            <div><Image src="/assets/img/Group48095525.png" alt="mexc" width={60} height={20}/></div>
                            <div><Image src="/assets/img/Group48095526.png" alt="bybit" width={60} height={20}/></div>
                            <div ><Image src="/assets/img/imagevdssvb.png" alt="biget" width={60} height={20}/></div>
                            <div><Image src="/assets/img/vxzvx.png" alt="okx" width={60} height={20}/></div>
                            <div><Image src="/assets/img/image6.png" alt="vaiot" width={95} height={35}/></div>
                        </div>  
                       
                      </div> 
                  </div>
                </div>
                <div className={styles['market-item']}>
                  <p>
                  Partnerships with 1’000+ crypto communities & crypto influencers with a combined audience of over 1 billion followers
                  </p>
                  <div className={styles['market-item-images']}>
                    <Image className={styles['market-items-img']} src='/assets/img/icons/facebook.png' width={32} height={32}/>
                    <Image className={styles['market-items-img']} src='/assets/img/icons/twitter.png' width={32} height={32}/>
                    
                    <Image className={styles['market-items-img']} src='/assets/img/icons/instagram.png' width={27} height={27}/>
                    <Image className={styles['market-items-img']} src='/assets/img/icons/youtube.png' width={38} height={27}/>
                  
                  </div>
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
        className={styles["exeptional-solution"]}
      
      >
      <span className={styles['section-marker']}></span>
      <span className={styles['section-line1']}></span>
        <svg  className={styles['marker-line']} xmlns="http://www.w3.org/2000/svg" width="2" height="105" viewBox="0 0 2 105" fill="none">
        <line x1="1" y1="4.37114e-08" x2="0.999995" y2="105" stroke="#23FFBE" stroke-width="2" stroke-dasharray="2 2"/>
        </svg>
        <h1 className={styles['main-title']}>EXCEPTIONAL SOLUTION</h1>
        <div  className={styles['exeptional-solution-wrapper']}>
        <svg
  className={styles['section-line']}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 976 1750"
  preserveAspectRatio="none"
  fill="none"
>
  <rect
    x="1"
    y="1"
    width="974"
    height="1748"
    rx="14"
    stroke="url(#paint0_linear_1741_1754)"
    strokeWidth="2"
    strokeDasharray="2 2"
    fill="none"
  />
  <defs>
    <linearGradient
      id="paint0_linear_1741_1754"
      x1="488"
      y1="0"
      x2="488"
      y2="1120.75"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#23FFBE" />
      <stop offset="1" stopColor="#23FFBE" stopOpacity="0.39" />
    </linearGradient>
  </defs>
        </svg>
        
        <svg
  className={`${styles["section-line"]} ${styles.mobile}`}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 358 2205"
  preserveAspectRatio="none"
  fill="none"
>
  <g clipPath="url(#clip0_1904_1421)">
    <g opacity="0.45" filter="url(#filter0_f_1904_1421)">
      <circle cx="351" cy="2056" r="206" fill="#FFDF2C" />
    </g>
    <g opacity="0.45" filter="url(#filter1_f_1904_1421)">
      <path
        d="M363 2494.01C363 2607.78 188.771 2586.51 75 2586.51C-38.7707 2586.51 -131 2494.28 -131 2380.51C-131 2266.74 13 1933.51 75 2174.51C75 2302.51 363 2380.24 363 2494.01Z"
        fill="#23FFBE"
      />
    </g>
  </g>
  <rect
    x="1"
    y="1"
    width="356"
    height="2203"
    rx="14"
    stroke="url(#paint0_linear_1904_1421)"
    strokeWidth="2"
    strokeDasharray="2 2"
    fill="none"
  />
  <defs>
    <filter
      id="filter0_f_1904_1421"
      x="25"
      y="1730"
      width="652"
      height="652"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1904_1421" />
    </filter>
    <filter
      id="filter1_f_1904_1421"
      x="-251"
      y="1969"
      width="734"
      height="739.083"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1904_1421" />
    </filter>
    <linearGradient
      id="paint0_linear_1904_1421"
      x1="179"
      y1="1.1184e-06"
      x2="294.261"
      y2="2199.13"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#23FFBE" />
      <stop offset="1" stopColor="#23FFBE" />
    </linearGradient>
    <clipPath id="clip0_1904_1421">
      <rect width="358" height="2205" rx="15" fill="white" />
    </clipPath>
  </defs>
</svg>
          <div className={styles.content}>
            <h2 className={styles['secondary-title']}>WHAT MAKES <br></br>AN EFFECTIVE SOLUTION?</h2>
            <p className={styles.subtitle}>Over the years, we&#39;ve crystallized our understanding of what the market truly needs</p>
            <strong>We&#39;ve validated this by creating a manual prototype that generated $340K+ revenue in less than 12 months</strong>
            <div className={styles['card-section']}> 
              <svg  className={styles['section-line']} xmlns="http://www.w3.org/2000/svg" width="2" height="54" viewBox="0 0 2 54" fill="none">
              <path d="M1 0L1 54" stroke="url(#paint0_linear_1_1539)" stroke-width="2" stroke-dasharray="2 2"/>
              <defs>
              <linearGradient id="paint0_linear_1_1539" x1="0.999997" y1="22.4458" x2="1.00001" y2="374.421" gradientUnits="userSpaceOnUse">
              <stop stop-color="#23FFBE"/>
              <stop offset="1" stop-color="#23FFBE"/>
              </linearGradient>
              </defs>
            </svg>
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
              <svg className={styles['section-line']} xmlns="http://www.w3.org/2000/svg" width="2" height="75" viewBox="0 0 2 75" fill="none">
<path d="M1 0L1 75" stroke="url(#paint0_linear_1_1541)" stroke-width="2" stroke-dasharray="2 2"/>
<defs>
<linearGradient id="paint0_linear_1_1541" x1="0.999995" y1="31.1747" x2="1.00002" y2="520.03" gradientUnits="userSpaceOnUse">
<stop stop-color="#23FFBE"/>
<stop offset="1" stop-color="#23FFBE"/>
</linearGradient>
</defs>
</svg>
              <h3 className={styles['third-title']}>Business Model</h3>
              <div className={styles['buisness-model-wrapper']}>
               
                  <svg className={`${styles['buisness-model-lines']}`} xmlns="http://www.w3.org/2000/svg" width="574" height="181" viewBox="0 0 574 181" fill="none">
                    <path d="M567 46L5 46" stroke="#08F8FF" stroke-width="2"/>
                    <path d="M568 90.7735L573.774 85L568 79.2265L562.226 85L568 90.7735ZM569 85L569 45L567 45L567 85L569 85Z" fill="#08F8FF"/>
                    <path d="M455 180.774L460.774 175L455 169.226L449.226 175L455 180.774ZM456 175L456 45L454 45L454 175L456 175Z" fill="#08F8FF"/>
                    <path d="M343 90.7735L348.774 85L343 79.2265L337.226 85L343 90.7735ZM344 85L344 45L342 45L342 85L344 85Z" fill="#08F8FF"/>
                    <path d="M289.333 6.08887C289.333 3.14335 286.946 0.755535 284 0.755535C281.054 0.755535 278.667 3.14335 278.667 6.08887C278.667 9.03439 281.054 11.4222 284 11.4222C286.946 11.4222 289.333 9.03439 289.333 6.08887ZM285 46.0889L285 6.08887L283 6.08887L283 46.0889L285 46.0889Z" fill="#08F8FF"/>
                    <path d="M230 180.774L235.774 175L230 169.226L224.226 175L230 180.774ZM231 175L231 45L229 45L229 175L231 175Z" fill="#08F8FF"/>
                    <path d="M118 90.7735L123.774 85L118 79.2265L112.226 85L118 90.7735ZM119 85L119 45L117 45L117 85L119 85Z" fill="#08F8FF"/>
                    <path d="M6 180.774L11.7735 175L6 169.226L0.226497 175L6 180.774ZM7 175L6.99999 45L4.99999 45L5 175L7 175Z" fill="#08F8FF"/>
                  </svg>
                  <svg className={`${styles['buisness-model-lines']} ${styles.mobile}`} xmlns="http://www.w3.org/2000/svg" width="225" height="221" viewBox="0 0 225 221" fill="none">
                  <path d="M220 46L6 46" stroke="#08F8FF" stroke-width="2"/>
                  <path d="M219 80.7735L224.774 75L219 69.2265L213.226 75L219 80.7735ZM220 75L220 45L218 45L218 75L220 75Z" fill="#08F8FF"/>
                  <path d="M176 180.774L181.774 175L176 169.226L170.226 175L176 180.774ZM177 175L177 46L175 46L175 175L177 175Z" fill="#08F8FF"/>
                  <path d="M134 110.774L139.774 105L134 99.2265L128.226 105L134 110.774ZM135 105L135 45L133 45L133 105L135 105Z" fill="#08F8FF"/>
                  <path d="M119.333 6C119.333 3.05449 116.946 0.666668 114 0.666668C111.054 0.666668 108.667 3.05449 108.667 6C108.667 8.94552 111.054 11.3333 114 11.3333C116.946 11.3333 119.333 8.94552 119.333 6ZM115 46L115 6L113 6L113 46L115 46Z" fill="#08F8FF"/>
                  <path d="M91 220.774L96.7735 215L91 209.226L85.2265 215L91 220.774ZM92 215L92 46L90 46L90 215L92 215Z" fill="#08F8FF"/>
                  <path d="M49 80.7735L54.7735 75L49 69.2265L43.2265 75L49 80.7735ZM50 75L50 45L48 45L48 75L50 75Z" fill="#08F8FF"/>
                  <path d="M6.5 180.685L12.2735 174.911L6.5 169.138L0.726497 174.911L6.5 180.685ZM7.5 174.911L7.49999 44.9111L5.49999 44.9111L5.5 174.911L7.5 174.911Z" fill="#08F8FF"/>
                  </svg>
                  <div className={styles['buisness-model-item']}>
                    <div className={styles['buisness-model-list-icon']}>
                      <Image  src='/assets/img/Platform.png' width={25} height={25}/>
                    </div>
                    <h3 className={styles['model-title']}>Platform Subscriptions</h3>
                  </div>
                  <div className={styles['buisness-model-item']}>
                    <div className={styles['buisness-model-list-icon']}>
                      <Image  src='/assets/img/Project.png' width={25} height={25}/>
                    </div>
                    <h3 className={styles['model-title']}>Project Commission</h3>
                  </div>
                  <div className={styles['buisness-model-item']}>
                    <div className={styles['buisness-model-list-icon']}>
                      <Image  src='/assets/img/Marketplace .png' width={25} height={25}/>
                    </div>
                    <h3 className={styles['model-title']}>Marketplace Revenue</h3>
                  </div>
                  <div className={styles['buisness-model-item']}>
                    <div className={styles['buisness-model-list-icon']}>
                      <Image  src='/assets/img/Staking.png' width={25} height={25}/>
                    </div>
                    <h3 className={styles['model-title']}>Staking Fees</h3>
                  </div>
                  <div className={styles['buisness-model-item']}>
                    <div className={styles['buisness-model-list-icon']}>
                      <Image  src='/assets/img/Advertising.png' width={25} height={25}/>
                    </div>
                    <h3 className={styles['model-title']}>Advertising Revenue</h3>
                  </div>
                  <div className={styles['buisness-model-item']}>
                    <div className={styles['buisness-model-list-icon']}>
                      <Image  src='/assets/img/Service.png' width={25} height={25}/>
                    </div>
                    <h3 className={styles['model-title']}>Service Packages</h3>
                  </div>
              </div>
            </div>
            <div className={styles['card-section']}>
              <svg className={styles['section-line']} xmlns="http://www.w3.org/2000/svg" width="2" height="75" viewBox="0 0 2 75" fill="none">
<path d="M1 0L1 75" stroke="url(#paint0_linear_1_1541)" stroke-width="2" stroke-dasharray="2 2"/>
<defs>
<linearGradient id="paint0_linear_1_1541" x1="0.999995" y1="31.1747" x2="1.00002" y2="520.03" gradientUnits="userSpaceOnUse">
<stop stop-color="#23FFBE"/>
<stop offset="1" stop-color="#23FFBE"/>
</linearGradient>
</defs>
</svg>
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
                    <li className={`${styles['card-list-item']} ${styles.mobile}`}>
                    Platform Demo: <br/><span> Detailed video mockup of the platform functionality</span>
                    </li>
                    <li className={styles['card-list-item']}>
                    Platform Demo: <br/><span> Detailed video mockup <br/>of the platform functionality</span>
                    </li>
                  </ul>
                </div>
                <div className={styles.card}>
                  <span className={styles['card-header']}>Product vision</span>
                  <p className={styles['vision-title']}>Target Valuation: $2.5 Billion</p>
                  <p className={styles['vision-subtitle']}> $265,000,000 Annual Turnover</p>
                  <p className={styles['vision-note']}>1,000,000 Total Users, 100,000 Paid Users</p>
                  <ul className={styles['card-list']}>
                    <li className={styles['card-list-item']}>
                      3 Patents Pending:<br/><span> Core technology IP protection</span>
                    </li>
                    <li className={styles['card-list-item']}>
                    3-Year Strategy:<br/><span> Detailed development and growth roadmap</span>
                    </li>
                  </ul>
                </div>
              
              </div>
            </div>
            <h3 className={`${styles['third-title']} ${styles.margin}`}>REVIEW OUR VISION</h3>
            <p className={styles.subtitle}>See how we&#39;ll build the first sustainable crypto platform</p>
            <ReviewPlatformSlider/>
            <Link smooth={true} duration={700} to="contacts" className={styles['schedule-btn']}>Request Platform Demo</Link>
          </div>
        </div>
      </motion.section>
      <motion.section
        className={styles["consumers"]}
        
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
        <svg
  className={styles['section-line']}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 976 4712"
  preserveAspectRatio="none"
  fill="none"
>
  <g clipPath="url(#clip0_1741_2330)">
    <g opacity="0.45" filter="url(#filter0_f_1741_2330)">
      <path
        d="M249 1892.01C249 2005.78 74.7707 1984.51 -39 1984.51C-152.771 1984.51 -245 1892.28 -245 1778.51C-245 1664.74 -101 1331.51 -39 1572.51C-39 1700.51 249 1778.24 249 1892.01Z"
        fill="#FFDF2C"
      />
    </g>
    <g opacity="0.45" filter="url(#filter1_f_1741_2330)">
      <circle cx="1037" cy="1607" r="206" fill="#FFDF2C" />
    </g>
    <g opacity="0.45" filter="url(#filter2_f_1741_2330)">
      <path
        d="M249 4656.01C249 4769.78 74.7707 4748.51 -39 4748.51C-152.771 4748.51 -245 4656.28 -245 4542.51C-245 4428.74 -101 4095.51 -39 4336.51C-39 4464.51 249 4542.24 249 4656.01Z"
        fill="#FFDF2C"
      />
    </g>
    <g opacity="0.45" filter="url(#filter3_f_1741_2330)">
      <circle cx="1037" cy="4371" r="206" fill="#FFDF2C" />
    </g>
    <g opacity="0.45" filter="url(#filter4_f_1741_2330)">
      <circle cx="14" cy="-17" r="106" fill="#FFDF2C" />
    </g>
  </g>
  <rect
    x="1"
    y="1"
    width="974"
    height="4710"
    rx="14"
    stroke="url(#paint0_linear_1741_2330)"
    strokeWidth="2"
    strokeDasharray="2 2"
    fill="none" 
  />
  <defs>
    <filter
      id="filter0_f_1741_2330"
      x="-445"
      y="1287"
      width="894"
      height="899.083"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1741_2330" />
    </filter>
    <filter
      id="filter1_f_1741_2330"
      x="631"
      y="1201"
      width="812"
      height="812"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1741_2330" />
    </filter>
    <filter
      id="filter2_f_1741_2330"
      x="-445"
      y="4051"
      width="894"
      height="899.083"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1741_2330" />
    </filter>
    <filter
      id="filter3_f_1741_2330"
      x="631"
      y="3965"
      width="812"
      height="812"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1741_2330" />
    </filter>
    <filter
      id="filter4_f_1741_2330"
      x="-442"
      y="-473"
      width="912"
      height="912"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_1741_2330" />
    </filter>
    <linearGradient
      id="paint0_linear_1741_2330"
      x1="488"
      y1="0"
      x2="488"
      y2="3017.7"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#FFDF2C" />
      <stop offset="1" stopColor="#FFDF2C" stopOpacity="0.39" />
    </linearGradient>
    <clipPath id="clip0_1741_2330">
      <rect width="976" height="4712" rx="15" fill="white" />
    </clipPath>
  </defs>
</svg>
<svg
 className={`${styles["section-line"]} ${styles.mobile}`}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 358 7688"
  preserveAspectRatio="none"
  fill="none"
>
  <g clipPath="url(#clip0_1905_1875)">
    <g opacity="0.45" filter="url(#filter0_f_1905_1875)">
      <circle cx="351" cy="7578" r="206" fill="#FFDF2C" />
    </g>
    <g opacity="0.45" filter="url(#filter1_f_1905_1875)">
      <path
        d="M363 8016.01C363 8129.78 188.771 8108.51 75 8108.51C-38.7707 8108.51 -131 8016.28 -131 7902.51C-131 7788.74 13 7455.51 75 7696.51C75 7824.51 363 7902.24 363 8016.01Z"
        fill="#FFDF2C"
      />
    </g>
  </g>
  <rect
    x="1"
    y="1"
    width="356"
    height="7686"
    rx="14"
    stroke="url(#paint0_linear_1905_1875)"
    strokeWidth="2"
    strokeDasharray="2 2"
    fill="none"
  />
  <defs>
    <filter
      id="filter0_f_1905_1875"
      x="25"
      y="7252"
      width="652"
      height="652"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1905_1875" />
    </filter>
    <filter
      id="filter1_f_1905_1875"
      x="-251"
      y="7491"
      width="734"
      height="739.083"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1905_1875" />
    </filter>
    <linearGradient
      id="paint0_linear_1905_1875"
      x1="179"
      y1="3.89942e-06"
      x2="1538.62"
      y2="7440.14"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#FFDF2C" />
      <stop offset="1" stopColor="#FFDF2C" />
    </linearGradient>
    <clipPath id="clip0_1905_1875">
      <rect width="358" height="7688" rx="15" fill="white" />
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
                  <span className={styles['card-note']}>USERS</span>
                  <div>
                    <p className={styles['numbers-title']}>1B+ <span>Crypto Audience</span></p>
                    <ul className={styles['card-list']}>
                      <li className={styles['card-list-item']}>
                      Through 1’000+ crypto influencers & communities
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className={styles['numbers-title']}>27K+ <span>Waiting List</span></p>
                    <ul className={styles['card-list']}>
                      <li className={styles['card-list-item']}>
                      Ready to join at launch
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.card}>
                <span className={styles['card-note']}>PROJECTS</span>
                  <p className={styles['card-title']}>Direct Access<br/>To Top Exchanges <br/>And Launchpads
                </p>
                  <ul className={styles['card-list']}>
                    <li className={styles['card-list-item']}>
                    Established relationships with top management at ByBit, Gate.io, Bitget, MEXc, BingX, KuCoin, OKX, DAO Maker, Zelwin
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles['card-section']}>
              <h3 className={styles['third-title']}>CONSERVATIVE PATH TO UNICORN</h3>
              <svg  className={styles["section-line"]} xmlns="http://www.w3.org/2000/svg" width="3" height="72" viewBox="0 0 3 72" fill="none">
              <path d="M2 1L1 71" stroke="#FFDF2C" stroke-width="2" stroke-dasharray="2 2"/>
              </svg>
             
              <p className={styles['numbers-title']}>0.005%</p>
              <p className={styles.subtitle}>That&#39;s all we need from our existing audience base</p>
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
              <svg  className={styles["section-line"]} xmlns="http://www.w3.org/2000/svg" width="3" height="72" viewBox="0 0 3 72" fill="none">
              <path d="M2 1L1 71" stroke="#FFDF2C" stroke-width="2" stroke-dasharray="2 2"/>
              </svg>
                <p className={styles.subtitle}>Multiplying our growth through additional channels together with warm audience base engagement</p>
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
                  <h3 className={styles['card-title']}>COLLABORATIONS</h3>
                  <div className={styles['collaborations-images']}>
                    <Image  src='/assets/img/Bybit.png' width={72} height={28}/>
                    <Image  src='/assets/img/gate.png' width={121} height={34}/>
                    <Image  src='/assets/img/biget.png' width={91} height={29}/>
                    <Image  src='/assets/img/mexc.png' width={207} height={21}/>
                    <Image  src='/assets/img/okk.png' width={80} height={22}/>
                    <Image  src='/assets/img/Bingxlogo1.png' width={96} height={28}/>
                    <Image  src='/assets/img/DAOMake2.png' width={157} height={41}/>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['card-section']}>
              <h3 className={styles['third-title']}>MULTIPLYING <span className={styles['text-gradient']}>UNICORN</span> STATUS</h3>
              <svg  className={styles["section-line"]} xmlns="http://www.w3.org/2000/svg" width="3" height="72" viewBox="0 0 3 72" fill="none">
              <path d="M2 1L1 71" stroke="#FFDF2C" stroke-width="2" stroke-dasharray="2 2"/>
              </svg>
              <Image className={styles.chart} src='/assets/img/chart.png' width={575} height={250}/>
              <p className={styles.subtitle}>Each new channel multiplies our reach & valuation</p>
              <div className={styles['charts-container']}>
                <Image src='/assets/img/Group48095381.png' width={322} height={248}/>
                <Image src='/assets/img/Group48095382.png' width={246} height={248}/>
                <Image src='/assets/img/Group48095381-1.png' width={312} height={248}/>
              </div>
            </div>
            <div className={styles['card-section']}>
              <h3 className={styles['third-title']}>Unstoppable 100F team</h3>
              <svg  className={styles["section-line"]} xmlns="http://www.w3.org/2000/svg" width="3" height="72" viewBox="0 0 3 72" fill="none">
              <path d="M2 1L1 71" stroke="#FFDF2C" stroke-width="2" stroke-dasharray="2 2"/>
              </svg>
              <div>
                <div className={styles['team-group']}>
                  <h3 className={styles['team-title']}>Founders</h3>
                  <div>
                    <div className={styles['team-group-item']}>
                      <Image className={styles['member-img']} src='/assets/img/kir.png' width={150} height={136}/>
                      <p className={styles['member-title']}>Kir Ulanov, <br/> CEO</p>
                      <a className={styles['member-link']} href='https://www.linkedin.com/in/kirulanov/' target='_blank'>
                        <Image src='/assets/img/icons/linkedin.png' width={14} height={14}/>
                        @kirulanov
                      </a>
                      <div className={styles['member-desc']}>
                        <p>
                        14+ years in entrepreneurship, digital marketing, online education & 6+ years of expertise in Web3 marketing
                        </p>
                        <p>Former Founder & CEO of Marketing Gamers – built from scratch over 12 years into a 7-figure digital marketing holding with expertise in 100+ niches and 10,000+ clients</p>
                        <p>Author of the book &#39;Client Generator&#39;, a winner of the Book Oscar</p>
                      </div>
                    </div>
                    <div className={styles['team-group-item']}>
                      <Image className={styles['member-img']} src='/assets/img/ksander.png' width={150} height={136}/>
                      <p className={styles['member-title']}>Aleksandr Yakimtsou, CPO</p>
                      <a className={styles['member-link']} href='https://www.linkedin.com/in/ksanderkim/' target='_blank'>
                        <Image src='/assets/img/icons/linkedin.png' width={14} height={14}/>
                        @ksanderkim
                      </a>
                      <div className={styles['member-desc']}>
                        <p>
                        12+ years expertise in Crypto & Ed-Tech
                        </p>
                        <p>Architect of an app for crypto bots and automated sales funnels, leveraging expertise from Marketing Gamers, whose products served over 100,000 users</p>
                        <p>Founded & scaled e-commerce/edu businesses with focus on automation & int&#39;l expansion</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles['team-group']}>
                  <h4 className={styles['team-title']}>C-level team</h4>
                  <div>
                    <div className={styles['team-group-item']}>
                      <Image className={styles['member-img']} src='/assets/img/alex.png' width={150} height={136}/>
                      <p className={styles['member-title']}>Alex Pomelnikov, Phd, CFO</p>
                      <a className={styles['member-link']} href='https://www.linkedin.com/in/apomelnikov/' target='_blank'>
                        <Image  src='/assets/img/icons/linkedin.png' width={14} height={14}/>
                        @apomelnikov
                      </a>
                      <div className={styles['member-desc']}>
                        <p>
                        PhD in Economics, 17+ years expertise in Finance & Economics, Former founder of 2 international businesses, Investor-analyst, having evaluated hundreds of projects valued between $1 million and $500 million, resulting in over $60 million in successful investments</p>
                      </div>
                    </div>
                    <div className={styles['team-group-item']}>
                      <Image className={styles['member-img']} src='/assets/img/vadim.png' width={150} height={136}/>
                      <p className={styles['member-title']}>Vadim Golubtsov, COO</p>
                      <div className={styles['member-desc']}>
                        <p>16+ years of expertise in IT, with experience architecting and leading high-performance teams to build IT solutions for enterprises and SMBs across MarTech, EdTech, FinTech, HR, and Web3 in the USA and internationally. Formerly with Hewlett-Packard, certified HP Instructor, IT Service Manager, ITIL Expert</p>
                      </div>
                    </div>
                  </div>
                 
                  <div className={styles['team-group-item']}>
                    <Image className={styles['member-img']} src='/assets/img/igor.png' width={150} height={136}/>
                    <div>
                      <p className={styles['member-title']}>Igor Jalenco, <br/>
                      CBDO</p>
                      <div className={styles['member-desc']}>
                        <p>13+ years expertise in EdTech, Marketing & StartUps, managed corporate education programs for IT companies with 300+ employees valued at $500M+. Led growth of international EdTech business to 5 countries (UAE, KSA, Kazakhstan, Ukraine, Azerbaijan), reaching 14K+ students. As Project Lead, successfully launched and scaled digital projects MySoul.help and Smartexpert.net from scratch</p>
                      </div>
                    </div>
                  
                  </div>
                  
                </div>
              </div>
              <div className={styles['team-group']}>
                <h4 className={styles['team-title']}>Advisors</h4>
                <div>
                <div className={styles['team-group-item']}>
                  <Image className={styles['member-img']} src='/assets/img/jack.png' width={150} height={136}/>
                  <p className={styles['member-title']}>Dr. Jack<br/> Torobin</p>
                  <a className={styles['member-link']} href='https://www.linkedin.com/in/jtorobin/' target='_blank'>
                    <Image  src='/assets/img/icons/linkedin.png' width={14} height={14}/>
                    @jtorobin
                  </a>
                  <div className={styles['member-desc']}>
                    <p>
                    PhD in Communications and Psychology, 30+ years advising Fortune 500 companies (Microsoft, eBay, Sony Interactive) and startups. Pioneer in digital media and IoT, led successful exits including iKIT (recognized by T3 Magazine as top 10 business device)</p>
                  </div>
                </div>
                <div className={styles['team-group-item']}>
                  <Image className={styles['member-img']} src='/assets/img/yaroslav.png' width={150} height={136}/>
                  <p className={styles['member-title']}>Yaroslav Yaroslavskiy</p>
                  <a className={styles['member-link']} href='https://www.linkedin.com/in/yaroslav-yaroslavskiy/' target='_blank'>
                    <Image  src='/assets/img/icons/linkedin.png' width={14} height={14}/>
                    @yaroslav-yaroslavskiy
                  </a>
                  <div className={styles['member-desc']}>
                    <p>BD Adviser, Ex. Co-Founder & Shareholder UPSWOT, Mentor at Google for Startups, Visa Foundation</p>
                  </div>
                </div>
                <div className={styles['team-group-item']}>
                  <Image className={styles['member-img']} src='/assets/img/nikolay.png' width={150} height={136}/>
                  <p className={styles['member-title']}>NIKOLAY<br/>  SHKILEV</p>
                  <div className={styles['member-desc']}>
                    <p>Founder of Private Business Club for VCs, Zelwin Ecosystem, AR Generation, MagiScan 3D. Rated Top 3 in People of BlockChain by Forbes</p>
                  </div>
                </div>
                <div className={styles['team-group-item']}>
                  <Image className={styles['member-img']} src='/assets/img/andrii.png' width={150} height={136}/>
                  <p className={styles['member-title']}>ANDRII<br/>  KHANTIL</p>
                  <a className={styles['member-link']} href='https://www.linkedin.com/in/khantil-andrii-570a406/' target='_blank'>
                    <Image  src='/assets/img/icons/linkedin.png' width={14} height={14}/>
                    @khantil-andrii
                  </a>
                  <div className={styles['member-desc']}>
                    <p>Strategic Legal Adviser with 20+ years experience in investment structuring. Head of Legal at CyberInnovate LLC, leading Unicorn Nest&#39;s legal operations. Expert in startup acceleration and VC programs, supported 500+ projects</p>
                  </div>
                </div>
                </div>
                
              </div>
              <div className={styles['logos-container']}>
                <Image src='/assets/img/bnv.png' width={63} height={16}/>
                <Image src='/assets/img/floki.png' width={22} height={22}/>
                <Image src='/assets/img/snape.png' width={61} height={16}/>
                <Image src='/assets/img/Grou7.png' width={60} height={16}/>
                <Image src='/assets/img/a858a9a.png' width={65} height={17}/>
                <Image src='/assets/img/full-vaiot2.png' width={67} height={14}/>
                <Image src='/assets/img/channels4.png' width={60} height={19}/>
                <Image src='/assets/img/gass1.png' width={62} height={14}/>
                <Image src='/assets/img/Group48095548.png' width={61} height={19}/>
                <Image src='/assets/img/chainlink-coin2714.png' width={61} height={18}/>
                <Image src='/assets/img/Group8095549.png' width={72} height={16}/>
                <Image src='/assets/img/images-Photoroom.png' width={65} height={14}/>
                <Image src='/assets/img/toncoin-ton.png' width={58} height={25}/>
                <Image src='/assets/img/AIBC-P.png' width={60} height={15}/>
                <Image src='/assets/img/imagehjgg.png' width={63} height={10}/>
                <Image src='/assets/img/full-lbank-logo-Photoroom1.png' width={67} height={12}/>
                <Image src='/assets/img/f4e36bb761bdf872f8ad1bf4137b8c0c.png' width={67} height={20}/>
                <Image src='/assets/img/fxcnvncszx.png' width={58} height={12}/>
                <Image src='/assets/img/mmhuktg1.png' width={55} height={24}/>
                <Image src='/assets/img/dbxn.png' width={60} height={10}/>
                <Image src='/assets/img/Nintendo-Logo.png' width={58} height={16}/>
                <Image src='/assets/img/Verizon.png' width={62} height={13}/>
              </div>
            </div>
            <TeamSlider/>
            <div className={styles['platform-roadmap']}>
                <div className={styles.inner}>
                    <h2 className={styles["main-title"]}>100F Platform Roadmap</h2>
                    <div className={styles['roadmap-container']}>
                        <div className={styles['roadmap-item']}>
                            <Image src='/assets/img/step1.png' width={40} height={40} className={styles['roadmap-icon-step']}/>
                            <p className={styles['roadmap-subtitle']}>Q3 2023-Q3 2024</p>
                            <p className={styles['roadmap-title']}>BOOTSTRAPPING</p>
                            <ul className={styles['roadmap-list']}>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/check-img.png' className={styles['roadmap-icon']} width={13} height={13}/>
                                    <p>Prototype Function 1</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/check-img.png' className={styles['roadmap-icon']} width={13} height={13}/>
                                    <p>211 Paid Users</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/check-img.png' className={styles['roadmap-icon']} width={13} height={13}/>
                                    <p>Prototype Function 2</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/check-img.png' className={styles['roadmap-icon']} width={13} height={13}/>
                                    <p>Prototype Function 3</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/check-img.png' className={styles['roadmap-icon']} width={13} height={13}/>
                                    <p>Prototype Function 4</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/check-img.png' className={styles['roadmap-icon']} width={13} height={13}/>
                                    <p>Validating Platform Concept</p>
                                </li>
                            </ul>
                            <Element name="svgElement" className={styles.line}>
                                <svg ref={svgRef}  xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M0.9823 1.83105H126.05C141.4 1.83105 153.843 14.2744 153.843 29.624V133.847C153.843 142.877 161.163 150.196 170.192 150.196V150.196" 
                                    stroke="#23FFBE" 
                                    strokeWidth="3.26975"
                                    fill="transparent"
                                    strokeDasharray="300"
                                    strokeDashoffset="300"
                                    opacity={animationPlayed ? 1 : 0} 
                                >
                                    <animate 
                                    attributeName="stroke-dashoffset" 
                                    from="300" 
                                    to="0" 
                                    dur="4s" 
                                    fill="freeze" 
                                    id="lineAnimation"
                                    />
                                </path>
                                </svg>
                            </Element>
                        </div>
                        <div className={styles['roadmap-item']}>
                            <ul className={styles['roadmap-list']}>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/yellow-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>MVPs design & development<br/> of a Platform</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/yellow-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>Clickable Prototype<br/> of the Platfrom</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/yellow-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>PreSeed Investment<br/> Round</p>
                                </li>
                            </ul>
                            <div>
                                <Image src='/assets/img/step2.png' width={40} height={40} className={styles['roadmap-icon-step']}/>
                                <p className={styles['roadmap-subtitle']}>Q4 2024</p>
                                <p className={styles['roadmap-title']}>PRESEED</p>
                            </div>
                            <Element name="svgElement" className={styles.line}>
                                <svg  xmlns="http://www.w3.org/2000/svg">
                                <path 
                                  d="M0.246597 196.605H58.6935C74.0431 196.605 86.4864 184.162 86.4864 168.812V129.984V11.8638C86.4864 6.44626 90.8781 2.0545 96.2956 2.0545H105.696" 
                                    stroke="#FFD900" 
                                    strokeWidth="3.26975"
                                    fill="transparent"
                                    strokeDasharray="300"
                                    strokeDashoffset="300"
                                    opacity={animationTwoPlayed ? 1 : 0} 
                                >
                                    <animate 
                                    attributeName="stroke-dashoffset" 
                                    from="300" 
                                    to="0" 
                                    dur="4s" 
                                    fill="freeze" 
                                    begin="lineAnimation.end"
                                    id="secondLineAnimation"
                                    />
                                </path>
                                </svg>
                            </Element>
                            
                        </div>
                        <div className={styles['roadmap-item']}>
                            <Image src='/assets/img/step3.png' width={40} height={40} className={styles['roadmap-icon-step']}/>
                            <Element name="svgElement" className={styles.line}>
                                <svg  xmlns="http://www.w3.org/2000/svg">
                                <path 
                                  d="M0.750671 1.68939H77.9986C93.3482 1.68939 105.792 14.1327 105.792 29.4823V133.706C105.792 142.735 113.111 150.055 122.14 150.055V150.055" stroke="#37C9FE"
                                    strokeWidth="3.26975"
                                    fill="transparent"
                                    strokeDasharray="300"
                                    strokeDashoffset="300"
                                    opacity={animationThreePlayed ? 1 : 0} 
                                >
                                    <animate 
                                    attributeName="stroke-dashoffset" 
                                    from="300" 
                                    to="0" 
                                    dur="4s" 
                                    fill="freeze" 
                                    begin="secondLineAnimation.end"
                                    id="thirdLineAnimation"
                                    />
                                </path>
                                </svg>
                            </Element>
                            <p className={styles['roadmap-subtitle']}>Q1-Q2 2025</p>
                            <p className={styles['roadmap-title']}>Onboarding</p>
                            <ul className={styles['roadmap-list']}>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>First 211 clients onboarded</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>Start of Client Acquisition</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>MVP Platform Release</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>MRR $26,000+</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>Start Development <br/>of the Platform`s 1st <br/>Version</p>
                                </li>
                            </ul>
                        </div>
                        <div className={styles['roadmap-item']}>
                            <ul className={styles['roadmap-list']}>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>Aquire Investment <br/> License in the USA</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>Platform Launch v1.0</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>Tier 2-3 Projects <br/> Acquisition & <br/>Onboarding 50+ Verified <br/>Crypto Projects</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>1K+ Educated <br/> Users/Investors</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>MRR $130,000+</p>
                                </li>
                            </ul>
                          <div>
                          <Element name="svgElement" className={styles.line}>
                                <svg  xmlns="http://www.w3.org/2000/svg">
                                <path 
                                  d="M0.968689 174.646H101.105C116.455 174.646 128.898 162.202 128.898 146.853V113.747V12.3842C128.898 6.96671 133.29 2.57495 138.707 2.57495H145.655" stroke="#38C9FE" stroke-width="3.26975"
                                    fill="transparent"
                                    strokeDasharray="300"
                                    strokeDashoffset="300"
                                    opacity={animationFourPlayed ? 1 : 0} 
                                >
                                    <animate 
                                    attributeName="stroke-dashoffset" 
                                    from="300" 
                                    to="0" 
                                    dur="4s" 
                                    fill="freeze" 
                                    begin="thirdLineAnimation.end"
                                    id="fourLineAnimation"
                                    />
                                </path>
                                </svg>
                            </Element>
                            <Image src='/assets/img/step4.png' width={40} height={40} className={styles['roadmap-icon-step']}/>
                                <p className={styles['roadmap-subtitle']}>Q3-Q4 2025</p>
                                <p className={styles['roadmap-title']}>PLATFORM 1.0</p>
                          </div>
                        </div>
                        <div className={styles['roadmap-item']}>
                            <Image src='/assets/img/step5.png' width={40} height={40} className={styles['roadmap-icon-step']}/>
                            <Element name="svgElement" className={styles.line}>
                                <svg  xmlns="http://www.w3.org/2000/svg">
                                <path 
                                  d="M0.5354 1.80109H16.0365C31.0752 1.80109 43.386 13.7632 43.8179 28.7957L44.4166 49.6309C44.7893 62.5989 55.4094 72.9183 68.3828 72.9183V72.9183" stroke="#37C9FE" stroke-width="3.26975"
                                    fill="transparent"
                                    strokeDasharray="300"
                                    strokeDashoffset="300"
                                    opacity={animationFivePlayed ? 1 : 0} 
                                >
                                    <animate 
                                    attributeName="stroke-dashoffset" 
                                    from="300" 
                                    to="0" 
                                    dur="4s" 
                                    fill="freeze" 
                                    begin="fourLineAnimation.end"
                                    id="fiveLineAnimation"
                                    />
                                </path>
                                </svg>
                            </Element>
                            <p className={styles['roadmap-subtitle']}>Q1 2026</p>
                            <p className={styles['roadmap-title']}>SEED</p>
                        </div>
                        <div className={styles['roadmap-item']}>
                            <Image src='/assets/img/step6.png' width={40} height={40} className={styles['roadmap-icon-step']}/>
                            <p className={styles['roadmap-subtitle']}>Q1-Q4 2026</p>
                            <p className={styles['roadmap-title']}>PLATFORM 2.0</p>
                            <ul className={styles['roadmap-list']}>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>Platform Launch v2.0</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>10K+ Educated Users/investors</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>100+ Verified Crypto Projects</p>
                                </li>
                                <li className={styles['roadmap-list-item']}>
                                    <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                    <p>MRR $670,000+</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link  className={`${styles['schedule-btn']}`} to="contacts" smooth={true} duration={500}>
                      Request Investment Deck
                    </Link>
                    {/* <a  onClick={showPopup} className={`${styles['schedule-btn']} ${styles['schedule-btn-mobile']}`}>Schedule a Pitch Session</a>
                    <p className={`${styles['note-mobile']} ${styles.note}`}>
                        Request a pitch session to discuss investment opportunities
                    </p> */}
                </div>
            </div>
            <Element name="invest"  className={styles['card-section']}>
            <h2 className={styles['secondary-title']}>READY TO JOIN OUR JOURNEY?</h2>
            <h3 className={styles['third-title']}>WHY INVEST NOW</h3>
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
                  Top Partnerships
                </li>
                <li className={styles['advantages-list-item']}>
                  Working Manual Prototype
                </li>
              </ul>
            </Element>
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

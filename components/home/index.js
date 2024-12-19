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
          <p>Discover strategies with 100X-growth potential: <Link to="invest"  offset={-270} smooth={true} duration={700}>See our metrics below</Link></p>
           {isSticky && ( <button onClick={(e)=>handleRemoveItem(e, 'card-header')} className={styles['remove-btn']}></button>)}

        </div>
        <Image className={`${styles['logo']} ${isSticky ? styles.sticky : ''}`}src='/assets/img/footer-logo.png' width={57} height={17}/>
        <div className={styles.content}>
            <div className={styles['left-side']}>
              <h1 className={styles["main-title"]}>100 Franklins&#39; Journey <br/>to <span className={styles['text-gradient']}>Unicorn Status</span>: Backed by Numbers,<br/> Not Promises</h1>
              <h1 className={`${styles["main-title"]} ${styles.mobile}`}>100 Franklins&#39; Journey <br/> to <span className={styles['text-gradient']}>Unicorn Status</span> : Backed by Numbers, Not Promises</h1>
              <p className={styles.subtitle}>We are building a unified platform <br/>connecting qualified Web3 projects <br/>with a knowledgeable audience</p>
              <Link to="contacts" smooth={true} duration={700} className={styles['schedule-btn']}>Schedule Demo</Link>
            </div>
            <Image className={`${styles['franklin-first-screen']}`}src='/assets/img/franklin.png' width={311} height={373}/>
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
                              <div><Image src="/assets/img/imag17.png" alt="lbank" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095535.png" alt="bitmart" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095537.png" alt="certik" width={95} height={35}/></div>
                              <div ><Image src="/assets/img/image11.png" alt="vaiot" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095525.png" alt="mexc" width={80} height={20}/></div>
                              <div><Image src="/assets/img/zv15.png" alt="gate" width={78} height={20}/></div>
                              <div><Image src="/assets/img/biget1.png" alt="biget" width={78} height={20}/></div>
                          </div>  
                          <div className={styles['left-animation']}>
                              <div><Image src="/assets/img/imag17.png" alt="lbank" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095535.png" alt="bitmart" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095537.png" alt="certik" width={95} height={35}/></div>
                              <div ><Image src="/assets/img/image11.png" alt="vaiot" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095525.png" alt="mexc" width={80} height={20}/></div>
                              <div><Image src="/assets/img/zv15.png" alt="gate" width={78} height={20}/></div>
                              <div><Image src="/assets/img/biget1.png" alt="biget" width={78} height={20}/></div>
                          </div>  
                      </div>
                      <div className={styles['animation-container']}>
                        <div className={styles['right-animation']}>   
                          <div><Image src="/assets/img/image4r2.png" alt="floki" width={48} height={16}/></div>
                          <div><Image src="/assets/img/DAOMake2.png" alt="DAOMaker" width={95} height={35}/></div>
                          <div><Image src="/assets/img/imageg3.png" alt="apeswap" width={95} height={35}/></div>
                          <div><Image src="/assets/img/image 10.png" alt="chain" width={95} height={35}/></div>
                          <div><Image src="/assets/img/Brickken_black.png" alt="Brickken" width={95} height={35}/></div>
                          <div><Image src="/assets/img/AngeLabs.png" alt="AngeLabs" width={95} height={35}/></div>
                          <div><Image src="/assets/img/GGEM.png" alt="GGEM" width={95} height={35}/></div>
                          <div><Image src="/assets/img/MagiScan.png" alt="MagiScan" width={95} height={35}/></div>
                          <div><Image src="/assets/img/20240723094314.png" alt="Gptwars" width={95} height={35}/></div>
                          <div><Image src="/assets/img/MatrixOne.png" alt="MatrixOne" width={95} height={35}/></div>
                          <div><Image src="/assets/img/Everreach.png" alt="Everreach" width={95} height={35}/></div>
                          <div><Image src="/assets/img/Xyro.png" alt="Xyro" width={95} height={35}/></div>
                        </div>  
                        <div className={styles['right-animation']}>   
                          <div><Image src="/assets/img/image4r2.png" alt="floki" width={48} height={16}/></div>
                          <div><Image src="/assets/img/DAOMake2.png" alt="DAOMaker" width={95} height={35}/></div>
                          <div><Image src="/assets/img/imageg3.png" alt="apeswap" width={95} height={35}/></div>
                          <div><Image src="/assets/img/image 10.png" alt="chain" width={95} height={35}/></div>
                          <div><Image src="/assets/img/Brickken_black.png" alt="Brickken" width={95} height={35}/></div>
                          <div><Image src="/assets/img/AngeLabs.png" alt="AngeLabs" width={95} height={35}/></div>
                          <div><Image src="/assets/img/GGEM.png" alt="GGEM" width={95} height={35}/></div>
                          <div><Image src="/assets/img/MagiScan.png" alt="MagiScan" width={95} height={35}/></div>
                          <div><Image src="/assets/img/20240723094314.png" alt="Gptwars" width={95} height={35}/></div>
                          <div><Image src="/assets/img/MatrixOne.png" alt="MatrixOne" width={95} height={35}/></div>
                          <div><Image src="/assets/img/Everreach.png" alt="Everreach" width={95} height={35}/></div>
                          <div><Image src="/assets/img/Xyro.png" alt="Xyro" width={95} height={35}/></div>
                        </div>  
                   
                      </div> 
                      <div className={styles['animation-container']}>
                          <div className={styles['left-animation']}>
                              <div><Image src="/assets/img/imag17.png" alt="lbank" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095535.png" alt="bitmart" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095537.png" alt="certik" width={95} height={35}/></div>
                              <div ><Image src="/assets/img/image11.png" alt="vaiot" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095525.png" alt="mexc" width={80} height={20}/></div>
                              <div><Image src="/assets/img/zv15.png" alt="gate" width={78} height={20}/></div>
                              <div><Image src="/assets/img/biget1.png" alt="biget" width={78} height={20}/></div>
                          </div>  
                          <div className={styles['left-animation']}>
                              <div><Image src="/assets/img/imag17.png" alt="lbank" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095535.png" alt="bitmart" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095537.png" alt="certik" width={95} height={35}/></div>
                              <div ><Image src="/assets/img/image11.png" alt="vaiot" width={95} height={35}/></div>
                              <div><Image src="/assets/img/Group48095525.png" alt="mexc" width={80} height={20}/></div>
                              <div><Image src="/assets/img/zv15.png" alt="gate" width={78} height={20}/></div>
                              <div><Image src="/assets/img/biget1.png" alt="biget" width={78} height={20}/></div>
                          </div>  
                      </div>
                  </div>
                </div>
                <div className={styles['market-item']}>
                  <p>
                  Direct access to top exchanges and launchpads <span>(ByBit, KuCoin, Gate, Bitget, MEXc, BingX, OKX, DAO Maker, Zelwin)</span>
                  </p>
                  <div className={styles['item-projects-list']}>
                      <div className={styles['animation-container']}>
                          <div className={styles['left-animation']}>
                              <div><Image src="/assets/img/cbxx.png" alt="bing" width={60} height={20}/></div>
                              <div><Image src="/assets/img/Group48095526.png" alt="bybit" width={60} height={20}/></div>
                              <div ><Image src="/assets/img/imagevdssvb.png" alt="biget" width={60} height={20}/></div>
                              <div><Image src="/assets/img/vxzvx.png" alt="okx" width={60} height={20}/></div>
                          </div>  
                          <div className={styles['left-animation']}>
                              <div><Image src="/assets/img/cbxx.png" alt="bing" width={60} height={20}/></div>
                              <div><Image src="/assets/img/Group48095526.png" alt="bybit" width={60} height={20}/></div>
                              <div ><Image src="/assets/img/imagevdssvb.png" alt="biget" width={60} height={20}/></div>
                              <div><Image src="/assets/img/vxzvx.png" alt="okx" width={60} height={20}/></div>
                          </div>  
                        
                      </div>
                      <div className={styles['animation-container']}>
                        <div className={styles['right-animation']}>   
                            <div><Image src="/assets/img/cbxx.png" alt="bing" width={60} height={20}/></div>
                            <div><Image src="/assets/img/Group48095525.png" alt="mexc" width={80} height={20}/></div>
                            <div><Image src="/assets/img/Group48095526.png" alt="bybit" width={60} height={20}/></div>
                            <div ><Image src="/assets/img/imagevdssvb.png" alt="biget" width={60} height={20}/></div>
                            <div><Image src="/assets/img/vxzvx.png" alt="okx" width={60} height={20}/></div>
                            <div><Image src="/assets/img/image6.png" alt="vaiot" width={95} height={35}/></div>
                        </div>  
                        <div className={styles['right-animation']}>   
                            <div><Image src="/assets/img/cbxx.png" alt="bing" width={60} height={20}/></div>
                            <div><Image src="/assets/img/Group48095525.png" alt="mexc" width={80} height={20}/></div>
                            <div><Image src="/assets/img/Group48095526.png" alt="bybit" width={60} height={20}/></div>
                            <div ><Image src="/assets/img/imagevdssvb.png" alt="biget" width={60} height={20}/></div>
                            <div><Image src="/assets/img/vxzvx.png" alt="okx" width={60} height={20}/></div>
                            <div><Image src="/assets/img/image6.png" alt="vaiot" width={95} height={35}/></div>
                            <div ><Image src="/assets/img/KuCoin-logo.png" alt="vaiot" width={95} height={35}/></div>
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
              <p className={styles.subtitle}>100 Franklins connects qualified projects with a educated audience, creating conditions for sustainable development and long-term profits</p>
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
              
              <div className={styles['buisness-model-wrapper']}>
                <h3 className={styles['third-title']}>Business Model</h3>
                <div className={styles['buisness-model-chart-container']}>
                  <svg className={styles['chart-image']} xmlns="http://www.w3.org/2000/svg" width="449" height="449" viewBox="0 0 449 449" fill="none">
                    <path d="M295.091 370.71C322.671 356.504 345.575 334.656 361.065 307.776C376.555 280.897 383.976 250.125 382.44 219.14L221.138 227.138L295.091 370.71Z" fill="#FFF04B"/>
                    <path d="M210.182 385.024C232.994 387.001 255.966 384.105 277.573 376.528L224.128 224.127L210.182 385.024Z" fill="#6C65F8"/>
                    <path d="M378.601 210.939C376.412 180.317 365.539 150.953 347.258 126.289C328.978 101.625 304.045 82.6825 275.384 71.6815C246.722 60.6804 215.519 58.0766 185.431 64.1751C155.342 70.2736 127.616 84.8219 105.5 106.115C83.3838 127.408 67.7951 154.563 60.5606 184.399C53.326 214.235 54.7454 245.514 64.6522 274.572C74.5591 303.63 92.543 329.262 116.496 348.465C140.45 367.667 169.38 379.644 199.897 382.993L217.512 222.457L378.601 210.939Z" fill="#05E9F0"/>
                    <circle  cx="216.49" cy="222.49" r="79.4899" fill="#110F79"/>
                    <path d="M298.371 158H293.635L302.083 149.264H292.979V146.816H305.955V150.16L298.371 158ZM312.949 158H308.213L316.661 149.264H307.557V146.816H320.533V150.16L312.949 158ZM324.551 146.416C325.447 146.416 326.125 146.731 326.583 147.36C327.053 147.979 327.287 148.853 327.287 149.984C327.287 151.115 327.069 152 326.631 152.64C326.194 153.269 325.501 153.584 324.551 153.584C323.965 153.584 323.469 153.44 323.063 153.152C322.669 152.864 322.37 152.453 322.167 151.92C321.965 151.376 321.863 150.731 321.863 149.984C321.863 148.853 322.077 147.979 322.503 147.36C322.93 146.731 323.613 146.416 324.551 146.416ZM324.567 148.048C324.311 148.048 324.125 148.208 324.007 148.528C323.89 148.848 323.831 149.339 323.831 150C323.831 150.651 323.89 151.141 324.007 151.472C324.125 151.803 324.311 151.968 324.567 151.968C324.823 151.968 325.01 151.803 325.127 151.472C325.255 151.141 325.319 150.651 325.319 150C325.319 149.339 325.255 148.848 325.127 148.528C325.01 148.208 324.823 148.048 324.567 148.048ZM332.663 146.576L326.327 158H324.455L330.791 146.576H332.663ZM332.551 150.976C333.149 150.976 333.65 151.12 334.055 151.408C334.461 151.685 334.765 152.091 334.967 152.624C335.181 153.147 335.287 153.787 335.287 154.544C335.287 155.675 335.069 156.56 334.631 157.2C334.194 157.829 333.501 158.144 332.551 158.144C331.965 158.144 331.469 158 331.063 157.712C330.669 157.424 330.37 157.013 330.167 156.48C329.965 155.936 329.863 155.291 329.863 154.544C329.863 153.413 330.077 152.539 330.503 151.92C330.93 151.291 331.613 150.976 332.551 150.976ZM332.567 152.608C332.311 152.608 332.125 152.768 332.007 153.088C331.89 153.408 331.831 153.899 331.831 154.56C331.831 155.211 331.89 155.701 332.007 156.032C332.125 156.363 332.311 156.528 332.567 156.528C332.823 156.528 333.01 156.368 333.127 156.048C333.255 155.717 333.319 155.221 333.319 154.56C333.319 153.899 333.255 153.408 333.127 153.088C333.01 152.768 332.823 152.608 332.567 152.608Z" fill="#1A194C"/>
                    <path d="M318.049 258.016L323.713 256.816V268H320.721V259.888L318.049 260.464V258.016ZM339.208 261.04L339.224 263.984C339.224 265.28 339.064 265.76 338.984 266.032C338.744 266.832 338.248 267.424 337.4 267.728C337 267.872 336.312 268.016 335.416 268.016H326.248V268V260.848C326.248 259.536 326.408 259.056 326.488 258.784C326.728 257.984 327.224 257.392 328.072 257.088C328.472 256.944 329.16 256.8 330.056 256.8H337.768V259.248H330.6C329.448 259.248 329.224 259.936 329.224 260.832V261.04H339.208ZM329.224 263.488V265.568H334.872C336.008 265.568 336.248 264.88 336.248 263.984V263.488H329.224ZM343.481 256.416C344.377 256.416 345.054 256.731 345.513 257.36C345.982 257.979 346.217 258.853 346.217 259.984C346.217 261.115 345.998 262 345.561 262.64C345.124 263.269 344.43 263.584 343.481 263.584C342.894 263.584 342.398 263.44 341.993 263.152C341.598 262.864 341.3 262.453 341.097 261.92C340.894 261.376 340.793 260.731 340.793 259.984C340.793 258.853 341.006 257.979 341.433 257.36C341.86 256.731 342.542 256.416 343.481 256.416ZM343.497 258.048C343.241 258.048 343.054 258.208 342.937 258.528C342.82 258.848 342.761 259.339 342.761 260C342.761 260.651 342.82 261.141 342.937 261.472C343.054 261.803 343.241 261.968 343.497 261.968C343.753 261.968 343.94 261.803 344.057 261.472C344.185 261.141 344.249 260.651 344.249 260C344.249 259.339 344.185 258.848 344.057 258.528C343.94 258.208 343.753 258.048 343.497 258.048ZM351.593 256.576L345.257 268H343.385L349.721 256.576H351.593ZM351.481 260.976C352.078 260.976 352.58 261.12 352.985 261.408C353.39 261.685 353.694 262.091 353.897 262.624C354.11 263.147 354.217 263.787 354.217 264.544C354.217 265.675 353.998 266.56 353.561 267.2C353.124 267.829 352.43 268.144 351.481 268.144C350.894 268.144 350.398 268 349.993 267.712C349.598 267.424 349.3 267.013 349.097 266.48C348.894 265.936 348.793 265.291 348.793 264.544C348.793 263.413 349.006 262.539 349.433 261.92C349.86 261.291 350.542 260.976 351.481 260.976ZM351.497 262.608C351.241 262.608 351.054 262.768 350.937 263.088C350.82 263.408 350.761 263.899 350.761 264.56C350.761 265.211 350.82 265.701 350.937 266.032C351.054 266.363 351.241 266.528 351.497 266.528C351.753 266.528 351.94 266.368 352.057 266.048C352.185 265.717 352.249 265.221 352.249 264.56C352.249 263.899 352.185 263.408 352.057 263.088C351.94 262.768 351.753 262.608 351.497 262.608Z" fill="#1A194C"/>
                    <path d="M230.16 346H225.424L233.872 337.264H224.768V334.816H237.744V338.16L230.16 346ZM241.762 334.416C242.658 334.416 243.335 334.731 243.794 335.36C244.263 335.979 244.498 336.853 244.498 337.984C244.498 339.115 244.279 340 243.842 340.64C243.405 341.269 242.711 341.584 241.762 341.584C241.175 341.584 240.679 341.44 240.274 341.152C239.879 340.864 239.581 340.453 239.378 339.92C239.175 339.376 239.074 338.731 239.074 337.984C239.074 336.853 239.287 335.979 239.714 335.36C240.141 334.731 240.823 334.416 241.762 334.416ZM241.778 336.048C241.522 336.048 241.335 336.208 241.218 336.528C241.101 336.848 241.042 337.339 241.042 338C241.042 338.651 241.101 339.141 241.218 339.472C241.335 339.803 241.522 339.968 241.778 339.968C242.034 339.968 242.221 339.803 242.338 339.472C242.466 339.141 242.53 338.651 242.53 338C242.53 337.339 242.466 336.848 242.338 336.528C242.221 336.208 242.034 336.048 241.778 336.048ZM249.874 334.576L243.538 346H241.666L248.002 334.576H249.874ZM249.762 338.976C250.359 338.976 250.861 339.12 251.266 339.408C251.671 339.685 251.975 340.091 252.178 340.624C252.391 341.147 252.498 341.787 252.498 342.544C252.498 343.675 252.279 344.56 251.842 345.2C251.405 345.829 250.711 346.144 249.762 346.144C249.175 346.144 248.679 346 248.274 345.712C247.879 345.424 247.581 345.013 247.378 344.48C247.175 343.936 247.074 343.291 247.074 342.544C247.074 341.413 247.287 340.539 247.714 339.92C248.141 339.291 248.823 338.976 249.762 338.976ZM249.778 340.608C249.522 340.608 249.335 340.768 249.218 341.088C249.101 341.408 249.042 341.899 249.042 342.56C249.042 343.211 249.101 343.701 249.218 344.032C249.335 344.363 249.522 344.528 249.778 344.528C250.034 344.528 250.221 344.368 250.338 344.048C250.466 343.717 250.53 343.221 250.53 342.56C250.53 341.899 250.466 341.408 250.338 341.088C250.221 340.768 250.034 340.608 249.778 340.608Z" fill="white"/>
                  </svg>
                  <Image className={`${styles['logo']}`} src='/assets/img/footer-logo.png' width={74} height={22}/>
                  <div className={`${styles['chart-desc']}`}>
                    <p>Platform Subscriptions</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="198" height="40" viewBox="0 0  198 40" fill="none">
                      <path d="M1.00003 39L22.8606 1H198" stroke="white"/>
                    </svg>
                  </div>
                  <div className={`${styles['chart-desc']}`}>
                    <p>Project Commission</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="184" height="40" viewBox="0 0 184 40" fill="none">
                      <path d="M1.00003 1L22.8606 39H183.5" stroke="white"/>
                    </svg>
                  </div>
                  <div className={`${styles['chart-desc']}`}>
                      <p> Marketplace Revenue
                          Staking Fees
                          Advertising Revenue
                          Service Packages
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="263" height="125" viewBox="0 0 263 125" fill="none">
                      <path d="M0.5 1H28.5L75.5 124H262.5" stroke="white"/>
                      </svg>
                  </div>
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
        <h1 className={styles['main-title']}>Go-To-Market Strategy</h1>
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

          <Element name="invest" className={styles.content}>
           
            <div className={styles['card-section']}>
            <span className={styles['section-count']}>1</span>
              <h2 className={styles['secondary-title']}>Cold Audience Lead Generation System</h2>
              <h4 className={styles['four-title']}>Traffic Generation System – Developed and Validated on $30,000 Budget</h4>
            
              <div className={`${styles['paid-content']} ${styles.mobile}`}>
                <h5 className={styles['paid-title']}>Paid Advertising</h5>
                <div className={styles['paid-logos']}>
                  <Image src="/assets/img/Google.png" alt="Google" width={117} height={39}/>
                  <Image src="/assets/img/Facebook.png" alt="Facebook" width={153} height={27}/>
                  <Image src="/assets/img/Instagram.png" alt="Instagram" width={128} height={43}/>
                </div>
              </div>
              <h3 className={styles['third-title']}>Sales System</h3>
              <div className={styles['sales-system']}>
                <div className={styles['sales-system-item']}>
                  <h5 className={styles['sales-system-title']}>Auto webinar funnel</h5>
                  <Image src='/assets/img/AutowebMiro.png' width={229} height={400}   sizes="(max-width: 768px) 100vw, 229px" />
                  <Image src='/assets/img/Bandle.png' width={229} height={167}   sizes="(max-width: 768px) 100vw, 229px" />
                </div>
                <div className={styles['sales-system-item']}>
                  <h5 className={styles['sales-system-title']}>Curator-based funnel</h5>
                  <Image src='/assets/img/AutowebMiro1.png' width={229} height={285}   sizes="(max-width: 768px) 100vw, 229px" />
                  <Image src='/assets/img/Bandle2.png' width={229} height={124}   sizes="(max-width: 768px) 100vw, 229px" />
                </div>
                <div className={styles['sales-system-item']}>
                  <h5 className={styles['sales-system-title']}>Video sales funnel</h5>
                  <Image 
                    src='/assets/img/AutowebMiro2.png' 
                    width={229} 
                    height={285} 
                    sizes="(max-width: 768px) 100vw, 229px" 
                  />
                  <Image 
                    src='/assets/img/Bandle3.png' 
                    width={229} 
                    height={124} 
                    sizes="(max-width: 768px) 100vw, 229px" 
                  />
                </div>
              </div>
              <div className={`${styles['paid-content']} `}>
                <h5 className={styles['paid-title']}>Paid Advertising</h5>
                <div className={styles['paid-logos']}>
                  <Image src="/assets/img/Google.png" alt="Google" width={117} height={39}/>
                  <Image src="/assets/img/Facebook.png" alt="Facebook" width={153} height={27}/>
                  <Image src="/assets/img/Instagram.png" alt="Instagram" width={128} height={43}/>
                </div>
              </div>
              <div className={styles['record-content']}>
                <div>
                  <p className={styles.title}>
                    Current Track Record:
                  </p>
                  <p>
                    CAC
                    <span>
                      $430
                    </span>
                  </p>
                  <p>
                    LTV
                    <span>
                      $1450
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className={styles['card-section']}> 
              <span className={styles['section-count']}>2</span>
            <h2 className={styles['secondary-title']}>WARM AUDIENCE BASE</h2>
            <p className={styles.subtitle}>We already have access to our target audience</p>
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
                    Established relationships with top management at ByBit, KuCoin, Gate, Bitget, MEXc, BingX, KuCoin, OKX, DAO Maker, Zelwin
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles['card-section']}>
            <span className={styles['section-count']}>3</span>
              <h3 className={styles['third-title']}>Growth Channels</h3>
              <svg  className={styles["section-line"]} xmlns="http://www.w3.org/2000/svg" width="3" height="72" viewBox="0 0 3 72" fill="none">
              <path d="M2 1L1 71" stroke="#FFDF2C" stroke-width="2" stroke-dasharray="2 2"/>
              </svg>
                <div className={styles['cards-unicorn']}>
                <div className={styles.card}>
                  <ul className={styles['card-list']}>
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
                    <Image  src='/assets/img/mexc.png' width={110} height={22}/>
                    <Image  src='/assets/img/okk.png' width={80} height={22}/>
                    <Image  src='/assets/img/Bingxlogo1.png' width={96} height={28}/>
                    <Image  src='/assets/img/DAOMake2.png' width={157} height={41}/>
                    <Image  src='/assets/img/KuCoin-logo2.png' width={80} height={22}/>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['card-section']}>
              <h3 className={styles['third-title']}>MULTIPLYING <span className={styles['text-gradient']}>UNICORN</span> STATUS</h3>
              <svg  className={styles["section-line"]} xmlns="http://www.w3.org/2000/svg" width="3" height="72" viewBox="0 0 3 72" fill="none">
              <path d="M2 1L1 71" stroke="#FFDF2C" stroke-width="2" stroke-dasharray="2 2"/>
              </svg>
              <Image className={`${styles.chart} ${styles.mobile}`} src='/assets/img/chart-m.png' width={326} height={224}/>
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
                  <p className={styles.subtitle}>Over 5 years of a strong, results-driven partnership in crypto and digital marketing, founded on shared values and mutual trust</p>
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
                  <p className={styles.subtitle}>5+ years of seamless on-project collaboration, working as a cohesive and results-driven team</p>
                  <div className={styles['team-group-item']}>
                    <div>
                      <Image className={styles['member-img']} src='/assets/img/alex.png' width={86} height={78}/>
                      <div>
                        <p className={styles['member-title']}>Alex Pomelnikov, <br></br>Phd, CFO</p>
                        <a className={styles['member-link']} href='https://www.linkedin.com/in/apomelnikov/' target='_blank'>
                          <Image  src='/assets/img/icons/linkedin.png' width={14} height={14}/>
                          @apomelnikov
                        </a>
                      </div>
                    </div>
                    <p className={styles['member-desc']}>
                    17+ years in Finance & Economics</p>
                  </div>
                  <div className={styles['team-group-item']}>
                    <div>
                      <Image className={styles['member-img']} src='/assets/img/igor.png' width={86} height={78}/>
                      <div>
                        <p className={styles['member-title']}>Igor Jalenco, <br/>CBDO</p>
                      </div>
                    </div>
                    <p className={styles['member-desc']}>10+ years in EdTech BD</p>
                  
                  </div>
                  <div className={styles['team-group-item']}>
                    <div className={styles['member-desc']}>
                      <Image className={styles['member-img']} src='/assets/img/vadim.png' width={86} height={78}/>
                      <div>
                        <p className={styles['member-title']}>Vadim Golubtsov, COO</p>
                      </div>
                      
                    </div>
                    <p className={styles['member-desc']}>16+ years in IT Management</p>
                  </div>
                </div>
              </div>
              <div className={`${styles['team-group']} ${styles['team-group-flex']}`}>
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
                  <p className={styles['member-title']}>NIKOLAY<br/>  SHKILEV, PhD</p>
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
                <Image src='/assets/img/a858a9a.png' width={65} height={17} />
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
            <div  className={styles['card-section']}>
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
            </div>
          </Element>
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

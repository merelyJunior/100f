import React, { useRef, useEffect, useState } from 'react';
import { Link, Element  } from 'react-scroll';
import styles from './index.module.css';
import Footer from '../footer';
import Image from 'next/image';
import BecomeSlider from '/components/sections/becomeSlider'
import Contacts from '../sections/contacts-new';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PopupForm from '/components/sections/contacts-popup';
const MySwal = withReactContent(Swal);

const Home = () => {

    const showPopup = () => {
        MySwal.fire({
            html: <PopupForm />,  
            showConfirmButton: false, 
            showCloseButton: true,  
            backdrop: true, 
          });
      };
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
    }, [animationPlayed]); // Флаг анимации в зависимости
  
  return (
    <>
       
        <section className={styles['first-screen-card']}>
            <div className={styles['first-screen-card-container']}>
                <div className={styles.inner}>
                    <Image className={styles.logo} src='/assets/img/footer-logo.png' width={86} height={25}/>
                    <h1 className={styles["main-title"]}>The unified crypto platform</h1>
                    <p className={styles.subtitle}>connecting qualified Projects with an educated audience</p>
                    <div className={styles.cards}>
                        <div className={styles['card-elem']}>
                            <p className={styles['card-text']}>
                                <span>Qualified projects </span> attract investments from a crypto audience focused on long-term growth over short-term speculation
                            </p>
                        </div>
                        <div className={styles['card-elem']}>
                            <p className={styles['card-text']}>
                                <span>Educated crypto audience </span>contributes to projects and earns alongside them in the long-term
                            </p>
                        </div>
                    </div>
                    <Link className={styles.button} to="contacts" smooth={true} duration={500}>
                        Become an Early Adopter
                    </Link>
                    <p className={styles.note}>
                        By registering now, you gain early access to a platform that will change the game in the cryptocurrencies world
                    </p>
                </div>
            </div>
        </section>
        <section className={styles['phases']}>
            <span className={styles.points}>Phase 1</span>
            <div className={styles['phases-inner']}>
                <h2 className={styles['secondary-title']}>
                    Who Are We Now?
                </h2>
                <h2 className={styles['secondary-title-mobile']}>
                    Who Are We Now?
                </h2>
                <div className={styles['phases-cards']}>
                    <div className={styles['phases-cards-elem']}>
                        <p>Projects Onboarding</p>
                    </div>
                    <div className={styles['phases-cards-elem']}>
                        <p>Investors Onboarding</p>
                    </div>
                    <div className={styles['phases-cards-elem']}>
                        <p>Matching <br/><span className={styles.ampersand}>&</span>Activities</p>
                    </div>
                    <div className={styles['phases-cards-elem']}>
                        <p>Analytics <br/><span className={styles.ampersand}>&</span>Reporting</p>
                    </div>
                </div>
                <div className={styles['become-section']}>
                    <div className={styles['become-section-desc']}>
                        <h2 className={`${styles['secondary-title']}`}>
                            Who Will We Become?
                        </h2>
                        <div className={styles['become-options']}>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx1.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>Early Stage Investments </p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx2.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>Investor and Audience Networks</p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx3.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>Social Features</p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx4.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>Crypto AirDrops</p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx5.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>Education </p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx6.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>AI Modeling</p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx7.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>DeFi</p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx8.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>Blockchain Analysis</p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx9.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>Investor Ranking</p>
                            </div>
                        </div>
                        <a  onClick={showPopup} className={styles['schedule-btn']}>Schedule a Pitch Session</a>
                        <p className={styles.note}>
                            Request a pitch session to discuss investment opportunities
                        </p>
                    </div>
                    {/* <BecomeSlider/> */}
                    <Image className={styles.mockup} src='/assets/img/mockup.png' width={430} height={282}/>
                    <h2 className={`${styles['secondary-title-mobile']}`}>
                        Who Will We Become?
                    </h2>
                </div>
            </div>
            <span className={styles.points}>Phase 2</span>
        </section>
        
        <section className={styles['platform-list']}>
            <div className={styles.inner}>
                <h2 className={styles["main-title"]}>Platform Waiting List</h2>
                <div className={styles.cards}>
                    <div className={styles['card-elem']}>
                        <p className={styles['card-text']}>
                            Investors
                        </p>
                        <p className={styles['card-counter']}>13,382</p>
                    </div>
                    <div className={styles['card-elem']}>
                        <p className={styles['card-text']}>
                            Crypto Enthusiasts
                        </p>
                        <p className={styles['card-counter']}>27,358</p>
                    </div>
                </div>
                    <Link className={styles.button} to="contacts" smooth={true} duration={500}>
                        Become an Early Adopter
                    </Link>
                <p className={styles.note}>
                    By registering now, you gain early access to a platform that will change the game in the cryptocurrencies world
                </p>
            </div>
        </section>
        <section className={styles['platform-roadmap']}>
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
                <Link className={styles.button} to="contacts" smooth={true} duration={500}>
                    Become an Early Adopter
                </Link>
                <p className={styles.note}>
                    By registering now, you gain early access to a platform that will change the game in the cryptocurrencies world
                </p>
                <a  onClick={showPopup} className={`${styles['schedule-btn']} ${styles['schedule-btn-mobile']}`}>Schedule a Pitch Session</a>
                <p className={`${styles['note-mobile']} ${styles.note}`}>
                    Request a pitch session to discuss investment opportunities
                </p>
            </div>
        </section>
        <section className={styles['solved-problem']}>
            <div className={styles.inner}>
                <h2 className={styles["main-title"]}>What Crypto Market Challenges 
                    <span> Do We Solve?</span>
                </h2>
                <div className={styles['solved-problem-item-first']}>
                   <Image src='/assets/img/icopro1.png' width={57} height={51}/>
                   <div className={styles.desc}>
                    <h3 className={styles['third-title']}>Problem</h3>
                        <p>
                        The majority views the Web3 market as a speculative opportunity for quick profits rather than a viable long-term investment tool
                        </p>
                   </div>
                </div>
                <div className={styles['solved-problem-item-wrapper']}>
                    <div className={styles['solved-problem-item']}>
                        <Image src='/assets/img/icopro2.png' width={43} height={45}/>
                        <div className={styles.desc}>
                            <h3 className={styles['third-title']}>Web3 Projects</h3>
                            <p>Early-stage investors are often overlooked</p>
                        </div>
                    </div>
                    <div className={styles['solved-problem-item']}>
                        <Image src='/assets/img/icopro3.png' width={49} height={49}/>
                        <div className={styles.desc}>
                            <h3 className={styles['third-title']}>Web3 Investors</h3>
                            <p>Encounter challenges in early-stage investments</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles['solved-problem-item']} ${styles['solved-problem-item-last']}`}>
                    <Image src='/assets/img/icopro4.png' width={44} height={44}/>
                    <div className={styles.desc}>
                        <h3 className={styles['third-title']}>Short-Term</h3>
                        <p>Typical projects rely on one-time investors</p>
                    </div>
                </div>
            </div>
        </section>
        <Element name="contacts">
            <Contacts/>
        </Element>
       <Footer/>
    </>
   
  );
};

export default Home;

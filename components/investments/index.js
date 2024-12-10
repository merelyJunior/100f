import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './index.module.css';
import Form from '../sections/contacts';
import Footer from '../footer';
import CoinsPlugin from '../coinsPlugin';


const Slider = dynamic(() => import('/components/sections/slider'), {
  ssr: false,
});

const Investments = () => {


    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        if (window.innerWidth <= 580) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };
    useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);

    const [activeProject, setActiveProject] = useState(null);
    const handleMouseEnter = (index) => {
        setActiveProject(index);
    };

    const handleMouseLeave = () => {
    setActiveProject(null);
    };

    const handleClick = (index) => {
    setActiveProject(index);
    };
    const projects = [
        {
          text: 'CryptoGPT is a ZK Layer-2 blockchain built on AI. It is an intermediary platform where developers and users can easily and quickly exchange information and monetize their knowledge',
          img: '/assets/img/2.png'
        },
        {
          text: 'De.Fi is the first cross-chain decentralized security network fulfilling the goal of making the DeFi space safer for everyone by developing the fully automated smart contract security scanner and the unique crypto asset management dashboard that brings together high effectiveness and safety of DeFi investments',
          img: '/assets/img/3.png'
        },
        {
          text: 'VV Token is the main engine across the VV eco-system allowing people to transfer value across the ecosystem, and earn rewards and discounts for VV products and experiences',
          img: '/assets/img/4.png'
        },
        {
          text: 'Degen ZOO is a project based on an NFT collection that features 120 endangered animal species. The main goal of the project is to create an aesthetic and informative space for studying the impact of capitalism on animal extinction',
          img: '/assets/img/5.png'
        },
        {
          text: 'ChainGPT is an AI-based project that provides not only the capabilities of standard conversational communication but also the ability to create smart contracts based on simple descriptions without the need for coding knowledge',
          img: '/assets/img/6.png'
        },
        {
          text: 'Tenet is an EVM Layer-1 blockchain running on Cosmos, aimed at developing secure and accessible AI-based DeFi',
          img: '/assets/img/7.png'
        },
        {
          text: 'Patex offers C-Patex Exchange for centralized cryptocurrency trading, Patex Campus for Web3 education, and Patex Network for CBDC issuance and tracking',
          img: '/assets/img/8.png'
        },
        {
          text: 'The Root Network, a new Layer 1 platform, acts as the central hub for the open metaverse, fostering seamless connectivity between diverse entities and prioritizing user experience and safety with features like built-in account abstraction and an any-token gas economy. Its EVM compatibility, integrated with Substrate and XRPL, along with future integration with other networks, enhances interoperability and functionality within the open metaverse.',
          img: '/assets/img/9.png'
        },
        {
          text: 'BRC-20 is an experimental standard for fungible tokens on the Bitcoin blockchain. The Taproot and Ordinals protocol made the BRC-20 standard possible. BRC-20 tokens unlock new capabilities for the Bitcoin network, such as their use in DeFi protocols and blockchain applications',
          img: '/assets/img/10.png'
        },
        {
          text: 'SophiaVerse is a gamified infrastructure built in the pursuit of Sophia\'s development via gameplay, through AI programming and the use of the SOPH utility token. The goal of SophiaVerse is to create a gamified decentralized AI ecosystem where humans and AI can work together to build superintelligent systems leading to a beneficial Singularity',
          img: '/assets/img/11.png'
        },
        {
          text: 'ivendPay is a payment system that enables accepting cryptocurrency payments through POS terminals, vending machines, APIs, and a mobile application available on the Apple Store or Play Market One of the main objectives of ivendPay is to provide crypto-fiat solutions for merchants, reducing the cost of goods payment and transaction processing',
          img: '/assets/img/12.png'
        },
        {
          text: 'Kryptonite is a core pillar project of Sei Network. It\'s the premier LSD product of Sei and built to supercharge LSDfi. It has built-in functions for SEI lending and collateralized stablecoin minting. And enables users to enhance their staking strategies by providing them with access to liquidity normally locked within their staked assets',
          img: '/assets/img/13.png'
        },
    ];


    return (
        <div>
            <section className={styles['first-screen-card']}>
                <div className={styles['first-screen-card-container']}>
                    <CoinsPlugin/>
                    <div className={styles.inner}>
                    <h1 className="main-title"><span className='title-span'>The unified crypto platform </span>connecting qualified projected with educated audience</h1>
                        <div className={styles.advantages}>
                            <div className={styles['advantages-goal-list']}>
                            <div className={styles['advantages-goal-list-item']}>
                                <h3 className={styles['goal-item-title']}>
                                    The goal of 100F
                                </h3>
                                <span className={styles['goal-line']}></span>
                                <p className={styles['advantages-item-desc']}>
                                To form a diverse pool of investors with ratings and corresponding knowledge to participate in early stage rounds in thoroughly selected crypto projects worldwide
                                </p>
                            </div>  
                            <div className={styles['advantages-goal-list-item']}>
                                <div className={styles['item-image']}>
                                    <Image src="/assets/img/Group5445.png" alt="item image" width={132} height={56}/>
                                </div>
                                <p className={styles['advantages-item-desc']}>
                                    Our existing network of 100+ investors, spans 8 countries and continues to expand daily
                                </p>
                            </div>  
                            <div className={styles['advantages-goal-list-item']}>
                                <div className={styles['item-projects-list']}>
                                    <div className={styles['animation-container']}>
                                        <div className={styles['left-animation']}>
                                            <div><Image src="/assets/img/63e950e51a7c201f41f7d8d7_cryptoGPT.png" alt="crypto" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/63d1c98909bec5247bc2a85f_CHAINGPT.png" alt="CHAINGPT" width={65} height={20}/></div>
                                            <div  className={styles['logo-tenet']}><Image src="/assets/img/Group5189.png" alt="tenet" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/63e950e51a7c201f41f7d8d7_cryptoGPT.png" alt="crypto" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/63d1c98909bec5247bc2a85f_CHAINGPT.png" alt="CHAINGPT" width={65} height={20}/></div>
                                            <div  className={styles['logo-tenet']}><Image src="/assets/img/Group5189.png" alt="tenet" width={65} height={20}/></div>
                                        </div>  
                                        <div className={styles['left-animation']}>
                                            <div><Image src="/assets/img/63e950e51a7c201f41f7d8d7_cryptoGPT.png" alt="crypto" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/63d1c98909bec5247bc2a85f_CHAINGPT.png" alt="CHAINGPT" width={65} height={20}/></div>
                                            <div  className={styles['logo-tenet']}><Image src="/assets/img/Group5189.png" alt="tenet" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/63e950e51a7c201f41f7d8d7_cryptoGPT.png" alt="crypto" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/63d1c98909bec5247bc2a85f_CHAINGPT.png" alt="CHAINGPT" width={65} height={20}/></div>
                                            <div  className={styles['logo-tenet']}><Image src="/assets/img/Group5189.png" alt="tenet" width={65} height={20}/></div>
                                        </div>  
                                    </div>
                                    <div className={styles['animation-container']}>
                                        <div className={styles['right-animation']}>
                                            <div className={styles['logo-verse']}><Image src="/assets/img/64a3e741ac69920c3491883d_sverselogo-gold.png" alt="verse"width={65} height={20}/></div>
                                            <div><Image src="/assets/img/logo-1-.png" alt="planet" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/header-log.png" alt="coin" width={65} height={20}/></div>
                                            <div className={styles['logo-verse']}><Image src="/assets/img/64a3e741ac69920c3491883d_sverselogo-gold.png" alt="verse" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/logo-1-.png" alt="planet" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/header-log.png" alt="coin" width={65} height={20}/></div>
                                            <div className={styles['logo-verse']}><Image src="/assets/img/64a3e741ac69920c3491883d_sverselogo-gold.png" alt="verse" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/logo-1-.png" alt="planet" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/header-log.png" alt="coin" width={65} height={20}/></div>
                                            <div className={styles['logo-verse']}><Image src="/assets/img/64a3e741ac69920c3491883d_sverselogo-gold.png" alt="verse" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/logo-1-.png" alt="planet" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/header-log.png" alt="coin" width={65} height={20}/></div>
                                        </div>
                                        <div className={styles['right-animation']}>
                                            <div className={styles['logo-verse']}><Image src="/assets/img/64a3e741ac69920c3491883d_sverselogo-gold.png" alt="verse"width={65} height={20}/></div>
                                            <div><Image src="/assets/img/logo-1-.png" alt="planet" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/header-log.png" alt="coin" width={65} height={20}/></div>
                                            <div className={styles['logo-verse']}><Image src="/assets/img/64a3e741ac69920c3491883d_sverselogo-gold.png" alt="verse" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/logo-1-.png" alt="planet" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/header-log.png" alt="coin" width={65} height={20}/></div>
                                            <div className={styles['logo-verse']}><Image src="/assets/img/64a3e741ac69920c3491883d_sverselogo-gold.png" alt="verse" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/logo-1-.png" alt="planet" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/header-log.png" alt="coin" width={65} height={20}/></div>
                                            <div className={styles['logo-verse']}><Image src="/assets/img/64a3e741ac69920c3491883d_sverselogo-gold.png" alt="verse" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/logo-1-.png" alt="planet" width={65} height={20}/></div>
                                            <div><Image src="/assets/img/header-log.png" alt="coin" width={65} height={20}/></div>
                                        </div>
                                    </div> 
                                </div>
                                <p className={styles['advantages-item-desc']}>
                                Additionally, we have onboarded over 20 crypto projects whose objectives align with those of 100F and our community
                                </p>
                                </div>
                            </div>  
                            <div className={styles['advantages-asset-list']}>
                                <h3 className={styles['asset-item-title']}>
                                    Audience <br/> asset
                                </h3>
                                <div className={styles['advantages-asset-list-item']}>
                                    <p className={styles['asset-list-value']}>189</p>
                                    <p className={styles['asset-list-title']}>Investment <br/>Influencers</p>
                                </div>
                                <div className={styles['advantages-asset-list-item']}>
                                    <p className={styles['asset-list-value']}>104</p>
                                    <p className={styles['asset-list-title']}>Private Investors</p>
                                </div>
                                <div className={styles['advantages-asset-list-item']}>
                                    <p className={styles['asset-list-value']}>10M+</p>
                                    <p className={styles['asset-list-title']}>Audience Coverage</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className={styles['advantages-card']}>
                <div className={styles['advantages-card-item']} >
                    <p className={styles['card-desc']}>To make the best decision for our community, we meticulously analyze the crypto projects to get pure gems. We only choose those that meet our standards and have sufficient growth potential</p>
                    <p className={styles['card-desc']}>As of today, the average growth rate of our selected projects is X38 from the listing price, demonstrating our expertise</p>
                </div>
                <div className={styles['advantages-card-item']} >
                    <p className={styles['card-desc']}>Thanks to our growing reputation, we continue to attract not only beginners but also high-level investors and influencers from around the world who provide support to crypto projects</p>
                </div>
            </section>
            <section className={styles.projects}>
                <h2 className={`${styles['projects-title']} secondary-title`}><span className='title-span'>Our experienced team handles a variety of functions or projects: <br/></span>
                from audience engagement to restructuring launch strategy</h2>
            {!isMobile ? (
                <div className={styles['projects-list']}>
                    {projects.map((project, index) => (
                    <div
                        key={index}
                        className={styles['project-list-item']}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(index)}
                    >
                        <p className={`${styles['project-list-item-info-text']} ${activeProject === index ? styles['visible'] : ''}`}>
                        {project.text}
                        </p>
                        <Image src={project.img} alt="project-item" width={212} height={124}/>
                    </div>
                    ))}
                </div>
            ):(
                <Slider projects={projects}/>
            )}  
            </section>
        <Form/>
        <Footer/>
        </div>
    );
};

export default Investments;
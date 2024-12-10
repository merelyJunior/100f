import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import PopupWaitlist from '/components/sections/waitlist-popup';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
const BurgerMenu = () => {

  const router = useRouter();
  const isActive = (basePath) => {
    if (basePath === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(basePath) && router.pathname !== '/';
  };

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

 
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.noScroll);
      document.body.classList.add(styles.overlay);
    } else {
      document.body.classList.remove(styles.noScroll);
      document.body.classList.remove(styles.overlay);
    }
  }, [isOpen]);
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const showPopup = () => {
    MySwal.fire({
        html: <PopupWaitlist />,  
        showConfirmButton: false, 
        showCloseButton: true,  
        backdrop: true, 
      });
  };

  return (
    <div className={`${styles['header-adaptive']} ${isScrolled ? styles.scrolled : ''} ${isOpen ? styles.open : ''} ${isMobile ? styles.mobile : ''}`}>
      <Link href="/" className={styles['main-logo']}>
        <Image src="/assets/img/footer-logo.png" alt="logo" width={75} height={21}/>
      </Link>
      <button onClick={toggleMenu} className={`${styles['hamburger-menu']} ${isOpen ? styles.open : ''}`}>
        <span></span>
      </button>
      <motion.nav
        className={styles.menu}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        initial='closed'
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <ul className={styles['sidebar-menu']}>
          <li className={styles['sidebar-menu__item']}>
            <button onClick={showPopup} className={`${styles['page-button']} ${styles['waitlist-btn']}`}>
              Join the Waitlist
            </button>
          </li>
          <li className={styles['sidebar-menu__item']}>
            <Link href="/" className={`${styles['page-button']} ${isActive('/') ? styles.active : ''} ${styles['home-btn']}`}>
              Home
            </Link>
          </li>
          {/* <li className={styles['sidebar-menu__item']}>
            <Link href="/kols">
              <p className={`${styles['page-button']} ${isActive('/kols') ? styles.active : ''} ${styles['promotion-btn']}`}>KOLs Promotion</p>
            </Link>
          </li> */}
          {/* <li className={styles['sidebar-menu__item']}>
            <Link href="/early-stage">
              <p className={`${styles['page-button']} ${isActive('/early-stage') ? styles.active : ''} ${styles['investments-btn']}`}>Early-Stage</p>
            </Link>
          </li> */}
          {/* <li className={styles['sidebar-menu__item']}>
            <Link href="/blog">
              <p className={`${styles['page-button']} ${isActive('/blog') ? styles.active : ''} ${styles['blog-btn']}`}>Blog</p>
            </Link>
          </li> */}
          {/* <li className={styles['sidebar-menu__item']}>
            <Link href="/contacts">
              <p className={`${styles['page-button']} ${isActive('/contacts') ? styles.active : ''} ${styles['contact-btn']}`}>Contact Us</p>
            </Link>
          </li> */}
        </ul>
        <div className={styles.banner}>
          {/* <a href="https://invest.100f.com/zimabank" target="_blank" className={`${styles['banner-item']} ${styles['banner-item__private']}`} alt="Private Sale - ZimaBank" ></a>
          <div className={`${styles['banner-item']} ${styles['banner-item__educational']}`}>
              <p className={styles['banner-note']}>Updates coming soon</p>
              <p className={styles['banner-title']}>Educational platform</p>
          </div>
          <div className={`${styles['banner-item']} ${styles['banner-item__sales']}`}>
              <p className={styles['banner-note']}>Release coming soon</p>
              <p className={styles['banner-title']}>Sales funnel building platform</p>
          </div> */}
          <a href='https://x.com/crypto100f' target='_blank' className={`${styles['banner-item']}`}></a>
          <a href='https://www.linkedin.com/company/100f' target='_blank' className={`${styles['banner-item']}`}></a>
          <a className={`${styles['banner-item']}`}></a>
          <a className={`${styles['banner-item']}`}></a>
          <a className={`${styles['banner-item']}`}></a>
          <a className={`${styles['banner-item']}`}></a>
          <a className={`${styles['banner-item']}`}></a>
        </div>
      </motion.nav>
    </div>
  );
};

export default BurgerMenu;
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {  useRouter } from 'next/router';
import styles from './index.module.css';
import PopupWaitlist from '/components/sections/waitlist-popup';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
const Sidebar = () => {

  const [popupOpen, setPopupOpen] = useState(false);
  const router = useRouter();

  const isActive = (basePath) => {
    if (basePath === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(basePath) && router.pathname !== '/';
  };


  const showPopup = () => {
    setPopupOpen(true);
    
    MySwal.fire({
        html: <PopupWaitlist />,  
        showConfirmButton: false, 
        showCloseButton: true,  
        backdrop: true, 
      }).then(() => {
        setPopupOpen(false); 
      });
  };


  return (
    <nav className={styles.sidebar}>
      <Link href="/" className={styles['main-logo']}>
        <Image src="/assets/img/logo-new.png" alt="logo" width={180} height={35}/>
      </Link>
      <ul className={styles['sidebar-menu']}>
        <li className={styles['sidebar-menu__item']}>
          <button onClick={showPopup} className={`${styles['page-button']} ${isActive('/') && popupOpen ? styles.active : ''} ${styles['waitlist-btn']}`}>
            Join the Waitlist
          </button>
        </li>
        <li className={styles['sidebar-menu__item']}>
          <Link href="/" className={`${styles['page-button']} ${isActive('/') && !popupOpen ? styles.active : ''} ${styles['home-btn']}`}>
            Home
          </Link>
        </li>
        {/* <li className={styles['sidebar-menu__item']}>
          <Link href="/kols">
            <p className={`${styles['page-button']} ${isActive('/kols') ? styles.active : ''} ${styles['promotion-btn']}`}>KOLs Promotion</p>
          </Link>
        </li>
        <li className={styles['sidebar-menu__item']}>
          <Link href="/early-stage">
            <p className={`${styles['page-button']} ${isActive('/early-stage') ? styles.active : ''} ${styles['investments-btn']}`}>Early-Stage</p>
          </Link>
        </li> */}
        {/* <li className={styles['sidebar-menu__item']}>
          <Link href="/blog">
            <p className={`${styles['page-button']} ${isActive('/blog') ? styles.active : ''} ${styles['blog-btn']}`}>Blog</p>
          </Link>
        </li>
        <li className={styles['sidebar-menu__item']}>
          <Link href="/contacts">
            <p className={`${styles['page-button']} ${isActive('/contacts') ? styles.active : ''} ${styles['contact-btn']}`}>Contact Us</p>
          </Link>
        </li> */}
      </ul>
      <div className={styles.banner}>
        {/* <a href="https://invest.100f.com/zimabank" target="_blank" className={`${styles['banner-item']} ${styles['banner-item__private']}`}></a> */}
        {/* <div className={`${styles['banner-item']} ${styles['banner-item__educational']}`}>
            <p className={styles['banner-note']}>Updates coming soon</p>
            <p className={styles['banner-title']}>Educational platform</p>
        </div> */}
        <a href='https://x.com/crypto100f' target='_blank' className={`${styles['banner-item']}`}></a>
        <a href='https://www.linkedin.com/company/100f' target='_blank' className={`${styles['banner-item']}`}></a>
        <a className={`${styles['banner-item']}`}></a>
        <a className={`${styles['banner-item']}`}></a>
        <a className={`${styles['banner-item']}`}></a>
        <a className={`${styles['banner-item']}`}></a>
        <a className={`${styles['banner-item']}`}></a>
      </div>
    </nav>
  );
};

export default Sidebar;
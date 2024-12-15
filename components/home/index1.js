import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './index.module.css';
import { motion } from "framer-motion";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const maxHeight = 505; // Максимальная длина линии
  const halfWayPoint = maxHeight / 2; // Точка поворота линии

  useEffect(() => {
    // Функция для обновления scrollY
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Добавляем слушатель события прокрутки
    window.addEventListener('scroll', handleScroll);

    // Убираем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Вычисление угла поворота линии
  const rotationAngle = scrollY >= halfWayPoint ? 45 : 0; // Поворачиваем на 45 градусов на половине пути

  return (
    <>
      <motion.section className={styles["first-screen-card"]}>
        <div className={styles['right-side']}>
          <h1 className={styles["main-title"]}>100 Franklins&#39; Journey <br />to <span className={styles['text-gradient']}>Unicorn Status</span>: Backed by Numbers,<br /> Not Promises</h1>
          <h1 className={`${styles["main-title"]} ${styles.mobile}`}>100 Franklins&#39; Journey <br /> to <span className={styles['text-gradient']}>Unicorn Status</span> : Backed by Numbers, Not Promises</h1>
          <p className={styles.subtitle}>We are building a unified platform <br />connecting qualified Web3 projects <br />with an knowledgeable audience</p>
          <Link to="contacts" smooth={true} duration={700} className={styles['schedule-btn']}>Schedule Demo</Link>
        </div>
      </motion.section>

      <motion.section className={styles["global-problem"]}>
        <svg className={styles['marker-line']} xmlns="http://www.w3.org/2000/svg" width="2" height={maxHeight} viewBox="0 0 2 505" fill="none">
          <g transform={`rotate(${rotationAngle}, 1, ${Math.min(scrollY + 200, maxHeight) / 2})`}>
            <line x1="1" y1="0" x2="1" y2={Math.min(scrollY + 200, maxHeight)} stroke="url(#paint0_linear_1741_1916)" strokeWidth="2" strokeDasharray="2 2" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_1741_1916" x1="-0.5" y1="0" x2="-0.500005" y2={Math.min(scrollY + 200, maxHeight)} gradientUnits="userSpaceOnUse">
              <stop stopColor="#23FFBE" />
              <stop offset="1" stopColor="#23FFBE" />
            </linearGradient>
          </defs>
        </svg>
      </motion.section>
    </>
  );
};

export default Home;

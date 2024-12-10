import React, { useState, useEffect  } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import 'react-phone-input-2/lib/style.css';
import { motion, AnimatePresence } from "framer-motion";

const AddPopup = ({ closePopup }) => {
  
  const [step, setStep] = useState(0);
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };
  
  const [isFirstRender, setIsFirstRender] = useState(true);
  const handleNext = () => {
    setDirection(1); // Вправо
    setStep(1);
    setIsFirstRender(false);
  };

  const handlePrev = () => {
    setDirection(-1); // Влево
    setStep(0);
    setIsFirstRender(false);
  };
  const [direction, setDirection] = useState(0);

  return (
    <>
      <AnimatePresence custom={direction} mode="wait">
        {step === 0 && (
          <motion.section
            key="step-0"
            className={styles.wrapper}
            variants={slideVariants}
            initial={isFirstRender ? "center" : "enter"} 
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ duration: 0.5 }}
          >
            <button onClick={()=>closePopup(true)} id="customCloseBtn" className={styles["custom-close"]}></button>
            <div className={styles.desc}>
              <div className={styles.info}>
                <h3 className={styles.title}>
                  Dr. Jack Torobin
                </h3>
                <p className={styles.subtitle}>
                  Fortune 500 Strategic Advisor
                </p>
                <ul className={styles['popup-list']}>
                  <li className={styles['popup-list-item']}>
                  30+ years advising tech giants & startups
                  </li>
                  <li className={styles['popup-list-item']}>
                  Worked with Microsoft, Sony, Nintendo, etc
                  </li>
                  <li className={styles['popup-list-item']}>
                  PhD in Psychology and Digital Media (USC)
                  </li>
                  <li className={styles['popup-list-item']}>
                  Pioneer in EV and mobile technology
                  </li>
                </ul>
              </div>
              <Image src='/assets/img/expert1.png' width={145} height={131}  />
            </div>
            <div className={styles.content}>
              <h4 className={styles['content-title']}>
                Expert Endorsement
              </h4>
              <Image src='/assets/img/video.png' width={521} height={293}  />
            </div>
            <span onClick={handleNext} className={styles["arrow-right"]}>
            </span>
          </motion.section>
        )}

        {step === 1 && (
          <motion.section
            key="step-1"
            className={styles.wrapper}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ duration: 0.5 }}
          >
            <button onClick={()=>closePopup(true)} id="customCloseBtn" className={styles["custom-close"]}></button>
            <div className={styles.desc}>
              <div className={styles.info}>
                <h3 className={styles.title}>
                  Nikolay Shkilev, PhD
                </h3>
                <p className={styles.subtitle}>
                  Strategic Web 3 Advisor
                </p>
                <ul className={styles['popup-list']}>
                  <li className={styles['popup-list-item']}>
                    Founder of Private Business Club for VCs
                  </li>
                  <li className={styles['popup-list-item']}>
                    Founder of Zelwin Ecosystem, AR Generation, MagiScan 3D
                  </li>
                  <li className={styles['popup-list-item']}>
                    Rated Top 3 in People of BlockChain by Forbes
                  </li>
                </ul>
              </div>
              <Image src='/assets/img/expert2.png' width={145} height={131}  />
            </div>
            <div className={styles.content}>
              <h4 className={styles['content-title']}>
                Expert Endorsement
              </h4>
              <Image src='/assets/img/screen.png' width={212} height={316}  />
            </div>
            <span onClick={handlePrev} className={styles["arrow-left"]}>
            </span>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default AddPopup;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './index.module.css';
import Image from 'next/image';

const NewsPlugin = () => {
 

  return (
    // <div className={styles['news-wrapper']}>
    //   <div className={styles['plugin-inner']}>
    //     <div className={styles['plugin-item']}>
    //       <p className={styles['item-news']}>
    //         From January 2024: <span>340K ARR, 211 Paying Clients, 74% Retention</span>
    //       </p>
    //       <p className={styles['item-news']}>
    //         Closing PreSeed $1.7 mln
    //       </p>
    //       <p className={styles['item-news']}>
    //         Ready to Scale
    //       </p>
    //     </div>
    //   </div>
      
    // </div>

    <div className={styles['news-wrapper']}>
      <div className={styles['plugin-inner']}>
        <div className={styles['plugin-item']}>
          <p className={styles['item-news']}>
            From January 2024: <span>340K ARR, 211 Paying Clients, 74% Retention</span>
          </p>
          <p className={styles['item-news']}>
            Closing PreSeed $1.7 mln
          </p>
          <p className={styles['item-news-yellow']}>
            Ready to Scale
          </p>
          <p className={styles['item-news']}>
            From January 2024: <span>340K ARR, 211 Paying Clients, 74% Retention</span>
          </p>
          <p className={styles['item-news']}>
            Closing PreSeed $1.7 mln
          </p>
          <p className={styles['item-news-yellow']}>
            Ready to Scale
          </p>
        </div>
        
      </div>
      <div className={styles['plugin-inner-dublicate']}>
        <div className={styles['plugin-item']}>
          <p className={styles['item-news']}>
            From January 2024: <span>340K ARR, 211 Paying Clients, 74% Retention</span>
          </p>
          <p className={styles['item-news']}>
            Closing PreSeed $1.7 mln
          </p>
          <p className={styles['item-news-yellow']}>
            Ready to Scale
          </p>
          <p className={styles['item-news']}>
            From January 2024: <span>340K ARR, 211 Paying Clients, 74% Retention</span>
          </p>
          <p className={styles['item-news']}>
            Closing PreSeed $1.7 mln
          </p>
          <p className={styles['item-news-yellow']}>
            Ready to Scale
          </p>
        </div>
        
      </div>
      
    </div>
   
  );
};

export default NewsPlugin;
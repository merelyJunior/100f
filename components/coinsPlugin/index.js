import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './index.module.css';
import Image from 'next/image';
const CoinsPlugin = () => {

const [currCoins, setCurrCoins] = useState([]);


useEffect(() => {
  const fetchCoins = async () => {
    try {
      let cachedCoins = localStorage.getItem('cachedCoins');
      let lastFetchedAt = localStorage.getItem('lastFetchedAt');

      if (cachedCoins && lastFetchedAt && Date.now() - parseInt(lastFetchedAt) < 3600000) {
        setCurrCoins(JSON.parse(cachedCoins));
      } else {
        const response = await axios.get('/api/get-coins');
        const result = response.data;
        if (result) {
          setCurrCoins(result);
          localStorage.setItem('cachedCoins', JSON.stringify(result));
          localStorage.setItem('lastFetchedAt', Date.now().toString());
        } else {
          console.log(result.error);
        }
      }
    } catch (error) {
      console.error('Error fetching coins:', error);
    }
  };

  fetchCoins();

  const interval = setInterval(fetchCoins, 3600000);
  return () => clearInterval(interval);
}, []);


  return (
    <div className={styles['currency-wrapper']}>
      <div className={styles['plugin-inner']}>
        {currCoins.map((item, index) => {
         const formattedPrice = `$${item.price.toFixed(2)}`;
         const formattedChange = `${item.percent_change_1h.toFixed(2)}%`;
         const rateClass = item.percent_change_1h < 0 ? `${styles['value-rate']} ${styles['negative-rate']}` : styles['value-rate'];
         const normalizedCryptoName = item.name.replace(/[%\s]/g, '_').toLowerCase();
         const imgFolder = '/assets/img/' + normalizedCryptoName + '.png';

          return(
            <div key={index} className={styles['plugin-item']}>
              <div className={styles['item-currency']}>
                  <div className={styles['currency-info']}>
                      <div className={styles['currency-logo']}><Image src={imgFolder} alt={item.name} width={100} height={100} /></div>
                      <p className={styles['currency-name']}>
                        {item.name}
                        <span className={styles['currency-span']}>{item.symbol}</span>
                      </p>
                  </div>
                  <div className={styles['currency-value']}>
                    <div className={styles['value-price']}>{formattedPrice}</div>
                    <div className={rateClass}>{formattedChange}</div>
                  </div>
              </div>
          </div>
          )
        })} 
      </div>
      <div className={styles['plugin-inner']}>
        {currCoins.map((item, index) => {
         const formattedPrice = `$${item.price.toFixed(2)}`;
         const formattedChange = `${item.percent_change_1h.toFixed(2)}%`;
         const rateClass = item.percent_change_1h < 0 ? `${styles['value-rate']} ${styles['negative-rate']}` : styles['value-rate'];
         const normalizedCryptoName = item.name.replace(/[%\s]/g, '_').toLowerCase();
         const imgFolder = '/assets/img/' + normalizedCryptoName + '.png';

          return(
            <div key={index} className={styles['plugin-item']}>
              <div className={styles['item-currency']}>
                  <div className={styles['currency-info']}>
                      <div className={styles['currency-logo']}><Image src={imgFolder} alt={item.name} width={100} height={100} /></div>
                      <p className={styles['currency-name']}>
                        {item.name}
                        <span className={styles['currency-span']}>{item.symbol}</span>
                      </p>
                  </div>
                  <div className={styles['currency-value']}>
                    <div className={styles['value-price']}>{formattedPrice}</div>
                    <div className={rateClass}>{formattedChange}</div>
                  </div>
              </div>
          </div>
          )
        })} 
      </div>
    </div>
   
  );
};

export default CoinsPlugin;
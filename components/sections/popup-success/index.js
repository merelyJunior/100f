import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
const PopupSuccess = () => {
  return (
    <div className={styles['popup-container']}>
      <Image className={styles.image} src="/assets/img/mail.png" width={135} height={120}/>
      <h2 className={styles.heading}>SUCCESSFUL SUBMISSION!</h2>
      <p className={styles.desc}>Thank you for reaching out. We’ll contact you shortly
      </p>
      <a onClick={() => Swal.close()} className={styles['popup-close-btn']}>Thanks!</a>
  </div>
  );
};

export default PopupSuccess;

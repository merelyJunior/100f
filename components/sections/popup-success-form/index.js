import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
const PopupSuccess = () => {
  return (
   <section className={styles.contacts}>
   <div className={styles['form-inner']}>
    <form lassName={styles['mailing-form']} method="post" autoComplete="off" noValidate="noValidate">
      <h2 className={styles.heading}>SUCCESSFUL SUBMISSION!</h2>
       <p className={styles.desc}>Your request was successfully sent!
       </p>
       <a onClick={() => Swal.close()} className={styles['mailing-form-btn']}>Thanks</a>
    </form>
     <div className={`${styles['contacts-content']}`}>
       <div className={`${styles['contacts-content__img']}`}>
         <Image src="/assets/img/popup-franklin.png" alt="franklins" width={271} height={325}/>
       </div>
     </div>
   </div>
 </section>
  );
};

export default PopupSuccess;

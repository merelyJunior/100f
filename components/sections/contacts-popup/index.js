import React, { useState, useRef } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import Swal from 'sweetalert2';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Contacts = ({ contacts }) => {
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState('');
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef(null);

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'This field is empty';
    if (!formData.email) {
      newErrors.email = 'This field is empty';
    } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    const phoneDigits = phone.replace(/\D/g, ''); 
    if (!phone) {
      newErrors.tel = 'This field is empty';
    } else if (phoneDigits.length < 10 || phoneDigits.length > 15) {
       newErrors.tel = 'Please enter a valid phone';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('tel', phone);
    const data = Object.fromEntries(formData.entries());
    const newErrors = validateForm(data);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        setIsSending(true);
        formRef.current.reset(); 
        setStatus('');
      } else {
        setStatus(`Failed to send email: ${result.error}`);
      }
    } catch (error) {
      setStatus(`Failed to send email: ${error.message}`);
      console.error('Error sending email:', error);
    }
  };

  const popupContentRender = () => {
    if (!isSending) {
      return (
        <section className={styles.contacts}>
          <div className={styles['form-inner']}>
            <form ref={formRef} className={styles['mailing-form']} method="post" autoComplete="off" noValidate="noValidate" onSubmit={handleSubmit}>
              <div className={`${styles['form-group']} ${contacts ? styles['fix-form-group'] : ''}`}>
                <h2 className={styles['main-title']}>Request For Pitch</h2>
                <p className={styles.subtitle}>
                  If you are interested in the investment opportunities please fill out the contacts below
                </p>
              </div>
              
              <div className={styles['form-group']}>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
                <div className={`${styles['error-message']} ${errors.name ? styles.active : ''}`}>{errors.name}</div>
              </div>

              <div className={styles['form-group']}>
                <PhoneInput
                  country={'us'}
                  value={phone}
                  onChange={phone => setPhone(phone)}
                  required
                />
                <div className={`${styles['error-message']} ${errors.tel ? styles.active : ''}`}>{errors.tel}</div>
              </div>

              <div className={styles['form-group']}>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
                <div className={`${styles['error-message']} ${errors.email ? styles.active : ''}`}>{errors.email}</div>
              </div>

              <div className={styles['button-cont']}>
                <button id="submitBtn" type="submit" className={styles['mailing-form-btn']}>
                  Let`s talk!
                </button>
                {status && <p>{status}</p>}
              </div>
            </form>
            <div className={`${styles['contacts-content']} ${contacts ? styles['fix-content'] : ''}`}>
              <div className={`${styles['contacts-content__img']} ${contacts ? styles['fix-img'] : ''}`}>
                <Image src="/assets/img/popup-franklin.png" alt="franklins" width={271} height={325} />
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className={styles.contacts}>
          <div className={styles['form-inner-end']}>
            <form lassName={styles['mailing-form']} method="post" autoComplete="off" noValidate="noValidate">
              <h2 className={styles.heading}>SUCCESSFUL SUBMISSION!</h2>
              <p className={styles.desc}>Your request was successfully sent!
              </p>
              <a onClick={() => Swal.close()} className={`${styles['mailing-form-btn']} ${styles['popup-close-btn']}`}>Thanks</a>
            </form>
            <div className={`${styles['contacts-content']}`}>
              <div className={`${styles['contacts-content__img']}`}>
                <Image src="/assets/img/popup-franklin.png" alt="franklins" width={271} height={325}/>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };

  return popupContentRender();
};

export default Contacts;

import React, { useState, useRef  } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
const Contacts = ({ contacts }) => {
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'This field is empty';
    if (!formData.company) newErrors.company = 'This field is empty';
    if (!formData.email) {
      newErrors.email = 'This field is empty';
    } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.tel) newErrors.tel = 'This field is empty';
    if (!formData.request) newErrors.request = 'This field is empty';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
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
        setStatus('Your request was successfully sent!');
        formRef.current.reset(); 
        setTimeout(() => {
          setStatus('');
        }, 1500);
      } else {
        setStatus(`Failed to send email: ${result.error}`);
      }
    } catch (error) {
      setStatus(`Failed to send email: ${error.message}`);
      console.error('Error sending email:', error);
    }
  };

  return (
    <section className={styles.contacts}>
      {!contacts && (
        <>
          <h2 className={styles['main-title']}>Have a crypto project or want to get early-stage access?<br /></h2>
          <p className={styles.subtitle}>
            Whether you&#39;re interested in submitting your own project or participating in a crypto project early stages, we have a solution for you. Fill out the form, and let&#39;s talk!
          </p>
        </>
      )}
      <div className={styles['form-inner']}>
        <form ref={formRef} className={styles['mailing-form']} method="post" autoComplete="off" noValidate="noValidate" onSubmit={handleSubmit}>
          {contacts && (
            <div className={`${styles['form-group']} ${contacts ? styles['fix-form-group'] : ''}`}>
              <p className="subtitle">
                Complete the form below to request a consultation with one of our crypto experts to identify your core needs, develop the optimal solution and determine the best opportunity for you
              </p>
            </div>
          )}
          <div className={styles['form-group']}>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
            <div className={`${styles['error-message']} ${errors.name ? styles.active : ''}`}>{errors.name}</div>
          </div>
          <div className={styles['form-group']}>
            <input type="text" id="company" name="company" placeholder="Your Company" required />
            <div className={`${styles['error-message']} ${errors.company ? styles.active : ''}`}>{errors.company}</div>
          </div>
          <div className={styles['form-group']}>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
            <div className={`${styles['error-message']} ${errors.email ? styles.active : ''}`}>{errors.email}</div>
          </div>
          <div className={styles['form-group']}>
            <input type="text" id="tel" name="tel" placeholder="Your Phone" required />
            <div className={`${styles['error-message']} ${errors.tel ? styles.active : ''}`}>{errors.tel}</div>
          </div>
          <div className={styles['form-group']}>
            <input type="text" id="telegram" name="telegram" placeholder="Your Telegram" />
          </div>
          <div className={styles['form-group']}>
            <input type="text" id="request" name="request" placeholder="Your Request" required />
            <div className={`${styles['error-message']} ${errors.request ? styles.active : ''}`}>{errors.request}</div>
          </div>
          <div className={styles['button-cont']}>
            <button id="submitBtn" type="submit" className={styles['mailing-form-btn']}>Let&apos;s talk!</button>
            {status && <p>{status}</p>}
          </div>
        </form>
        <div className={`${styles['contacts-content']} ${contacts ? styles['fix-content'] : ''}`}>
          <div className={`${styles['contacts-content__img']} ${contacts ? styles['fix-img'] : ''}`}>
            <Image src="/assets/img/IMG_8976.png" alt="franklins" width={360} height={300}/>
          </div>
          <p className={styles['contacts-content__title']}>100 Franklins <small>Crypto Investment Media</small></p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

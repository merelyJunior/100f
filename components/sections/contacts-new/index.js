import React, { useState, useRef  } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PopupSuccess from '/components/sections/popup-success';
const MySwal = withReactContent(Swal);
const Contacts = ({ contacts }) => {


  const showPopup = () => {
    MySwal.fire({
        html: <PopupSuccess />,  
        showConfirmButton: false, 
        showCloseButton: true,  
        backdrop: true, 
        customClass: {
          popup: 'my-swal-popup',
        },
      });
  };

  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validateForm = (formData) => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'This field is empty';
    }
  
    if (!formData.capacity) {
      newErrors.capacity = 'This field is empty';
    }
  
    if (!formData.whatsApp) {
      newErrors.whatsApp = 'This field is empty';
    }
  
    if (!formData.email) {
      newErrors.email = 'This field is empty';
    } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Please enter a valid email address';
    }
  
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
      showPopup();
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

  return (
    <section className={styles.contacts}>
      <div className={styles['form-inner']}>
        <span className={`${styles.note}`}>Minimum 100X <br/>On Investment</span>
        <span className={`${styles.note} ${styles.mobile}`}>Minimum 100X On Investment</span>
        <form ref={formRef} className={styles['mailing-form']} method="post" autoComplete="off" noValidate="noValidate" onSubmit={handleSubmit}>
          {!contacts && (
            <>
              <h2 className={styles['main-title']}>DON’T MISS THE PRE-SEED INVESTMENT OPPORTUNITY</h2>
              {/* <p className={styles.subtitle}>
              Complete the form below to get early access to features, updates, and opportunities
              </p> */}
            </>
          )}
          <div className={styles['form-group']}>
            <input type="text" id="name" name="name" placeholder="Full Name*" required />
            <div className={`${styles['error-message']} ${errors.name ? styles.active : ''}`}>{errors.name}</div>
          </div>
          <div className={styles['form-group']}>
            <input type="email" id="email" name="email" placeholder="Email*" required />
            <div className={`${styles['error-message']} ${errors.email ? styles.active : ''}`}>{errors.email}</div>
          </div>
          <div className={styles['form-group']}>
            <input type="text" id="company" name="company" placeholder="Company/Fund Name"  />
          </div>
          <div className={styles['form-group']}>
            <input type="text" id="whatsApp" name="whatsApp" placeholder="WhatsApp*" required />
            <div className={`${styles['error-message']} ${errors.whatsApp ? styles.active : ''}`}>{errors.whatsApp}</div>
          </div>
          <div className={styles['form-group']}>
          <div className={`${styles['error-message']} ${errors.capacity ? styles.active : ''}`}>{errors.capacity}</div>
            <select id="capacity" name="capacity" required>
              <option value="" disabled selected>Select Investment Capacity*</option>
              <option value="Under $100,000">Under $100,000</option>
              <option value="$100,000 - $499,999">$100,000 - $499,999</option>
              <option value="$500,000 - $999,999">$500,000 - $999,999</option>
              <option value="$1,000,000 - $4,999,999">$1,000,000 - $4,999,999</option>
              <option value="$5,000,000 - $9,999,999">$5,000,000 - $9,999,999</option>
              <option value="$10,000,000+">$10,000,000+</option>
            </select>
            <div className={`${styles['error-message']} ${errors.capacity ? styles.active : ''}`}>{errors.capacity}</div>
          </div>
          <div className={styles['button-cont']}>
            <button id="submitBtn" type="submit" className={styles['mailing-form-btn']}>Request Investment Deck</button>
            {status && <p>{status}</p>}
          </div>
        </form>
        <Image src="/assets/img/form-franklin.png" alt="franklins" width={429} height={373}/>
      </div>
    </section>
  );
};

export default Contacts;

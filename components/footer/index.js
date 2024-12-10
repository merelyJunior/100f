import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';
const Footer = () => {

  return (
    <footer className={styles.footer}>
    
      <div>
          <div className={styles['footer-logo']}>
              <Image src="/assets/img/footer-logo.png" alt="logo" width={75} height={23} />
          </div>
          <p>The unified crypto platform connecting qualified projects with an educated audience</p>
        
      </div>
      {/* <div>
          <a className={`${styles['footer-button']} ${styles['footer-button-adaptive']}`} href="mailto:info@100f.com">Email us</a>
          <Link href="/policy" className={`${styles['docs']} ${styles['docs-policy']}`}>Terms and Privacy Policy</Link>
          <Link href="/disclaimer"className={`${styles['docs']} ${styles['docs-disclaimer']}`}>Disclaimer </Link>
        
      </div> */}
      <div>
          <a className={styles['footer-button']} href="mailto:info@100f.com">Email us</a>
          <p className={styles.copyright}>2024 © 100 Franklins</p>
          <p className={styles['copyright-adaptive']}>2024 © 100 Franklins</p>
      </div>
    </footer>
  );
};

export default Footer;
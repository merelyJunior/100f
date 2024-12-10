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
        
      </div>
      <div>
          <p className={styles.copyright}>The unified platform connecting qualified web3 projects with a knowledgeable audience</p>
      </div>
    </footer>
  );
};

export default Footer;
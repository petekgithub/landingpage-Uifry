import styles from "./styles.module.scss";
import Image from 'next/image';
import Logo from "Common/assets/imgs/headerlogo.svg";
import Mail from "Common/assets/imgs/mail.svg";
import Phone from "Common/assets/imgs/phone.svg";


const Footer: React.FC = () =>  {
  return (
      <footer className={styles.container}>
        <div className={styles.content}>
          <div className={styles.innerContent}> 
            <div className={styles.col}> 
              <Image src={Logo} alt="FooterLogo" width={117} height={35}/>
              <div className={styles.mail}>
                <Image src={Mail} alt="MailLogo" />
                <a href="mailto:help@frybix.com">
                  Help@Frybix.com
                </a>
              </div>
              <div className={styles.phone}>
                <Image src={Phone} alt="PhoneLogo" />
                <a href="+1 234 456 678 89">
                  +1234 456 678 89
                </a>
              </div>
            </div>   
            <div className={styles.col}>
                <h4>Links</h4>
                <a>Home</a>
                <a>About Us</a>
                <a>Bookings</a>
                <a>Blogs</a>
            </div>
            <div className={styles.col}>
                <h4>Legal</h4>
                <a>Terms of Use</a>
                <a>Privacy Policy</a>
                <a>Cookie Policy</a>
            </div>
            <div className={styles.col}>
                <h4>Product</h4>
                <a>Take Tour</a>
                <a>Live Chat</a>
                <a>Reviews</a>
            </div>
            <div className={styles.col}>
              <h4>Newsletter</h4>
              <h5>Stay Up To Date</h5>
              <div className={styles.inputContainer}>
                <input placeholder="Your Email" />
                <button>Subscribe</button>
              </div>
            </div> 
            </div>
            <div className={styles.copyright}>Copyright 2022 Uifry.Com All Rights Reserved</div>
        </div> 
    </footer>
  );
};

export default Footer;
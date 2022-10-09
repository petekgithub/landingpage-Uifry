import styles from "./styles.module.scss";
import Image from 'next/image';
import Logo from "../../../Common/assets/imgs/headerlogo.svg";
import Mail from "../../../Common/assets/imgs/mail.svg";
import Phone from "../../../Common/assets/imgs/phone.svg";


const Footer = () =>  {
  return (
    <section id="Footer" className={styles.container}>
      <footer className={styles.innerContainer}>
        <div className={styles.contact}>
          <Image src={Logo} alt="FooterLogo" />
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
        <div className={styles.links}>
          <ul>
            <h3>Links</h3>
            <li>Home</li>
            <li>About Us</li>
            <li>Bookings</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className={styles.legal}>
          <ul>
            <h3>Legal</h3>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className={styles.product}>
          <ul>
            <h1>Product</h1>
            <li>Take Tour</li>
            <li>Live Chat</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className={styles.newsletter}>
          <h1>Newsletter</h1>
          <h4>Stay Up To Date</h4>
          <input type="email" name="email" className={styles.subscribeInput} placeholder="Your email"/>
          <button type="submit" className={styles.submitButton}>Subscribe</button>
        </div> 
    </footer>
    <div className={styles.frame}>
      <p>Copyright 2022 Uifry.Com All Rights Reserved </p>
    </div>
    </section>
  );
};

export default Footer;
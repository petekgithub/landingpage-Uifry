import styles from "./styles.module.scss";
import Image from 'next/image';
import Light from "../../../Common/assets/imgs/introlight.svg";
import Video from "../../../Common/assets/icons/introvideoicon.svg";
import Logo from "../../../Common/assets/imgs/intrologo.svg";
import Phone from "../../../Common/assets/imgs/introphone.svg";


import Link from "next/link";


const Intro = () => {
  return (
    <div>
      <section id="Intro" className={styles.container}>
        <div className={styles.left}> 
          <div className={styles.info}>
            <h1 className={styles.title}>Make The Best Financial Decisions</h1>
            <p className={styles.p}>Cum Et Convallis Risus Placerat Aliquam, Nuno, Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
            <Image className={styles.light} src={Light} alt="IntroLight" layout="fill" objectPosition="top"/>   
          </div>
          <div className={styles.media}> 
            <button className={styles.getStartedButton}>GetStarted</button>
            <div className={styles.watch}>
              <Image className={styles.video} src={Video} alt="IntroVideoWatch"/>
              <button className={styles.button}>
                <Link href="https://www.youtube.com/watch?v=OS8taasZl8k&list=RDOS8taasZl8k&start_radio=1">
                  <a target="_blank">Watch Video</a>
                </Link>
              </button>
            </div>
          </div>
          <div>
            <Image className={styles.logo} src={Logo} alt="IntroLogo" width="613" height="427"/> 
          </div>
        </div>
        <div className={styles.right}>
          <Image className={styles.phone} src={Phone} alt="IntroPhone" width="712" height="832" /> 
        </div> 
      </section>
    </div>
  );
};

export default Intro;
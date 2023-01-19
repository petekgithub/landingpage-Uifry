import styles from "./styles.module.scss";
import Image from "next/image";
//import Light from "Common/assets/imgs/introlight.svg";
import Video from "@/public/assets/icons/introvideoicon.svg";
import Logo from "@/public/assets/imgs/intrologo.svg";
import Phone from "@/public/assets/imgs/introphone.svg";
import Link from "next/link";

const Intro: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.info}>
            <h1>Make The Best Financial Decisions</h1>
            <p>
              Cum Et Convallis Risus Placerat Aliquam, Nuno, Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
            {/* <Image className={styles.light} src={Light} alt="IntroLight" layout="fill" objectPosition="top"/>    */}
          </div>
          <div className={styles.media}>
            <button>GetStarted</button>
            <div className={styles.watch}>
              <Image src={Video} alt="IntroVideoWatch" width="29" height="29" />
              <button>
                <Link href="https://www.youtube.com/watch?v=OS8taasZl8k&list=RDOS8taasZl8k&start_radio=1">
                  <a target="_blank">Watch Video</a>
                </Link>
              </button>
            </div>
          </div>
          <div>
            <Image src={Logo} alt="IntroLogo" width="613" height="427" />
          </div>
        </div>
        <div className={styles.right}>
          <Image src={Phone} alt="IntroPhone" width="712" height="832" />
        </div>
      </div>
    </div>
  );
};

export default Intro;

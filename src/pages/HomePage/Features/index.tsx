import styles from "./styles.module.scss";
import Image from "next/image";
import Star from "@/public/assets/icons/staricon.svg";
import Circle from "@/public/assets/icons/circleicon.svg";
import Phone from "@/public/assets/imgs/featuresphone.svg";
import Square from "@/public/assets/icons/squareicon.svg";

const Features: React.FC = () => {
  return (
    <section id="Features" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Image
            className={styles.img}
            src={Phone}
            alt="FeaturesPhone"
            width="638"
            height="748"
          />
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <h1>FEATURES</h1>
            <h3>Uifry Premium</h3>
          </div>
          <div className={styles.inner}>
            <Image src={Star} alt="StarIcon" width="22" height="22" />
            <h4>Budgeting Intervals</h4>
          </div>
          <p>
            Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
            Faucibus Tincidut Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>

          <div className={styles.inner}>
            <Image src={Circle} alt="CircleIcon" width="20" height="22" />
            <h4>Budgeting Intervals</h4>
          </div>
          <p>
            Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
            Faucibus Tincidut Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>

          <div className={styles.inner}>
            <Image src={Square} alt="SquareIcon" width="20" height="20" />
            <h4>Budgeting Intervals</h4>
          </div>
          <p>
            Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
            Faucibus Tincidut Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

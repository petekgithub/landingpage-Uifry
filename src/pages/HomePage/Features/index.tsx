import styles from "./styles.module.scss";
import Image from 'next/image';
import Star from "../../../Common/assets/icons/staricon.svg";
import Circle from "../../../Common/assets/icons/circleicon.svg";
import Phone from "../../../Common/assets/imgs/featuresphone.svg";
import Square from "../../../Common/assets/icons/squareicon.svg";



const Features = () =>  {
  return (
    <section id="Features" className={styles.container}>
      <div className={styles.left}>
        <Image className={styles.phone} src={Phone} alt="FeaturesPhone"/>
      </div>
      <div className={styles.right}>
        <div className={styles.info}>
          <span>FEATURES</span>
          <h1>Uifry Premium</h1>
        </div>  

          <div className={styles.inner}>
            <Image className={styles.image} src={Star} alt="StarIcon"/>
            <h4 className={styles.title1}>Budgeting Intervals</h4>
          </div>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
            Faucibus Tincidut Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>

          <div className={styles.inner}>
            <Image className={styles.image} src={Circle} alt="CircleIcon"/>
            <h4 className={styles.title1}>Budgeting Intervals</h4>
          </div>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
            Faucibus Tincidut Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>

          <div className={styles.inner}>
            <Image className={styles.image} src={Square} alt="SquareIcon"/>
            <h4 className={styles.title1}>Budgeting Intervals</h4>
          </div>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
            Faucibus Tincidut Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
          
      </div>
      
    </section>
  );
};

export default Features;
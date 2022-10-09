import styles from "./styles.module.scss";
import Image from 'next/image';
import Ring from "../../../Common/assets/icons/ringicon.svg";
import Phone from "../../../Common/assets/imgs/advantagesphone.svg";


const Advantages = () =>  {
  return (
    <section id="Advantages" className={styles.container}>
      <div className={styles.right}>
        <Image
          className={styles.phone} 
          src={Phone}
          alt="AdvantagesPhone"
        />
      </div>
      <div className={styles.left}>
        <div className={styles.info}>
          <span>Advantages</span>
          <h1>Why Choose Uifry?</h1>
        </div> 
        
        <div className={styles.inner}>
          <Image className={styles.title} src={Ring} alt="RingIcon"/> 
          <h4 className={styles.title}>Clever Notifications</h4>
        </div>
        <p>
          Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultricies, In Ultricies Malesuade Elit Mauris Etiam 
          Odio, Duis, Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis, Rhoncus, Diam, Suspendisse Sit Nunc, 
          Gravida Eu, Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
        </p>
      </div>
    </section>
  );
};

export default Advantages;
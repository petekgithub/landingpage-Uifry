import styles from "./styles.module.scss";
import Image from "next/image";
import Ring from "@/public/assets/icons/ringicon.svg";
import Phone from "@/public/assets/imgs/advantagesphone.svg";

const Advantages = () => {
  return (
    <section id="Advantages" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.info}>
            <h1>Advantages</h1>
            <h3>Why Choose Uifry?</h3>
          </div>
          <div className={styles.inner}>
            <Image src={Ring} alt="RingIcon" width="48" height="49" />
            <h4 className={styles.title}>Clever Notifications</h4>
          </div>
          <p>
            Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultricies,
            In Ultricies Malesuade Elit Mauris Etiam Odio, Duis, Tristique
            Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis, Rhoncus, Diam,
            Suspendisse Sit Nunc, Gravida Eu, Lectus Eget Eget Ac Dolor Neque
            Lorem Sapien, Suspendisse Aliquam.
          </p>
        </div>
        <div className={styles.right}>
          <Image src={Phone} alt="AdvantagesPhone" width="720" height="761" />
        </div>
      </div>
    </section>
  );
};

export default Advantages;

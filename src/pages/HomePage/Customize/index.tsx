import styles from "./styles.module.scss";
import Image from "next/image";
import Star from "@/public/assets/icons/customizestaricon.svg";
import Phone from "@/public/assets/imgs/customizephone.svg";

const Customize: React.FC = () => {
  return (
    <section id="Customize" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Image src={Phone} alt="CustomizePhone" width="720" height="762" />
        </div>
        <div className={styles.right}>
          <div className={styles.inner}>
            <Image src={Star} alt="StarIcon" width="48" height="49" />
            <h1>Fully Customizable</h1>
          </div>
          <p>
            Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultricies,
            In Ultricies Malesuade Elit Mauris Etiam Odio, Duis, Tristique
            Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis, Rhoncus, Diam,
            Suspendisse Sit Nunc, Gravida Eu, Lectus Eget Eget Ac Dolor Neque
            Lorem Sapien, Suspendisse Aliquam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Customize;

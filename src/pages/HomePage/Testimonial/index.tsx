import styles from "./styles.module.scss";
import Image from "next/image";
import Testimoniaal from "@/public/assets/imgs/testimonial.svg";
import Heads from "@/public/assets/imgs/testimonialheads.svg";

const Testimonial: React.FC = () => {
  return (
    <section id="Testimonial" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.partOne}>
          <h1>TESTIMONIAL</h1>
          <h3>What our Users Say About Us?</h3>
        </div>
        <div className={styles.partTwo}>
          <div className={styles.left}>
            <Image
              src={Testimoniaal}
              alt="Testimonial"
              width="735"
              height="725"
            />
          </div>
          <div className={styles.right}>
            <div className={styles.innerContent}>
              <h2>The Best Financial Accounting App Ever!</h2>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </p>
              <div className={styles.heads}>
                <Image
                  src={Heads}
                  alt="TestimonialHeads"
                  width="192"
                  height="41"
                />
                <span>Nick Jonas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

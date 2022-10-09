import styles from "./styles.module.scss";
import Image from 'next/image';
import Testimoniaal from "../../../Common/assets/imgs/testimonial.svg";
import Heads from "../../../Common/assets/imgs/testimonialheads.svg";


const Testimonial = () =>  {
  return (
    <section id="Testimonial" className={styles.container}>       
      <div className={styles.title}>
        <span>TESTIMONIAL</span>
        <h1>What our Users Say About Us?</h1>
      </div>
      <div className={styles.innerContainer}> 
        <div className={styles.left}>
          <Image src={Testimoniaal} alt="Testimonial"/>
        </div>
        <div className={styles.right}>
          <div className={styles.innerContent}>
            <h3>The Best Financial Accounting App Ever!</h3>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. 
              In ultrices malesuada elit mauris etiam odio. 
              Duis tristique lacus, et blandit viverra nisl velit. 
              Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. 
              Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
            <div className={styles.heads}> 
              <Image src={Heads} alt="TestimonialHeads"/>
              <span>Nick Jonas</span>
            </div>
          </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonial;
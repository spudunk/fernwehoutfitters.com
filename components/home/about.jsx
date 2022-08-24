import styles from "./about.module.css";
import Image from "next/image";

import image1 from "../../public/about1.webp";
import image2 from "../../public/about2.webp";
import image3 from "../../public/about3.webp";

const image3styles = {};

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>Mission Statement</h2>
          <p>
            We strive to inspire humans to step out of their societal boxes, to
            go experience life in other places, and leave the world better than
            they find it.
          </p>
          <p  className={styles.quote}>
            &quot;The world is a book and those who do not travel read only one
            page.&quot; - St. Augustine
          </p>
        </div>

        <div className={styles.imageBox}>
          <Image
            className={styles.image}
            src={image2}
            alt={"model posing on cliff wearing fernweh clothing"}
            priority
          />
        </div>

        <div>
          <h2 className={styles.title}>Goals</h2>
          <p>
            Our goal is to expand operations, support and grow other small
            business through helping them share their products all over the
            world.
          </p>
          <p className={styles.quote}>
            &quote;When you support handmade you are not just supporting a person,
            small business, family, our economy; you are purchasing a small part
            of an artist&apos;s heart.&quote; - Anonymus
          </p>
        </div>

        <div className={`${styles.imageBox} ${styles.image1}`}>
          <Image
            className={styles.image}
            src={image1}
            alt={"model wearing fernweh hat"}
          />
        </div>

        <div>
          <h2 className={styles.title}>Owner &amp; Opperator </h2>
          <p>
            My name is Angel Victoria Allen, thanks for exploring my website! I
            have a personal dream of connecting people through experiences and
            shared memories! Fernweh Outfitters is a evolving business and
            through it I hope to leave a positive impact on my customers and the
            planet we share.
          </p>
          <p className={styles.quote}>
            &quot;There are no foreign lands. It is the traveler only who is
            foreign.&quot; - Robert Louis Stevenson
          </p>
        </div>
        <div className={styles.imageBox}>
          <Image
            className={styles.image}
            src={image3}
            alt={"hiker near the beach wearing fernweh drawsting bag"}
          />
        </div>
      </div>
    </section>
  );
};

export default About;

import styles from "./contact.module.css";
import { Facebook, Etsy, Instagram } from '@icons-pack/react-simple-icons';
import Link from "next/link";


const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.quotebox}>
            <div className={styles.backdrop}>
              Time flies. It&apos;s up to you to be the navigator. - Robert
              Orben
            </div>
        </div>

        <div className={`${styles.card} ${styles.backdrop}`}>
          <p>Operated Remotely</p>
          <p>Current Location: Washtington State USA</p>
          <p>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/fernweh.outfitters/">
              <Instagram className={styles.icon} /> fernweh.outfitters 
            </a>
          </p>
          <p>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/fernwehoutfittersLLC">
              <Facebook className={styles.icon} /> fernwehoutfittersLLC
            </a>
          </p>
          <p>
            <a target="_blank" rel="noreferrer" href="https://www.etsy.com/shop/FernwahCo">
              <Etsy className={styles.icon} /> etsy.com/FernwahCo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import styles from "./contact.module.css";
import { Facebook, Etsy, Instagram } from '@icons-pack/react-simple-icons';


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
          <p><Instagram className={styles.icon} /> fernweh.outfitters </p>
          <p><Facebook className={styles.icon} /> facebook.com/fernwehoutfittersLLC</p>
          <p><Etsy className={styles.icon} /> etsy.com/FernwahCo</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

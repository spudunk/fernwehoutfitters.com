import styles from "./contact.module.css";

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
          <p>fernweh.outfitters </p>
          <p>facebook.com/fernwehoutfittersLLC</p>
          <p>etsy.com/FernwahCo</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>fern•weh </h1>
        <p className={styles.subtitle}>
          [FEIRN-veyh] - noun <br />
          Origin: German <br />A craving for travel. Being homesick for places
          you&apos;ve never been.
        </p>
      </div>
    </section>
  );
};

export default Hero;

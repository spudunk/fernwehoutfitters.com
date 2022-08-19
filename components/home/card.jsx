import Image from "next/image";

import styles from "./card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={props.image.src} alt={props.image.alt} />
      </div>
      <h3 className={styles.title}>{props.title}</h3>
      {props.children}
    </div>
  );
};

export default Card;

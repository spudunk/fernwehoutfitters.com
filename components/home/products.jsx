import Card from "./card";
import styles from "./products.module.css";

import seedPic from "../../public/seedpaper.png";
import crystalPic from "../../public/crystal.webp";
import apparelPic from "../../public/apparel.jpeg";

const Products = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Products</h2>

        <div className={styles.products}>
          <Card
            title="Seed Paper"
            image={{
              src: seedPic,
              alt: "seeds embedded in natural paper",
            }}
          >
            <p>Handcrafted seed paper tags <br />
            An eco friendly twist turning a gift tag from future trash to future flowers.  </p>
          </Card>

          <Card
            title="Crystals"
            image={{
              src: crystalPic,
              alt: "open geode in model's hand",
            }}
          >
            <p>
              &quot;Crystals are living beings at the beginning of
              creation.&quot;
              <br />
              -Nikola Tesla
            </p>
          </Card>

          <Card
            title="Apparel"
            image={{
              src: apparelPic,
              alt: "model wearing fernweh hat",
            }}
          >
            <p>
              Clothing and Accessories made from Organic and/or recycled
              materials.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;

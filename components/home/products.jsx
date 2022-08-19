import Card from "./card";
import styles from "./products.module.css";

import mugPic from "../../public/mug.jpeg";
import crystalPic from "../../public/crystal.webp";
import apparelPic from "../../public/apparel.jpeg";

const Products = () => {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Products</h2>

        <div className={styles.products}>
          <Card
            title="Mugs"
            image={{
              src: mugPic,
              alt: "handcrafted ceramic mug with mushroom decoration",
            }}
          >
            <p>Handcrafted One Of A Kind Mugs From Artist Jamie Quills</p>
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

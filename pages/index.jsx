// Next
import Head from "next/head";
// import Image from "next/image";

// Sections
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Products from "../components/home/products";
import Contact from "../components/home/contact";
import Footer from "../components/footer";

// Styles
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fernweh Outfitters</title>
        <meta name="description" content="Homepage of Fernweh Outfitters" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

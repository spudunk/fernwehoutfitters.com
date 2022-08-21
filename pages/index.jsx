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

import { app, analytics } from "../firebase/initFirebase";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fernweh Outfitters</title>
        <meta name="description" content="Homepage of Fernweh Outfitters" />
        <link rel="icon" href="/favicon.ico" />
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

import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Hemsida</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam eum
          doloribus reiciendis quae facere nihil blanditiis magni iure vero, eos
          cum modi laboriosam exercitationem asperiores fugiat molestias
          possimus consequuntur nam?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          voluptate nulla ipsam ducimus, facilis veritatis reiciendis quae quod
          commodi ab! Quisquam, amet. Suscipit quae magni assumenda ut eaque est
          dolorum!
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See all Ninjas
        </Link>
      </div>
    </>
  );
}

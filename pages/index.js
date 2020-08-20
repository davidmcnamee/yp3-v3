import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Input, Button } from "antd";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>YP3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>YP3</h1>
        <Input className={styles.inputBox} placeholder="Enter URL here" />
        <Button className={styles.downloadBtn}>Download</Button>
      </main>
    </div>
  );
}

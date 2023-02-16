import Image from "next/image";
import { Raleway } from "@next/font/google";
import styles from "./page.module.css";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={`${raleway.className}`}>This is the new Way</h1>
    </main>
  );
}

import Image from "next/image";
import styles from "./styles.module.css";
import leftarrow from "../../../../public/leftarrow.png";
import rightarrow from "../../../../public/rightarrow.png";

export default function Card({ cardInfo }: any) {
  const { title, desc, icon } = cardInfo;

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <Image src={leftarrow} alt="left arrow" />
      </div>
      <Image src={icon} alt={title} />
      <h1>{title}</h1>
      <h2>{desc}</h2>
      <div className={styles.right}>
        <Image src={rightarrow} alt="right arrow" />
      </div>
    </div>
  );
}

import Image from "next/image";
import styles from "./styles.module.css";

export default function Card({ cardInfo }: any) {
  const { icon, text, subtext } = cardInfo;

  return (
    <div className={styles.card}>
      <Image src={icon} alt={text} />
      <h2>{text}</h2>
      <h3>{subtext}</h3>
    </div>
  );
}

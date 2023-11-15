import Image from "next/image";
import styles from "./styles.module.css";
import leftarrow from "../../../../public/leftarrow.svg";
import rightarrow from "../../../../public/rightarrow.svg";
import star from "../../../../public/star.svg";

export default function Card({ cardInfo }: any) {
  const { name, icon, text } = cardInfo;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.left}>
          <Image src={leftarrow} alt="left arrow" />
        </div>
        <div className={styles.firstRow}>
          <div>
            <Image src={icon} alt={name} />
          </div>
          <div className={styles.header}>
            <div className={styles.rating}>
              <Image src={star} alt="star" />
              <Image src={star} alt="star" />
              <Image src={star} alt="star" />
              <Image src={star} alt="star" />
              <Image src={star} alt="star" />
            </div>
            <h1>{name}</h1>
          </div>
        </div>
        <h2>{text}</h2>
        <div className={styles.right}>
          <Image src={rightarrow} alt="right arrow" />
        </div>
      </div>
      <div className={styles.circles}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

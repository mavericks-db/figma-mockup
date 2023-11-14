import styles from "./styles.module.css";
import p2star from "../../../../public/p2star.png";
import Image from "next/image";

export default function Review() {
  return (
    <div className={styles.review}>
      <div className={styles.rating}>
        <Image src={p2star} alt="p2star" />
        <Image src={p2star} alt="p2star" />
        <Image src={p2star} alt="p2star" />
        <Image src={p2star} alt="p2star" />
        <Image src={p2star} alt="p2star" />
      </div>
      <p>Over 500+ 5 Star Reviews Online</p>
    </div>
  );
}

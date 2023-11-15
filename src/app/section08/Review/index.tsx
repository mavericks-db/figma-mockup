import styles from "./styles.module.css";
import star from "../../../../public/star.png";
import Image from "next/image";

export default function Review() {
  return (
    <div className={styles.review}>
      <div className={styles.rating}>
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
      </div>
      <p>Over 500+ 5 Star Reviews Online</p>
    </div>
  );
}

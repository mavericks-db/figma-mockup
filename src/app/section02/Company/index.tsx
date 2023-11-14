import styles from "./styles.module.css";
import company01 from "../../../../public/company01.png";
import company02 from "../../../../public/company02.png";
import Image from "next/image";

export default function Company() {
  return (
    <div className={styles.company}>
      <p>as seen in</p>
      <div className={styles.mobile}>
        <Image src={company01} alt="company01" />
      </div>
      <div className={styles.desktop}>
        <Image src={company02} alt="company02" />
      </div>
      <div className={styles.circles}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

import styles from "./styles.module.css";
import faq01 from "../../../../public/faq01.png";
import faq02 from "../../../../public/faq02.png";
import faq03 from "../../../../public/faq03.png";
import faq04 from "../../../../public/faq04.png";
import faq05 from "../../../../public/faq05.png";
import Image from "next/image";

export default function ImgGroup() {
  return (
    <div className={styles.main}>
      <div className={styles.imggroup}>
        <Image src={faq01} alt="faq01" />
        <Image src={faq02} alt="faq02" />
        <Image src={faq03} alt="faq03" />
        <Image src={faq04} alt="faq04" />
        <Image src={faq05} alt="faq05" />
      </div>
    </div>
  );
}

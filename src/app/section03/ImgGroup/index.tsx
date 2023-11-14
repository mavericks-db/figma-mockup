import Image from "next/image";
import styles from "./styles.module.css";
import p301 from "../../../../public/p301.png";
import p302 from "../../../../public/p302.png";
import p303 from "../../../../public/p303.png";
import p3imggrp from "../../../../public/p3imggrp.png";

export default function ImgGroup() {
  return (
    <>
      <div className={styles.imggroup}>
        <Image src={p301} alt="standing_girl" />
        <Image src={p302} alt="white_robe" />
        <Image src={p303} alt="white_robe" />
      </div>
    </>
  );
}

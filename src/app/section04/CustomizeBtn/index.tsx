import styles from "./styles.module.css";
import arrow from "../../../../public/arrowright.svg";
import Image from "next/image";

export default function CustomizeBtn() {
  return (
    <>
      <button className={styles.customizebtn}>
        <span>Customize Your Outfit</span>
        <Image src={arrow} alt="right_arrow" />
      </button>
    </>
  );
}

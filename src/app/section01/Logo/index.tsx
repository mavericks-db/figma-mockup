import Image from "next/image";
import logo from "../../../../public/byteex.png";
import styles from "./styles.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image src={logo} alt="byteex_logo" />
    </div>
  );
}

import aa from "../../../../public/aa.png";
import bb from "../../../../public/bb.png";
import cc from "../../../../public/cc.png";
import styles from "./styles.module.css";
import Image from "next/image";

export default function ListGroup() {
  return (
    <>
      <ul className={styles.listgroup}>
        <li>
          <Image src={aa} alt="sun_moon" />
          <span>Beautiful, comfortable loungewear for day or night.</span>
        </li>
        <li>
          <Image src={bb} alt="sun_moon" />
          <span>No wasteful extras, like tags or plastic packaging.</span>
        </li>
        <li>
          <Image src={cc} alt="sun_moon" />
          <span>
            Our signature fabric is incredibly comfortable — unlike anything
            you&apos;ve ever felt.
          </span>
        </li>
      </ul>
    </>
  );
}

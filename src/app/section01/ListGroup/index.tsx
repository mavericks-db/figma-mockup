import sunmoon from "../../../../public/sunmoon.svg";
import cart from "../../../../public/cart.svg";
import waves from "../../../../public/waves.svg";
import styles from "./styles.module.css";
import Image from "next/image";

export default function ListGroup() {
  return (
    <>
      <ul className={styles.listgroup}>
        <li>
          <Image src={sunmoon} alt="sun_moon" />
          <span>Beautiful, comfortable loungewear for day or night.</span>
        </li>
        <li>
          <Image src={cart} alt="cart" />
          <span>No wasteful extras, like tags or plastic packaging.</span>
        </li>
        <li>
          <Image src={waves} alt="waves" />
          <span>
            Our signature fabric is incredibly comfortable — unlike anything
            you&apos;ve ever felt.
          </span>
        </li>
      </ul>
    </>
  );
}

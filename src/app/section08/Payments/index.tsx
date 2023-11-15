import styles from "./styles.module.css";
import clock from "../../../../public/clock.svg";
import cardtypes from "../../../../public/cardtypes.svg";
import Image from "next/image";

export default function Payments() {
  return (
    <div className={styles.payments}>
      <div>
        <Image src={clock} alt="clock" />
        <span>Ships in 1-2 Days</span>
      </div>
      {"|"}
      <Image src={cardtypes} alt="cardtypes" />
    </div>
  );
}

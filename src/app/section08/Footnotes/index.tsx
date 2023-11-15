import Image from "next/image";
import styles from "./styles.module.css";
import f01 from "../../../../public/f01.svg";
import f02 from "../../../../public/f02.svg";
import f03 from "../../../../public/f03.svg";

export default function Footnotes() {
  return (
    <>
      <ul className={styles.footnotes}>
        <li>
          <Image src={f01} alt="f01" />
          <p>
            FREE Shipping on <br /> Orders over $200
          </p>
        </li>
        <li>
          <Image src={f02} alt="f02" />
          <p>
            Over 500+ 5 Star <br /> Reviews Online
          </p>
        </li>
        <li>
          <Image src={f03} alt="f03" />
          <p>
            Made ethically <br /> and responsibly.
          </p>
        </li>
      </ul>
    </>
  );
}

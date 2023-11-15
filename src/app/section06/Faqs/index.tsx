import styles from "./styles.module.css";
import minus from "../../../../public/-minus.png";
import plus from "../../../../public/+plus.png";
import Image from "next/image";

export default function Faqs() {
  return (
    <>
      <ul className={styles.faqs}>
        <li>
          <div>
            <h3>lorem ipsum dolor sit amet</h3>
            <p>
              Our fabrics and garments are made in Portugal. We build strong
              relationships with our immediate suppliers and visit as often as
              possible.
            </p>
          </div>
          <Image src={minus} alt="minus" />
        </li>
        <li>
          <div>
            <h3>lorem ipsum dolor sit amet</h3>
          </div>
          <Image src={plus} alt="plus" />
        </li>
        <li>
          <div>
            <h3>lorem ipsum dolor sit amet</h3>
          </div>
          <Image src={plus} alt="plus" />
        </li>
        <li>
          <div>
            <h3>lorem ipsum dolor sit amet</h3>
          </div>
          <Image src={plus} alt="plus" />
        </li>
        <li>
          <div>
            <h3>lorem ipsum dolor sit amet</h3>
          </div>
          <Image src={plus} alt="plus" />
        </li>
        <li>
          <div>
            <h3>lorem ipsum dolor sit amet</h3>
          </div>
          <Image src={plus} alt="plus" />
        </li>
      </ul>
    </>
  );
}

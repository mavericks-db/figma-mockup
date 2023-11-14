import styles from "./styles.module.css";
import icon01 from "../../../../public/icon01.png";
import icon02 from "../../../../public/icon02.png";
import icon03 from "../../../../public/icon03.png";
import icon04 from "../../../../public/icon04.png";
import Image from "next/image";

export default function IconDescription() {
  return (
    <>
      <ul className={styles.icondescription}>
        <li>
          <Image src={icon01} alt="icon01" />
          <div className={styles.subtext}>
            <h2>Ethically sourced.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </p>
          </div>
        </li>
        <li>
          <Image src={icon02} alt="icon02" />
          <div className={styles.subtext}>
            <h2>Responsibly made.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </p>
          </div>
        </li>
        <li>
          <Image src={icon03} alt="icon03" />
          <div className={styles.subtext}>
            <h2>Made for living in.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </p>
          </div>
        </li>
        <li>
          <Image src={icon04} alt="icon04" />
          <div className={styles.subtext}>
            <h2>Unimaginably comfortable.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}

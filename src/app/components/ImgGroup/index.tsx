import styles from "./styles.module.css";
import Image from "next/image";
import one from "../../../../public/001.png";
import two from "../../../../public/002.png";
import three from "../../../../public/003.png";
import four from "../../../../public/004.png";
import five from "../../../../public/005.png";
import group from "../../../../public/imggroup.png";

export default function ImgGroup() {
  return (
    <>
      <div className={styles.imggroup}>
        <Image src={one} alt="background_one" />
        <Image src={two} alt="girl_standing" />
        <Image src={three} alt="girl_standing2" />
        <Image src={four} alt="girl_reading" />
        <Image src={five} alt="background_two" />
      </div>
      <div className={styles.desktop}>
        <Image src={group} alt="group" />
      </div>
    </>
  );
}

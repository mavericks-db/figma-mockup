import styles from "./styles.module.css";
import sec801 from "../../../../public/sec801.png";
import sec802 from "../../../../public/sec802.png";
import sec803 from "../../../../public/sec803.png";
import sec804 from "../../../../public/sec804.png";
import sec805 from "../../../../public/sec805.png";
import Image from "next/image";

export default function ImgGroup() {
  const images = [sec801, sec802, sec803, sec804, sec805];

  return (
    <div className={styles.imggroup}>
      {images.map((el, idx) => (
        <Image src={el} alt={idx.toString()} key={idx} />
      ))}
    </div>
  );
}

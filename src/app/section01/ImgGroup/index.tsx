import styles from "./styles.module.css";
import Image from "next/image";
import one from "../../../../public/001.png";
import two from "../../../../public/002.png";
import three from "../../../../public/003.png";
import four from "../../../../public/004.png";
import five from "../../../../public/005.png";

export default function ImgGroup() {
  const images = [one, two, three, four, five];

  return (
    <>
      <div className={styles.imggroup}>
        {images.map((el, idx) => (
          <Image src={el} alt={idx.toString()} key={idx} />
        ))}
      </div>
    </>
  );
}

import Image from "next/image";
import styles from "./styles.module.css";
import whiterobe from "../../../../public/whiterobe.png";
import sm01 from "../../../../public/sm01.png";
import sm02 from "../../../../public/sm02.png";
import leftarrow from "../../../../public/leftarrow.png";
import rightarrow from "../../../../public/rightarrow.png";

export default function ImgScroll() {
  const sm = [sm01, sm02, sm01, sm01, sm01, sm01, sm01, sm01];

  return (
    <div className={styles.imgscroll}>
      <div className={styles.imgcontainer}>
        <div className={styles.left}>
          <Image src={leftarrow} alt="left_arrow" />
        </div>
        <Image src={whiterobe} alt="white_robe" />
        <div className={styles.right}>
          <Image src={rightarrow} alt="right_arrow" />
        </div>
        <div className={styles.thumbnails}>
          {sm.map((el, idx) => (
            <Image src={el} alt={idx.toString()} key={idx} />
          ))}
        </div>
      </div>
      <h1>White Robe</h1>
    </div>
  );
}

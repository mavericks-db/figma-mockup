import Bio from "../Bio";
import CustomizeBtn from "../CustomizeBtn";
import ImgGroup from "../ImgGroup";
import Title from "../Title";
import styles from "./styles.module.css";

export default function PageThree() {
  return (
    <>
      <div className={styles.pagethree}>
        <div className={styles.mobile}>
          <Title />
          <ImgGroup />
          <Bio />
        </div>
        <div className={styles.desktop}>
          <div>
            <ImgGroup />
          </div>
          <div>
            <Title />
            <Bio />
            <CustomizeBtn />
          </div>
        </div>
      </div>
    </>
  );
}

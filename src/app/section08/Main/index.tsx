import CustomizeBtn from "../CustomizeBtn";
import Footnotes from "../Footnotes";
import ImgGroup from "../ImgGroup";
import Payments from "../Payments";
import Review from "../Review";
import Title from "../Title";
import styles from "./styles.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
      <Title />
      <ImgGroup />
      <CustomizeBtn />
      <div className={styles.mobile}>
        <Review />
      </div>
      <div className={styles.desktop}>
        <Payments />
        <Footnotes />
      </div>
    </div>
  );
}

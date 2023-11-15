import CustomizeBtn from "../CustomizeBtn";
import Faqs from "../Faqs";
import ImgGroup from "../ImgGroup";
import Review from "../Review";
import Title from "../Title";
import styles from "./styles.module.css";

export default function Main() {
  return (
    <>
      <Title />
      <div className={styles.mobile}>
        <Faqs />
      </div>
      <div className={styles.desktop}>
        <Faqs />
        <ImgGroup />
      </div>
      <div className={styles.mobile}>
        <CustomizeBtn />
        <Review />
      </div>
    </>
  );
}

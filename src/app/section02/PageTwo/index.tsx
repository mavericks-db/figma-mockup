import Company from "../Company";
import CustomizeBtn from "../CustomizeBtn";
import IconDescription from "../IconDescription";
import ImgScroll from "../ImgScroll";
import Review from "../Review";
import Title from "../Title";
import styles from "./styles.module.css";

export default function PageTwo() {
  return (
    <>
      <div className={styles.pagetwo}>
        <div className={styles.mobile}>
          <Company />
          <Title />
          <ImgScroll />
          <IconDescription />
          <CustomizeBtn />
          <Review />
        </div>
        <div className={styles.desktop}>
          <Company />
          <div className={styles.content}>
            <div>
              <Title />
              <IconDescription />
            </div>
            <ImgScroll />
          </div>
        </div>
      </div>
    </>
  );
}

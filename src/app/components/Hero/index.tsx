import CustomizeBtn from "../CustomizeBtn";
import Header from "../Header";
import ImgGroup from "../ImgGroup";
import ListGroup from "../ListGroup";
import Logo from "../Logo";
import RevCloud from "../RevCloud";
import Subtitle from "../Subtitle";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <Header />
        <Logo />
        <Subtitle />
        <ImgGroup />
        <ListGroup />
        <CustomizeBtn />
        <RevCloud />
      </div>
      <div className={styles.desktop}>
        <Header />
        <Logo />
        <div className={styles.container}>
          <div className={styles.firstcol}>
            <Subtitle />
            <ListGroup />
            <CustomizeBtn />
            <RevCloud />
          </div>
          <div className={styles.secondcol}>
            <ImgGroup />
          </div>
        </div>
      </div>
    </>
  );
}

import Card from "../Card";
import ImgGrid from "../ImgGrid";
import Title from "../Title";
import styles from "./styles.module.css";
import blue from "../../../../public/blue.png";
import CustomizeBtn from "../CustomizeBtn";
import Review from "../Review";
import Image from "next/image";
import leftarrow from "../../../../public/leftarrow.png";
import rightarrow from "../../../../public/rightarrow.png";

export default function PageFive() {
  const cardInfo = [
    {
      name: "Jane, S.",
      icon: blue,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
    },
    {
      name: "Jane, S.",
      icon: blue,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.",
    },
    {
      name: "Jane, S.",
      icon: blue,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
    },
  ];

  return (
    <div className={styles.pagefive}>
      <Title />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat. Fusce non nibh luctus.
      </p>
      <ImgGrid />
      <div className={styles.mobile}>
        <Card cardInfo={cardInfo[1]} />
      </div>
      <div className={styles.desktop}>
        <div className={styles.container}>
          <div className={styles.left}>
            <Image src={leftarrow} alt="left arrow" />
          </div>
          <div className={styles.cardsWrapper}>
            {cardInfo.map((el, idx) => (
              <Card cardInfo={el} key={idx} />
            ))}
          </div>
          <div className={styles.right}>
            <Image src={rightarrow} alt="right arrow" />
          </div>
        </div>
      </div>
      <CustomizeBtn />
      <Review />
    </div>
  );
}

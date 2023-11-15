"use client";

import Card from "../Card";
import CustomizeBtn from "../CustomizeBtn";
import Title from "../Title";
import styles from "./styles.module.css";
import save from "../../../../public/save.png";
import ship from "../../../../public/ship.png";
import sunmoon from "../../../../public/sun-moon.png";
import Review from "../Review";

export default function PageFour() {
  const cardInfo = [
    {
      title: "You save.",
      desc: "Browse our store and find something you love.",
      icon: save,
    },
    {
      title: "We ship.",
      desc: "We ship your items within 1-2 days of receiving your order.",
      icon: ship,
    },
    {
      title: "You enjoy",
      desc: "Wear hernest around the house, out on the town, or in bed.",
      icon: sunmoon,
    },
  ];

  return (
    <div className={styles.pagefour}>
      <Title />
      <div className={styles.mobile}>
        <Card cardInfo={cardInfo[0]} />
      </div>
      <div className={styles.desktop}>
        {cardInfo.map((el, idx) => (
          <Card cardInfo={el} key={idx} />
        ))}
      </div>
      <CustomizeBtn />
      <Review />
    </div>
  );
}

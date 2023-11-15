import Card from "../Card";
import Title from "../Title";
import styles from "./styles.module.css";
import carbon from "../../../../public/carbon.png";
import water from "../../../../public/water.png";
import energy from "../../../../public/energy.png";

export default function Main() {
  const cardInfo = [
    {
      icon: carbon,
      text: "3,927 kg",
      subtext: "of CO2 saved",
    },
    {
      icon: water,
      text: "2,546,167 days",
      subtext: "of drinking water saved",
    },
    {
      icon: energy,
      text: "7,321 kWh",
      subtext: "of energy saved",
    },
  ];

  return (
    <div className={styles.main}>
      <Title />
      <div className={styles.mobile}>
        <Card cardInfo={cardInfo[0]} />
        <Card cardInfo={cardInfo[1]} />
      </div>
      <div className={styles.desktop}>
        {cardInfo.map((el, idx) => (
          <Card cardInfo={el} key={idx} />
        ))}
      </div>
    </div>
  );
}

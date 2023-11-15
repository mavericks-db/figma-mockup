import styles from "./styles.module.css";
import p5001 from "../../../../public/p5001.png";
import p5002 from "../../../../public/p5002.png";
import p5003 from "../../../../public/p5003.png";
import p5004 from "../../../../public/p5004.png";
import p5005 from "../../../../public/p5005.png";
import p5006 from "../../../../public/p5006.png";
import p5007 from "../../../../public/p5007.png";
import p5008 from "../../../../public/p5008.png";
import Image from "next/image";
import grid01 from "../../../../public/grid01.png";
import grid02 from "../../../../public/grid02.png";
import grid03 from "../../../../public/grid03.png";
import grid04 from "../../../../public/grid04.png";
import grid05 from "../../../../public/grid05.png";
import grid06 from "../../../../public/grid06.png";
import grid07 from "../../../../public/grid07.png";
import grid08 from "../../../../public/grid08.png";
import grid09 from "../../../../public/grid09.png";
import grid10 from "../../../../public/grid10.png";
import grid11 from "../../../../public/grid11.png";
import grid12 from "../../../../public/grid12.png";
import grid13 from "../../../../public/grid13.png";
import grid14 from "../../../../public/grid14.png";
import grid15 from "../../../../public/grid15.png";
import grid16 from "../../../../public/grid16.png";
import grid17 from "../../../../public/grid17.png";
import grid18 from "../../../../public/grid18.png";
import grid19 from "../../../../public/grid19.png";
import grid20 from "../../../../public/grid20.png";
import grid21 from "../../../../public/grid21.png";
import grid22 from "../../../../public/grid22.png";

export default function ImgGrid() {
  const mobile = [p5001, p5002, p5003, p5004, p5005, p5006, p5007, p5008];
  const desktop = [
    grid01,
    grid02,
    grid03,
    grid04,
    grid05,
    grid06,
    grid07,
    grid08,
    grid09,
    grid10,
    grid11,
    grid12,
    grid13,
    grid14,
    grid15,
    grid16,
    grid17,
    grid18,
    grid19,
    grid20,
    grid21,
    grid22,
  ];

  return (
    <div className={styles.imggrid}>
      <div className={styles.mobile}>
        {mobile.map((el, idx) => (
          <Image src={el} alt={idx.toString()} key={idx} />
        ))}
      </div>
      <div className={styles.desktop}>
        {desktop.map((el, idx) => (
          <Image src={el} alt={idx.toString()} key={idx} />
        ))}
      </div>
    </div>
  );
}

import styles from "./styles.module.css";
import avatar from "../../../../public/avatar.png";
import star from "../../../../public/star.png";
import Image from "next/image";

export default function RevCloud() {
  return (
    <>
      <div className={styles.revcloud}>
        <div className={styles.header}>
          <Image src={avatar} alt="avatar" />
          <div>
            <div className={styles.firstrow}>
              <p className={styles.desktop}>Amy P.</p>
              <div className={styles.rating}>
                <Image src={star} alt="star" />
                <Image src={star} alt="star" />
                <Image src={star} alt="star" />
                <Image src={star} alt="star" />
                <Image src={star} alt="star" />
              </div>
              <span className={styles.comment}>
                One of 500+ 5 Star Reviews Online
              </span>
            </div>
            <div className={styles.name}>
              <p className={styles.mobile}>Jane, S.</p>
            </div>
          </div>
        </div>
        <div>
          <p className={styles.mobile}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed sollicitudin dolor, non sodales justo.
          </p>
          <p className={styles.desktop}>
            Overjoyed with my Loungewear set. I have the jogger and the
            sweatshirt. Quality product on every level. From the compostable
            packaging, to the supplied washing bag, even the garments smells
            like fresh herbs when I first held them.
          </p>
        </div>
      </div>
    </>
  );
}

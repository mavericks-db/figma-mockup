import styles from "./styles.module.css";

export default function Title() {
  return (
    <div className={styles.title}>
      <div className={styles.mobile}>
        <h1>Our Total Green Impact</h1>
      </div>
      <div className={styles.desktop}>
        <h1>Our total green impact</h1>
      </div>
    </div>
  );
}

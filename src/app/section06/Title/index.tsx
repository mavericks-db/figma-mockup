import styles from "./styles.module.css";

export default function Title() {
  return (
    <div className={styles.title}>
      <div className={styles.mobile}>
        <h1>frequently asked questions.</h1>
      </div>
      <div className={styles.desktop}>
        <h1>Frequently asked questions.</h1>
      </div>
    </div>
  );
}

import styles from "./styles.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.mobile}>FREE SHIPPING on orders &gt; $200</h1>
        <h1 className={styles.desktop}>
          CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE
          SHIPPING on orders &gt; $200 | easy 45 day return window.
        </h1>
      </div>
    </>
  );
}

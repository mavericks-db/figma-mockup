import styles from "./styles.module.css";

export default function Title() {
  return (
    <div className={styles.title}>
      <h1>Find something you love.</h1>
      <div className={styles.mobile}>
        <p>Click below to browse our collection!</p>
      </div>
      <div className={styles.desktop}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat.
        </p>
      </div>
    </div>
  );
}

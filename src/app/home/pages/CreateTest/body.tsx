import styles from "./body.module.css";

export default function render() {
    return<div className={styles.content}>
    <div className={styles.left}>
    </div>

    <div className={styles.right}>
        <div className={styles.top}>  </div>
        <div className={styles.bottom}>  </div>
    </div>
  </div>;
}
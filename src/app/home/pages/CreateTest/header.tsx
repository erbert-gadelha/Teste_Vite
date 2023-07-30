import styles from "./header.module.css";

export default function render() {
    return<div className={styles.topbar}>
    <div className={styles.header}>
        <img className={styles.logo}src="public/logo.svg"/>

        <h2 className={styles.titulo}>Anifórum</h2>
    </div>
    <input className={styles.pesquisar} type="text" placeholder="pesquisar"/>
  </div>;
}
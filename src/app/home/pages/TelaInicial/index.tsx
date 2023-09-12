import styles from "./index.module.css";

const TelaInicial = () => {

  return (
    <section className={styles.container}>
        <div className={styles.esq}>
            <h2>Em alta</h2>
            <div className={styles.barra}>
                <div className={styles.barra_aux}>
                    <div className={styles.bloco}>em-alta</div>
                    <div className={styles.bloco}>em-alta</div>
                    <div className={styles.bloco}>em-alta</div>
                    <div className={styles.bloco}>em-alta</div>
                </div>
            </div>

            <h2>Mais bem avaliados</h2>
            <div className={styles.barra}>
                <div className={styles.barra_aux}>
                    <div className={styles.bloco}>mais-bem-avaliados</div>
                    <div className={styles.bloco}>mais-bem-avaliados</div>
                    <div className={styles.bloco}>mais-bem-avaliados</div>
                    <div className={styles.bloco}>mais-bem-avaliados</div>
                </div>
            </div>

            <h2>Mais Lidos/Vistos</h2>
            <div className={styles.barra}>
                <div className={styles.barra_aux}>
                    <div className={styles.bloco}>mais-lidos</div>
                    <div className={styles.bloco}>mais-lidos</div>
                    <div className={styles.bloco}>mais-lidos</div>
                    <div className={styles.bloco}>mais-lidos</div>
                </div>
            </div>
        </div>
        <div className={styles.dir}>
            <h1>Fórum</h1>
            <div>forum</div>            
        </div>
    </section>
  );
};

export default TelaInicial;

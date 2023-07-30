import styles from "./index.module.css";
import header from "./header";
import body from "./body";

const CreateTest = () => {

  return (
    <section className={styles.container}>
        {header()}
        {body()}
    </section>
  );
};

export default CreateTest;

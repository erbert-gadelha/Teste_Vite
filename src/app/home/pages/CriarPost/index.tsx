import styles from "./index.module.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const CriarPost = () => {
  
  const state = {user: '0', title: '1', body: '2', tags:'3'};
  let botao = document.getElementById("botao");
  

  const submeter = async (event) => {
    event.preventDefault();

    let temp;
    temp = document.getElementById("input-user");
    if (temp != null) {
      console.warn('todos os characteres em branco serão removidos de user');
      state.user = temp.value.replaceAll(/\s/g,'')
    }
    temp = document.getElementById("input-title");
    if (temp != null)
      state.title = temp.value.trim();
    temp = document.getElementById("input-body");
    if (temp != null)
      state.body = temp.value.trim();
    temp = document.getElementById("input-tags");
    if (temp != null) {
        console.warn('todos os characteres em branco serão removidos de tags');
        state.tags = temp.value.replaceAll(/\s/g,'').split(",");
    }

    try {
      //const state = {user: '0', title: '1', body: '2', tags:'3'};
      const response = await axios.post('https://teste-fastapi.vercel.app/post', state);
      window.alert(response.data.resposta);
      console.log(response.data);
    } catch (error) {
      window.alert(error);
    }
  };
  
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Crie um post</h1>
      <form className={styles.formContainer} onSubmit={submeter}>
        <div className={styles.user_title}>
          <input
            id="input-user"
            data-cy="input-user"
            placeholder="username"
            className={`${styles.input_bar} ${styles.input_user}`}
            onChange={handle}
          />
          <input
            id="input-title"
            data-cy="input-title"
            placeholder="title"
            className={`${styles.input_bar} ${styles.input_title}`}
            onChange={handle}
          />
        </div>
        <textarea 
            id="input-body"
            data-cy="input-body"
            placeholder="type here..."
            className= {`${styles.input_bar} ${styles.input_body}`}
            onChange={handle}
          />
        
        <div className={styles.tags_container}>
            <span>tags:</span>
            <input
              id="input-tags"
              data-cy="input-user"
              placeholder="ex: tag1, tag2"
              className={`${styles.input_bar} ${styles.input_user}`}
              onChange={handle}
            />
          </div>

        <button id="botao" data-cy="create" type="submit" className={styles.botao}>
          post
        </button>

        <Link data-cy="view-tests" to="/search">
          BUSCAR POSTS
        </Link>
      </form>
    </section>
  );
};

export default CriarPost;

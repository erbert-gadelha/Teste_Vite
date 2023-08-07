import styles from "./index.module.css";
import { Link } from "react-router-dom";
import Button from "../../../../shared/components/Button";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { forEach } from "cypress/types/lodash";
import Postagem from "../Postagem";

const CriarPost = () => {
  
  let button_ = document.getElementById("botao");
  let input_ = document.getElementById("input-tags");
  const tags = {'content': ''};

  const [retorno, setRetorno] = useState(null);
  
  const submeter = async (event) => {
    event.preventDefault();
      try {
        const response = await axios.get(`http://127.0.0.1:8000/search?tags=${tags['content']}`);
        setRetorno(response.data.resposta);
        console.log(response.data.resposta);        
      } catch (error) {
        window.alert(error);
      }
  }
/*
  useEffect(() => {
    //window.alert(retorno);
    console.log(retorno);

    if (retorno != null) {
      retorno.forEach((value) => {
        console.log(value[0]);
      });
    }
  }, [retorno]);
*/
  
  const handle = (event) => {
    event.preventDefault();

    if(button_ == null)
      button_ = document.getElementById("botao");
    if(input_ == null)
      input_ = document.getElementById("input-tags");

    try{
      tags['content'] = input_.value.replaceAll(/\s/g,'');
      button_.disabled = (tags['content'] == '');
    } catch(error) {
      window.alert(error);
    }
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Buscar por Tags</h1>
      <form className={styles.formContainer} onSubmit={submeter}>
        <div className={styles.search_bar}>
          <input
            id="input-tags"
            data-cy="input-tags"
            placeholder="tags (ex: humor, pokemon)"
            className={`${styles.input_bar} ${styles.input_tags}`}
            onChange={handle}
          />

          <Button id="botao" data-cy="create" type="submit" className={styles.botao} disabled>
            search
          </Button>
          
        </div>
        
        {retorno === null ? (
          <span>.</span>
        ) : retorno.length === 0 ? (
          <span>nenhum post correspondente</span>
        ) : (
          retorno.map((param) => <Postagem key={param.id} {...param} />)
        )}

        <Link data-cy="view-tests" to="/">
          CRIAR POSTS
        </Link>
      </form>
    </section>
  );
};

export default CriarPost;

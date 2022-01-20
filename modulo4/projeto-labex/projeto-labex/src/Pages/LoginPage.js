import axios from "axios";
import styled from "styled-components";
import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function PagePrivate() {

  const history = useHistory()

  const goToBack = () =>{
    history.goBack()
  }

  return (
    <div>
      <div></div>
      <div>
          <p>LoginPage</p>
          <form>
            <input type={"text"}/>
            <input type={"text"}/>
          </form>
          <button onClick={goToBack}>Voltar</button>
          <button>Entrar</button>
      </div>
    </div>
  );
}

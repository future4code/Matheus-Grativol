import axios from "axios";
import styled from "styled-components";
import {useState, useEffect} from 'react'

export default function PagePublic(props) {

  return (
    <div>
      <div>LabeX</div>
      <div>
          <p>Page Public</p>
          <button onClick={props.telaPrincipal}>Voltar</button>
          <button onClick={props.telaPrivada}>Inscrever-se</button>
      </div>
    </div>
  );
}

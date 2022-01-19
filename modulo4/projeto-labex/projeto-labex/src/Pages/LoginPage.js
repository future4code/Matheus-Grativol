import axios from "axios";
import styled from "styled-components";
import {useState, useEffect} from 'react'

export default function PagePrivate(props) {

  return (
    <div>
      <div></div>
      <div>
          <p>Page Private</p>
          <button onClick={props.telaPrincipal}>Voltar</button>
      </div>
    </div>
  );
}

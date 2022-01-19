import axios from "axios";
import styled from "styled-components";
import {useState, useEffect} from 'react'
// import PagePrivate from "./Pages/PagePrivate/PagePrivate";
// import PagePublic from "./Pages/PagePublic/PagePublic";

export default function PageP(props) {

  return (
    <div>
      <div>
        <p>LabeX</p>
      </div>
      <div>
        <button onClick={props.telaPublica}> Public </button>
        <button onClick={props.telaPrivada}> Private </button>
      </div>
    </div>
  );
}



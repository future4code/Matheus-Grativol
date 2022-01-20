import axios from "axios";
import styled from "styled-components";
import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import PagePrivate from "./Pages/PagePrivate/PagePrivate";
// import PagePublic from "./Pages/PagePublic/PagePublic";

export default function PageP() {

  const history = useHistory()

  const goToListTripsPage = () =>{
    history.push("ListTrips")
  }
  const goToLoginPage = () =>{
    history.push("Login")
  }
  return (
    <div>
      <div>
        <p>LabeX</p>
      </div>
      <div>
        <p>HomePage</p>
        <button onClick={goToListTripsPage}> Ver Viagens </button>
        <button onClick={goToLoginPage}> Área de Admin </button>
      </div>
    </div>
  );
}



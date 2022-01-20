import axios from "axios";
import styled from "styled-components";
import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function PagePublic() {

  const history = useHistory()

  const goApplicationForm = () =>{
    history.push("/ApplicationForm")
  }

  const goBack = () =>{
    history.goBack()
  }
  return (
    <div>
      <div>LabeX</div>
      <div>
          <p>ListTripsPage</p>
          <button onClick={goBack}>Voltar</button>
          <button onClick={goApplicationForm}>Inscrever-se</button>
      </div>
    </div>
  );
}

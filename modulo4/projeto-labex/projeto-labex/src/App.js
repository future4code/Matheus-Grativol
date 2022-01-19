import axios from "axios";
import styled from "styled-components";
import {useState, useEffect} from 'react'
import LoginPage from "./Pages/LoginPage";
import ListTripsPage from "./Pages/ListTripsPage";
import HomePage from "./Pages/HomePage"
function App() {
  const [tela , setTela] = useState ("telaPrincipal")

  const renderTela = ()=>{
    if (tela === "telaPrivada") {
      return <LoginPage telaPrincipal = {irParaPricipal}/>
    }else if (tela === "telaPublica") {
      return <ListTripsPage telaPrincipal = {irParaPricipal} telaPrivada = {irParaPrivada}/>
    }else if (tela === "telaPrincipal"){
      return <HomePage telaPublica = {irParaPublica} telaPrivada = {irParaPrivada}/>
    }
  }

  const irParaPrivada = () =>{
    return setTela ("telaPrivada")
  }
  const irParaPublica = () =>{
    return setTela ("telaPublica")
  }
  const irParaPricipal = () =>{
    return setTela ("telaPrincipal")
  }

  useEffect(() =>{
    renderTela()
  }, [tela])

  return (
    <div>
      {renderTela()}
    </div>
  );
}

export default App;

import axios from "axios";
import styled from "styled-components";
import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";


const ContainerPai = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`
const TitlePage = styled.h1`
  color: #32a4ffb8;
`
const ButtonStyled = styled.button`
    background-color: #32a4ffb8; /* Green */
    border: none;
    border-radius: 10px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 10px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    &:hover{
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }
`

export default function PageP() {

  const history = useHistory()

  const goToListTripsPage = () =>{
    history.push("ListTrips")
  }
  const goToLoginPage = () =>{
    history.push("Login")
  }

  const goToAdminHome = () =>{
    history.push("/AdminHome")
  }
  return (
    <ContainerPai>
      <div>
        <TitlePage>LabeX</TitlePage>
      </div>
      <div>
        <ButtonStyled onClick={goToListTripsPage}> Ver Viagens </ButtonStyled>
        <ButtonStyled onClick={goToAdminHome}> Área de Admin </ButtonStyled>
      </div>
    </ContainerPai>
  );
}



import axios from "axios";
import styled from "styled-components";
import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Base_URL } from "../utils/constants";

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
const ContainerTrip = styled.div`
  background-color: #f5f5f5e6; 
  border-radius: 10px;
  text-align: center;
  width: 30rem;
  padding: 1px 8px 8px 8px;
  /* margin-left: 50%; */
  margin-bottom: 10px;
`
const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #47c800;
`
const ContainerButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
`

export default function PagePublic() {

  const history = useHistory()
  const [trips , setTrips] = useState([])

  useEffect(()=>{
      axios.get(`${Base_URL}/trips`)
      .then(({ data })=>{
          setTrips(data.trips)
      })
      .catch((err)=>{
          alert(err)
      })
  },[])


  const goApplicationForm = () =>{
    history.push("/ApplicationForm")
  }

  const goBack = () =>{
    history.goBack()
  }

  const tripsList = trips.map((trip)=> {
    return(
        <ContainerTrip key= {trip.id}>
            <p>Nome: {trip.name} </p>
            <p>Descrição: {trip.description}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração: {trip.durationInDays}</p>
            <p>Data: {trip.date}</p>
        </ContainerTrip>   
    )
  })
  return (
    <div>
      <div>
        <Title>Lista de Viagens</Title>
      </div>
      <ContainerButton>
          <ButtonStyled onClick={goBack}>Voltar</ButtonStyled>
          <ButtonStyled onClick={goApplicationForm}>Inscrever-se</ButtonStyled>
      </ContainerButton>
      <div>
        {tripsList}
      </div>
    </div>
  );
}

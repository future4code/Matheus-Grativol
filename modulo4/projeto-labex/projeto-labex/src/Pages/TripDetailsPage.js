import axios from "axios";
import styled from "styled-components";
import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Base_URL } from "../utils/constants";
import { getToken } from "../utils/localStorage";


const ButtonStyled = styled.button`
    background-color: #32a4ffb8; /* Green */
    border: none;
    border-radius: 10px;
    color: white;
    padding: 10px 27px;
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
const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`
const ContainerPend = styled.div`
    background-color: #f5f5f5e6; 
    border-radius: 10px;
    text-align: center;
    width: 20rem;
    padding: 1px 8px 8px 8px;
    /* margin-left: 50%; */
    margin-bottom: 10px;
`

export default function TripDetailsPage() {

    const [detailsTrip , setDetailsTrip] = useState({})
    const [candidatesTrip , setCandidatesTrip] = useState([])
    const history = useHistory()
    const params = useParams()

    useEffect(()=>{
        axios.get(`${Base_URL}/trip/${params.id}`,{
            headers: {
                auth: getToken()
            }
        })
        .then(({data})=>{
            setDetailsTrip(data.trip)
            setCandidatesTrip(data.trip.candidates)
        })
        .catch((err)=>{
            alert(err)
        })
    }, [])

    const goToBack = ()=>{
        history.goBack()
    }

    console.log(candidatesTrip)
    const candidates = candidatesTrip.map((cand)=>{
        return(
            <ContainerPend key={cand.id} >
                <div>
                    <p>Nome: {cand.name}</p>
                    <p>Profissão: {cand.profession}</p>
                    <p>Idade: {cand.age}</p>
                    <p>País: {cand.country}</p>
                    <p>Texto de Candidatura: {cand.applicationText}</p>
                </div>
                <div>
                    <ButtonStyled>Aprovar</ButtonStyled>
                    <ButtonStyled>Reprovar</ButtonStyled>
                </div>
            </ContainerPend>
        )
    })
    return(
        <div>
            <div>
                <Title>Viagem da minha vida</Title>
            </div>
            <div>
                <p>Nome: {detailsTrip.name}</p>
                <p>Descrição: {detailsTrip.description}</p>
                <p>Planeta: {detailsTrip.planet}</p>
                <p>Duração: {detailsTrip.durationInDays}</p>
                <p>Data: {detailsTrip.date}</p>
            </div>
            <div>
                <ButtonStyled onClick={goToBack}>Voltar</ButtonStyled>
            </div>
            <div>
                <h3>Candidatos Pendentes</h3>
                {candidates}
            </div>
            <div>
                <h3>Candidatos Aprovados</h3>
                <ul>

                </ul>
            </div>
        </div>
    )
}
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
const ContainerButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
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
    margin-bottom: 10px;
`
const ContainerPendReturn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContainerPendReturnApro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: #f5f5f5e6; 
    border-radius: 10px;
    /* text-align: center; */
    /* width: 20rem; */
    padding: 1px 8px 8px 8px;
    margin-bottom: 10px;
`

export default function TripDetailsPage() {

    const [detailsTrip , setDetailsTrip] = useState({})
    const [candidatesTrip , setCandidatesTrip] = useState([])
    const [aprovados , setAprovados] = useState([])
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
            setAprovados(data.trip.approved)
        })
        .catch((err)=>{
            alert(err)
        })
    }, [])

    const putApproved = (candidateId, approved) =>{
        const body = {
            "approve": approved
        }
        axios.put(`${Base_URL}/trips/${params.id}/candidates/${candidateId}/decide`, body,{
            headers: {
                auth: getToken()
            }
        })
        .then(() =>{
            alert("Candidato aprovado!")
        })
        .catch((err)=>{
            alert(err)
        })
    }

    const goToBack = ()=>{
        history.goBack()
    }

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
                    <ButtonStyled onClick={()=> putApproved(cand.id, true)}>Aprovar</ButtonStyled>
                    <ButtonStyled onClick={()=> putApproved(cand.id, false)}>Reprovar</ButtonStyled>
                </div>
            </ContainerPend>
        )
    })
    const candAprovados = aprovados.map((candt)=>{
        return(
            <li key={candt.id}>{candt.name}</li>
        )        
    })
    return(
        <div>
            <div>
                <Title>Viagem da minha vida</Title>
            </div>
            <ContainerPendReturnApro>
                <p>Nome: {detailsTrip.name}</p>
                <p>Descrição: {detailsTrip.description}</p>
                <p>Planeta: {detailsTrip.planet}</p>
                <p>Duração: {detailsTrip.durationInDays}</p>
                <p>Data: {detailsTrip.date}</p>
            </ContainerPendReturnApro>
            <ContainerButton>
                <ButtonStyled onClick={goToBack}>Voltar</ButtonStyled>
            </ContainerButton>
            <ContainerPendReturn>
                <h3>Candidatos Pendentes</h3>
                {candidates}
            </ContainerPendReturn>
            <ContainerPendReturn>
                <div>
                    <h3>Candidatos Aprovados</h3>
                </div>
                <ContainerPendReturn>
                    <ul>
                        {candAprovados}
                    </ul>
                </ContainerPendReturn>    
            </ContainerPendReturn>
        </div>
    )
}
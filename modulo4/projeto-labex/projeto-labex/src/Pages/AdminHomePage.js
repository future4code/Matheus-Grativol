import axios from "axios"
import styled from "styled-components"
import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Base_URL } from "../utils/constants";
import Rmv from "../img/Rmv.png"
import { useParams } from "react-router-dom";

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
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    &:hover{
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }
`
const IconeRmv = styled.img`
    width: 2rem;
    border-radius: 50%;
    padding: 2px;
    &:hover{
        background-color: #dad8d8e6;
    }
`
const ContainerTrip = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5e6; 
    border: none;
    border-radius: 10px;
    color: #32a4ffb8;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 10px;
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    &:hover{
        box-shadow: 5px 5px 20px rgba(0,255,0)
    }
`
const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #47c800;
`

export default function AdminHomePage() {

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

    console.log(trips)
    const history = useHistory()

    const goToBack = () =>{
        history.goBack()
    }

    const goToTripDetails = (id) =>{
        history.push(`/TripDetails/${id}`)
    }

    const goToCreateTrip = () =>{
        history.push("/CreateTrip")
    }

    const tripsList = trips.map((trip)=> {
        return(
            <ContainerTrip key= {trip.id} onClick={()=>goToTripDetails(trip.id)}>
                <p> {trip.name} </p>
                <IconeRmv src= {Rmv} />
            </ContainerTrip>   
        )
    })

    return(
        <div>
            <div>
                <Title>Painel Administrativo</Title>
            </div>
            <div>
                <ButtonStyled onClick={goToBack}>Voltar</ButtonStyled>
                <ButtonStyled onClick={goToCreateTrip}>Criar Viagem</ButtonStyled>
                <ButtonStyled>Logout</ButtonStyled>
            </div>
            <div>
                {tripsList}
            </div>
        </div>
    )
}
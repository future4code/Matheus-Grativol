import axios from "axios"
import styled from "styled-components"
import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function AdminHomePage() {

    const history = useHistory()

    const goToBack = () =>{
        history.goBack()
    }

    const goToCreateTrip = () =>{
        history.push("/CreateTrip")
    }

    return(
        <div>
            <p>AdminHomePage</p>
            <button onClick={goToBack}>Voltar</button>
            <button onClick={goToCreateTrip}>Criar Viagem</button>
            <button>Logout</button>
        </div>
    )
}
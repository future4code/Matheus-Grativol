import axios from "axios"
import styled from "styled-components"
import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";


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

export default function TripDetailsPage() {

    const history = useHistory()

    const goToBack = ()=>{
        history.goBack()
    }
    return(
        <div>
            <div>
                <p>TripDetailsPage</p>
            </div>
            <div>
                <ButtonStyled onClick={goToBack}>Voltar</ButtonStyled>
            </div>
        </div>
    )
}
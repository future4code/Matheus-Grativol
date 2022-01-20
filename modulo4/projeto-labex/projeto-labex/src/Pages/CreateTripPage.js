import axios from "axios"
import styled from "styled-components"
import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function CreateTripPage() {

    const history = useHistory()

    const goToBack = () =>{
        history.goBack()
    }

    return(
        <div>
            <p>CreateTripPage</p>
            <form>
                <input/>
                <select></select>
                <input type={"date"}/>
                <input type={"text"}/>
                <input type={"text"}/>
            </form>
            <button onClick={goToBack}>Voltar</button>
            <button>Criar</button>
        </div>
    )
}
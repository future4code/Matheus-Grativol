import axios from "axios"
import styled from "styled-components"
import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function ApplicationFormPage() {

    const history = useHistory()

    const goToBack = () =>{
        history.goBack()
    }

    return(
        <div>
            <p>ApplicationFormPage</p>
            <form>
                <select></select>
                <input type={"text"}/>
                <input type={"number"}/>
                <input type={"text"}/>
                <input type={"text"}/>
                <select></select>
            </form>
            <button onClick={goToBack}>Voltar</button>
            <button>Enviar</button>
        </div>
    )
}
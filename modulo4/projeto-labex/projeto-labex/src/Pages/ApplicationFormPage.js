import axios from "axios"
import styled from "styled-components"
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";

const FormCreate = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const InputForm = styled.input`
    margin-bottom: 0.7rem;
    width: 25rem;
    height: 2rem;
    border-radius: 10px;
    border: none;
`
const SelectForm = styled.select`
    margin-bottom: 0.7rem;
    width: 25rem;
    height: 2rem;
    border-radius: 10px;
    border: none;
`
const Title = styled.h2`
    text-align: center;
    margin-bottom: 2rem;
`
const ContainerButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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

export default function ApplicationFormPage() {

    const history = useHistory()

    const goToBack = () => {
        history.goBack()
    }

    return (
        <div>
            <div>
                <Title>ApplicationFormPage</Title>
            </div>
            <div>
                <FormCreate>
                    <SelectForm>
                        <option></option>
                    </SelectForm>
                    <InputForm
                        type={"text"}
                        placeholder="Nome"
                    />
                    <InputForm
                        type={"number"}
                        placeholder="Idade"
                    />
                    <InputForm
                        type={"text"}
                        placeholder="Texto de Candidatura"
                    />
                    <InputForm
                        type={"text"}
                        placeholder="Profissão"
                    />
                    <SelectForm>
                        <option></option>
                    </SelectForm>
                </FormCreate>
            </div>
            <ContainerButton>
                <ButtonStyled onClick={goToBack}>Voltar</ButtonStyled>
                <ButtonStyled>Enviar</ButtonStyled>
            </ContainerButton>
        </div>
    )
}
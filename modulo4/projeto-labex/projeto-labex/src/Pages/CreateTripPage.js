import axios from "axios"
import styled from "styled-components"
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

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
    border: 1px black solid;
`
const SelectForm = styled.select`
    margin-bottom: 0.7rem;
    width: 25rem;
    height: 2rem;
    border-radius: 10px;
    border: 1px black solid;
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
export default function CreateTripPage() {

    const history = useHistory()

    const goToBack = () => {
        history.goBack()
    }

    return (
        <div>
            <div>
                <Title>CreateTripPage</Title>
                <FormCreate>
                    <InputForm
                        type={"text"}
                        placeholder="Nome"
                    />
                    <SelectForm></SelectForm>
                    <InputForm
                        type={"date"}
                    />
                    <InputForm
                        type={"text"}
                        placeholder="Descrição"

                    />
                    <InputForm
                        type={"text"}
                        placeholder="Duração em dias"
                    />
                </FormCreate>
            </div>
            <ContainerButton>
                <ButtonStyled onClick={goToBack}>Voltar</ButtonStyled>
                <ButtonStyled>Criar</ButtonStyled>
            </ContainerButton>

        </div>
    )
}
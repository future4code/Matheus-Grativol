import axios from "axios"
import styled from "styled-components"
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { Base_URL } from "../utils/constants";
import { getToken } from "../utils/localStorage";
import useForm from "../Hooks/useForm";

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
export default function CreateTripPage() {

    useProtectedPage()

    const history = useHistory()
    // const [form , setForm] = useState({name:"", planet:"", date:"" , description:"", durationInDays:""})

    const goToBack = () => {
        history.goBack()
    }
    const {form, onChange, cleanFields} = useForm({name:"", planet:"", date:"" , description:"", durationInDays:""})

    // const onChange = (event)=>{
    //     const {name, value} = event.target
    //     setForm({...form, [name]: value})
    // }
    // const onChange = ({target}) =>{
    //     setForm({...form, [target.name]: target.value})
    // }
    // const onChangeNome = ({target}) =>{
    //     setForm({...form, name: target.value})
    // }

    // const onChangeDate = ({target}) =>{
    //     setForm({...form, date: target.value})
    // }

    // const onChangeDescription = ({target}) =>{
    //     setForm({...form, description: target.value})
    // }

    // const onChangeDurationInDays = ({target}) =>{
    //     setForm({...form, durationInDays: target.value})
    // }
    const createTrip = (event) =>{
        event.preventDefault()
        axios.post(`${Base_URL}/trips`, form, {
            headers:{
                auth: getToken()
            }
        })
        .then(()=>{
            alert("Viagem Criada com Sucesso!")
            cleanFields()
        })
        .catch((err)=>{
            alert(err)
        })
    }

    console.log(form)


    return (
        <div>
            <div>
                <Title>Criar Viagem</Title>
                <FormCreate onSubmit={createTrip}>
                    <InputForm
                        placeholder="Nome"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                    />
                    <SelectForm placeholder="Planeta" name="planet"  onChange={onChange} required>
                        <option value={""} disabled >Escolha um planeta</option>
                        <option value={"Mecúrio"}>Mecúrio</option>
                        <option value={"Vênus"}>Vênus</option>
                        <option value={"Terra"}>Terra</option>
                        <option value={"Marte"}>Marte</option>
                        <option value={"Jupiter"}>Jupiter</option>
                        <option value={"Saturno"}>Saturno</option>
                        <option value={"Urano"}>Urano</option>
                        <option value={"Neturno"}>Neturno</option>
                        <option value={"Plutão"}>Plutão</option>
                    </SelectForm>
                    <InputForm
                        type={"date"}
                        name="date"
                        value={form.date}
                        onChange={onChange}
                        required
                    />
                    <InputForm
                        placeholder="Descrição"
                        required
                        value={form.description}
                        onChange={onChange}
                        name="description"
                        pattern={"^.{40,}"}
                        title={"Mínimo de 40 caracteris"}
                    />
                    <InputForm
                        placeholder="Duração em dias"
                        value={form.durationInDays}
                        onChange={onChange}
                        name="durationInDays"
                        required
                    />
                    <ContainerButton>
                        <ButtonStyled onClick={goToBack}>Voltar</ButtonStyled>
                        <ButtonStyled>Criar</ButtonStyled>
                    </ContainerButton>
                </FormCreate>
            </div>
            
        </div>
    )
}
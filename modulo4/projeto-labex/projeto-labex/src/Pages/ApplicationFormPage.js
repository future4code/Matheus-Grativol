import axios from "axios"
import styled from "styled-components"
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";
import { Base_URL } from "../utils/constants";
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

export default function ApplicationFormPage() {

    const [country , setCountry] = useState([])
    const [trips , setTrips] = useState([])
    const [tripId , setTripId] = useState("")
    const history = useHistory()

    const {form, onChange, cleanFields} = useForm({name:"", age:"", applicationText:"" , profession:"", country:""})

    const goToBack = () => {
        history.goBack()
    }

    const pegaId = ({target}) =>{
        setTripId(target.value)
    }

    const getPais = ()=>{
        axios.get("http://www.geonames.org/childrenJSON?geonameId=6255150")
        .then(({data})=>{
            setCountry(data.geonames)
        })
        .catch((err)=>{
            alert(err)
        })
    }
    const getTrips = ()=>{
        axios.get(`${Base_URL}/trips`)
        .then(({ data })=>{
            setTrips(data.trips)
        })
        .catch((err)=>{
            alert(err)
        })
    }
    useEffect(()=>{
        getTrips()
        getPais()
    }, [])

    const selectCountry = country.map((country)=>{
        return(
            <option key={country.countryId} value={country.name} >{country.name}</option>
        )
    })

    const selectTrip = trips.map((trip)=>{
        return(
            <option key={trip.di} value={trip.id}>{trip.name}</option>
        )
    })

    const applicaForm = (event) =>{
        event.preventDefault()
        axios.post(`${Base_URL}/trips/${tripId}/apply`, form)
        .then(()=>{
            alert("Inscrição concluida com sucesso!")
            cleanFields()
        })
        .catch((err)=>{
            alert(err)
        })
    }

    return (
        <div>
            <div>
                <Title>Inscreva-se para uma viagem</Title>
            </div>
            <div>
                <FormCreate onSubmit={applicaForm}>
                    <SelectForm placeholder="Viagem" value={tripId}  onChange={pegaId} required>
                        <option value={""} disabled >Escolha uma Viagem</option>
                        {selectTrip}
                    </SelectForm>
                    <InputForm
                        placeholder="Nome"
                        name="name"
                        value={form.name}
                        pattern={"^.{3,}"}
                        title="O nome deve ter no mínimo 3 caracteres" 
                        onChange={onChange}
                        required
                    />
                    <InputForm
                        type={"number"}
                        placeholder="Idade"
                        name="age"
                        value={form.age}
                        onChange={onChange}
                        required
                        min={18}
                    />
                    <InputForm
                        placeholder="Texto de Candidatura"
                        name="applicationText"
                        value={form.applicationText}
                        onChange={onChange}
                        pattern={"^.{30,}"} 
                        title="O texto deve ter no mínimo 30 caracteres"
                        required
                    />
                    <InputForm
                        placeholder="Profissão"
                        name="profession"
                        value={form.profession}
                        onChange={onChange}
                        pattern={"^.{10,}"} 
                        title={"A profissão deve ter no mínimo 10 caracteres"}
                        required
                    />
                    <SelectForm placeholder="Pais" name="country" onChange={onChange} required>
                        <option value={""} >Escolha um País</option>
                        {selectCountry}
                    </SelectForm>
                    <ContainerButton>
                        <ButtonStyled onClick={goToBack}>Voltar</ButtonStyled>
                        <ButtonStyled>Enviar</ButtonStyled>
                    </ContainerButton>
                </FormCreate>
            </div>
            
        </div>
    )
}
import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Base_URL } from "../utils/constants";
import { setToken } from "../utils/localStorage";

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

export default function PagePrivate() {

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const history = useHistory()

  const goToBack = () => {
    history.goBack()
  }

  const onChangerEmail = (e) =>{
    setEmail(e.target.value)
  }

  const onChangerPassword = ({target}) =>{
    setPassword(target.value)
  }

  const onSubmitLogin = () =>{
    axios.post(`${Base_URL}/login`, {
      email,
      password
    }).then(({data})=>{
      console.log(data)
      setToken(data.token)
      history.push("/AdminHome")
    })
    .catch((res)=>{
      alert(res)
    })
  }

  return (
    <div>
      <div>
        <Title>LoginPage</Title>
      </div>
      <div>
        <FormCreate>
          <InputForm 
          placeholder="E-mail"
          type={"text"} 
          value={email}
          onChange={onChangerEmail}
          />
          <InputForm 
          placeholder="Senha"
          type={"password"}
          onChange={onChangerPassword}
          value={password} 
          />
        </FormCreate>

      </div>
      <ContainerButton>
        <ButtonStyled onClick={goToBack}>Voltar</ButtonStyled>
        <ButtonStyled onClick={onSubmitLogin}>Entrar</ButtonStyled>
      </ContainerButton>
    </div>
  );
}

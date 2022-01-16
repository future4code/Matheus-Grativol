import react, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import App from '../../App';

const PhotoPerfl = styled.img`
  width: 55vh;
  height: 55vh;
  border-radius: 10px;
  margin-top: 1rem;
  box-shadow: 5px 5px 4px rgba(50, 50, 50, 0.75);
`
const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
`
const ContainerPerfil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #808080bd;
  border-radius: 10px;
`
const StyledP = styled.p`
  margin: 0;
`
export default function MatchCard(props) {

  useEffect(() => {
    props.pegarPerfil()
  }, [])

  const yMatch = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/MatheusGrativol/choose-person`
    const body = {
      "id": props.perfil.id,
      "choice": true
    }
    axios
      .post(url, body)
      .then(() => {
        alert("Match s2")
        props.pegarPerfil()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const nMatch = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/MatheusGrativol/choose-person`
    const body = {
      "id": props.perfil.id,
      "choice": false
    }
    axios
      .post(url, body)
      .then(() => {
        alert("Match :( ")
        props.pegarPerfil()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <div>
        <PhotoPerfl src={props.perfil.photo} alt='Foto Perfil' />
        <ContainerPerfil>
          <StyledP><b>{props.perfil.name}</b>, {props.perfil.age}</StyledP>
          <StyledP>{props.perfil.bio}</StyledP>
        </ContainerPerfil>
      </div>
      <ContainerButton>
        <button onClick={nMatch}>-</button>
        <button onClick={yMatch}>+</button>
      </ContainerButton>
    </div>
  )
}
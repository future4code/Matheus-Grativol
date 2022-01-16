import react, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import nLike from '../../img/cancelar.png'
import yLike from '../../img/life.png'

const PhotoPerfl = styled.img`
  width: 55vh;
  height: 55vh;
  border-radius: 10px;
  margin-top: 0.5rem;
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
  margin: 0.5rem 1rem 0 1rem;
`
const StyledP = styled.p`
  margin: 0;
`

const Icones =  styled.img`
  width: 3rem;
  padding: 0;
  margin: 0;
  cursor: pointer;
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
        {/* <button onClick={nMatch}><Icones src={nLike}/></button> */}
        <Icones src= {nLike} onClick={nMatch}/>
        <Icones src= {yLike} onClick={yMatch}/>
      </ContainerButton>
    </div>
  )
}
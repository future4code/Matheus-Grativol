import react, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ClearIcone from '../../img/trash.png'

const ContainerCards = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  margin: 1rem 1rem 0 1rem;
  align-items: center;
  background-color: whitesmoke;
  box-shadow: 3px 3px 3px rgba(255,0,0, 0.75);
`
const ImgCard = styled.img`
  width: 3rem;
  margin: 0.2rem;
  border-radius: 10px;
`
const Icones =  styled.img`
  width: 2rem;
  padding: 0;
  margin: 0;
  cursor: pointer;
`

const TextCard = styled.p`
  margin-left: 1rem;
`
const ContainerMatches = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: cursive;
  font-size: 1rem;
`
const ContainerPai = styled.div`

`
export default function TelaMatchs(props) {
    const [matches, setMatches] = useState([])

    const getMatches = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/MatheusGrativol/matches`
        axios
            .get(url)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                alert(err)
            })
    }

    const clearMatches = () => {
        console.log(matches)
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/MatheusGrativol/clear")
            .then(() => {
                alert("Matches Clean")
                getMatches()
            })
            .catch((err) => {
                alert(err)
            })
    }

    useEffect(() => {
        getMatches()
    }, [props.perfil])

    const renderedMatches = matches.map((match) => {
        return (
            <ContainerCards key={match.id}>
                <ImgCard src={match.photo} />
                <TextCard> {match.name}, {match.age} </TextCard>
            </ContainerCards>
        )
    })

    console.log(matches)

    return (
        <ContainerPai>
            <div>
                <ContainerMatches>
                    <p>❤ Matches List ❤ </p>
                    <Icones src= {ClearIcone} onClick={clearMatches}/>
                </ContainerMatches>
                {renderedMatches}
            </div>
        </ContainerPai>
    )
}
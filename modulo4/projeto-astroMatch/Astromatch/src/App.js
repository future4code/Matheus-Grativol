import react, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MatchCard from './components/MatchCard/MatchCard';
import TelaMatchs from './components/TelaMatchs/TelaMatchs';
import BackImg from './img/BackImg.jpg'

const ContainerPai = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ContainerMenu = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr 4rem;
  align-items: center;
  justify-items: center;
  border-bottom: 1px black solid;
  background-color: #ffff00b0;
  border-radius: 10px;
`
const ContainerMatch = styled.div`
  margin-top: 5vh;
  text-align: center;
  border: 1px black solid;
  border-radius: 10px;
  width: 60vh;
  height: 90vh;
  background-image:url(${BackImg});
`
function App(props) {

  const [perfil, setperfil] = useState({})
  const [tela, setTela] = useState(false)

  const pegarPerfil = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/MatheusGrativol/person")
    .then((res)=>{
      setperfil(res.data.profile)
    })
    .catch((err)=>{
      alert(err.data)
    })
  }

  const telas = () =>{
    if (tela === false) {
      return <MatchCard perfil = {perfil} pegarPerfil = {pegarPerfil}/>
    } else {
      return <TelaMatchs perfil = {perfil} pegarPerfil/>
    }
  }

  const trocaTela = () =>{
    setTela (!tela)
  }

  // console.log(perfil)


  return (
    <ContainerPai>
      <ContainerMatch>
        <div>
          {tela ? (
            <ContainerMenu>
              <button onClick={trocaTela}> - </button>
              <p>Astro Match</p>
              <p></p>
            </ContainerMenu>   
          ) : (
            <ContainerMenu>
              <p></p>
              <p>Hello Word</p>
              <button onClick={trocaTela}> + </button>
            </ContainerMenu>   
          )}
        </div>

        <div>
          {telas()}
        </div>
      </ContainerMatch>
    </ContainerPai>
  );
}

export default App;

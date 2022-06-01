import react from "react";
import styled from "styled-components";
import axios from "axios";
import TelaAddMusica from "./components/TelaAddMusica";
import TelaPlayLists from "./components/TelaPlayLists";
import Home from "./img/home.png";
import Usuario from "./img/usuario.png";

const ContainerPai = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 250px;
`

const ContainerInicio = styled.div`
  padding: 10px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #000000b3;
  height: 100vh;
`

const IconiHome = styled.img`
  width: 30px;
  padding: 20px;
`
const IconiUsuario = styled.img`
  width: 30px;
  padding: 20px;
`
const H2 = styled.h2`
  color: white;
`

const HomeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContainerBusca = styled.div`
  margin-bottom: 20px;
`
const ContainerUsuario = styled.div`
  text-align: center;
  background: #000000b3;
`
const ContainerIconiUsuario = styled.div`
  display: flex;
  align-items: center;
`
export default class App extends react.Component{

  state = {
    telas: "lists",
    inputPlayList: ""
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  handlePlaylist = (e) => {
    this.setState({inputPlayList: e.target.value})
  }

  escolheTela = () =>{
    switch (this.state.telas){
      case "lists":
        return <TelaPlayLists irParaAddMusica = {this.irParaAddMusica}/>
      case "addMusica":
        return <TelaAddMusica irParaPlaylists={this.irParaPlaylists}/>
      default:
        return <div>Erro</div>
    }
  }

  irParaPlaylists = () =>{
    this.setState({telas: "lists"})
  }

  irParaAddMusica = () => {
    this.setState({telas: "addMusica"})
  }

  addPlayList = () => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.inputPlayList
    }
    const headers = {
      headers: {
        Authorization: "matheus-grativol-joy"
      }
      
    }
    axios.post(URL, body, headers)
    .then((res) =>{
      alert("Playlist criada com sucesso!")
      this.setState({inputPlayList: ""})
    })
    .catch((err)=> {
      alert(err.response.data.message)
    })
  }

  render (){
    return (
      <ContainerPai>
        <ContainerInicio>
          <ContainerBusca>
            <HomeDiv>
              <IconiHome src={Home}/>
              <H2>Inicio</H2>
            </HomeDiv>
            <div>
              <input
                placeholder= "Nome da Playlist"
              />
              <button>Busca playlist</button>
            </div>
            
          </ContainerBusca>
          <div>
            <input
              value={this.state.inputPlayList}
              onChange={this.handlePlaylist}
              placeholder= "Nome da Playlist"
            />
            <button onClick={this.addPlayList}>Add Playlists</button>
          </div>   
        </ContainerInicio>

        <div>
          {this.escolheTela()}
        </div>

        <ContainerUsuario>
          <H2>Usuário</H2>
          <ContainerIconiUsuario>
            <IconiUsuario src= {Usuario} />
            <p>Matheus Grativol</p>
          </ContainerIconiUsuario>
          
        </ContainerUsuario>
        
      </ContainerPai>
    );
  }
  
}
